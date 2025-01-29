// app/projet/page.tsx
import Link from "next/link";

interface Project {
  id: number;
  name: string;
  images: string;
  description: string;
}

async function fetchProjects(): Promise<Project[]> {
  const response = await fetch('http://localhost:3000/api/projet');
  if (!response.ok) throw new Error('Erreur lors du chargement des projets');
  return response.json();
}

export default async function ProjectsPage() {
  let projects: Project[] = [];
  let error: string | null = null;

  try {
    projects = await fetchProjects();
  } catch (err: any) {
    error = err.message;
  }

  if (error) return <p>Erreur : {error}</p>;

  return (
    <ul>
      {projects.map((project) => (
        <li key={project.id} className="mb-4 border-b pb-4">
          <Link href={`/projet/${project.id}`} className="text-blue-600 hover:underline">
            <img
              src={project.images}
              alt={project.name}
              className="rounded-lg mb-4 w-full h-48 object-cover"
            />
            <h2 className="text-xl font-semibold">{project.name}</h2>
          </Link>
          <p>
            <strong>Catégorie :</strong> {project.description}
          </p>
        </li>
      ))}
    </ul>
  );
}
