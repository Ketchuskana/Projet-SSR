interface Project {
    id: number;
    name: string;
    images: string;
    description: string;
}

async function fetchProjects(): Promise<Project[]> {
    const response = await fetch('http://localhost:3000/api/projet');
    console.log(response)
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
                </div>
            ))}
        </div>
    );
}
