'use client';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

interface Project {
  id: number;
  name: string;
  contexte: string;
  technologies: string;
  resultats: string;
  objectifs: string;
  client: string;
  date_realisation?: string;
  images?: string;
  videos?: string;
  testimonials?: string;
}

async function fetchProjectById(id: number): Promise<Project> {
    const response = await fetch(`http://localhost:3000/api/projet/${id}`);
    if (!response.ok) throw new Error('Erreur lors du chargement du projet');
  return response.json();
}

export default function ProjectDetailPage() {
  const params = useParams();
  const id = params?.id ? Number(params.id) : null; //

  const [project, setProject] = useState<Project | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      fetchProjectById(id)
        .then(setProject)
        .catch((err) => setError(err.message));
    }
  }, [id]);

  if (error) return <p>Erreur : {error}</p>;

  if (!project) return <p>Chargement...</p>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">{project.name}</h1>

      <div className="my-6">
        {project.images && (
          <img
            src={project.images}
            alt={project.name}
            className="rounded-lg mb-4 w-full h-96 object-cover"
          />
        )}
        {project.videos && (
          <video controls className="w-full h-auto my-4">
            <source src={project.videos} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </div>

      <div className="space-y-4">
        {project.contexte && <p><strong>Contexte :</strong> {project.contexte}</p>}
        {project.objectifs && <p><strong>Objectifs :</strong> {project.objectifs}</p>}
        {project.technologies && <p><strong>Technologies :</strong> {project.technologies}</p>}
        {project.resultats && <p><strong>Résultats :</strong> {project.resultats}</p>}
        {project.client && <p><strong>Client :</strong> {project.client}</p>}
        {project.date_realisation && <p><strong>Date de réalisation :</strong> {new Date(project.date_realisation).toLocaleDateString()}</p>}
        {project.testimonials && <p><strong>Témoignages :</strong> {project.testimonials}</p>}
      </div>
    </div>
  );
}
