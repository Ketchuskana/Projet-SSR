// app/projet/[id]/page.tsx
import { PrismaClient } from '@prisma/client';
import Image from "next/image";
import { notFound } from "next/navigation";

const prisma = new PrismaClient();

interface Project {
    id: number;
    name: string;
    images: string;
    description: string;
    contexte: string;
    technologies: string;
    client: string;
    date_realisation: string;
    objectifs: string;
    resultats: string;
}

interface Props {
    params: {
        id: string;
    };
}

const ProjetPage = async ({ params }: Props) => {
    // Utilisation de Prisma pour récupérer les détails du projet
    const projet = await prisma.projet.findUnique({
        where: { id: parseInt(params.id) }, // Récupération du projet par son ID
    });

    if (!projet) {
        notFound(); // Si le projet n'existe pas, on renvoie une erreur 404
    }

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Projet : {projet.name}</h1>
            <div className="card">
                <Image
                    src={projet.images}
                    width={400}
                    height={300}
                    alt={projet.name}
                    className="rounded-lg mb-4"
                />
                <p className="text-lg mb-2">{projet.description}</p>
                <p className="text-gray-600 mb-2">
                    <strong>Contexte :</strong> {projet.contexte}
                </p>
                <p className="text-gray-600 mb-2">
                    <strong>Technologies utilisées :</strong> {projet.technologies}
                </p>
                <p className="text-gray-600 mb-2">
                    <strong>Client :</strong> {projet.client}
                </p>
                <p className="text-gray-600 mb-2">
                    <strong>Date de réalisation :</strong> {new Date(projet.date_realisation).toLocaleDateString()}
                </p>
                <ul className="list-disc pl-5">
                    <li>
                        <strong>Objectif :</strong> {projet.objectifs}
                    </li>
                    <li>
                        <strong>Résultat :</strong> {projet.resultats}
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default ProjetPage;
