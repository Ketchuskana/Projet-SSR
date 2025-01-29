import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        if (req.method === 'GET') {

            const projects = await prisma.projet.findMany({
                select: {
                    id: true,
                    images: true,
                    name: true,
                    description: true,
                },
            });

            res.status(200).json(projects);
        } else {
            res.setHeader('Allow', ['GET']);
            res.status(405).json({ message: `Méthode ${req.method} non autorisée.` });
        }
    } catch (error) {
        console.error('Erreur lors de la récupération des projets :', error);
        res.status(500).json({ message: 'Erreur interne du serveur.' });
    }
}
