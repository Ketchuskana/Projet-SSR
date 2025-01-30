// my-app/src/app/api/projet/route.ts
import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET(request: Request) {
  const url = new URL(request.url);
  const tech = url.searchParams.get('tech'); // Récupère le paramètre 'tech' de l'URL

  try {
    const projects = await prisma.projet.findMany({
      where: tech
        ? {
            technologies: {
              contains: tech, // Filtrer les projets dont 'technologies' contient la valeur 'tech'
            },
          }
        : {}, // Si pas de filtre, récupère tous les projets
      select: {
        id: true,
        name: true,
        images: true,
        description: true,
      },
    });
    return NextResponse.json(projects);
  } catch (error) {
    console.error('Erreur lors de la récupération des projets :', error);
    return NextResponse.json({ message: 'Erreur interne du serveur.' }, { status: 500 });
  }
}
