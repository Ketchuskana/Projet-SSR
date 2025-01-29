// app/projet/page.tsx
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

interface Project {
    id: number;
    name: string;
    images: string;
    description: string;
}

export default async function ProjectsPage() {
    let projects: Project[] = [];
    let error: string | undefined;

    try {
        projects = await prisma.projet.findMany({
            select: {
                id: true,
                images: true,
                name: true,
                description: true,
            },
        });
    } catch (err: unknown) {
        if (err instanceof Error) {
            error = err.message;
        } else {
            error = 'An unknown error occurred';
        }
    }

    if (error) {
        return <p>Erreur : {error}</p>;
    }

    return (
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
                <div
                    key={project.id}
                    className="rounded-xl shadow-lg p-4 border border-gray-200 hover:shadow-xl transition-shadow"
                >
                    <img
                        src={project.images}
                        alt={project.name}
                        className="rounded-lg mb-4 w-full h-48 object-cover"
                    />
                    <h2 className="text-xl font-bold">{project.name}</h2>
                    <p className="text-gray-600">{project.description}</p>
                    <a
                        href={`/details/${project.id}`}
                        className="text-blue-500 hover:underline mt-4 inline-block"
                    >
                        Voir plus
                    </a>
                </div>
            ))}
        </div>
    );
}
