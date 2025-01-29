import prisma from "@/app/Prisma"; // Assurez-vous que le chemin vers Prisma est correct
import Image from "next/image";
import { notFound } from "next/navigation";

type Props = {
    params: {
        id: string;
    };
};

export default async function ProjetDetailsPage({ params }: Props) {
    const projet = await prisma.projet.findUnique({
        where: { id: parseInt(params.id) },
    });

    if (!projet) {
        notFound();
    }

    return (
        <div className="p-4">
            <h1 className="text-3xl font-bold">{projet.name}</h1>
            <Image
                src={projet.images} // Y'a un pb ici, il faut mettre / avant de mettre tout le reste si c'est pas fait (exemple : "/download.jpg" )
                width={400}
                height={300}
                alt={projet.name}
                className="rounded-lg my-4"
            />
            <p>
                <strong>Name :</strong> {projet.name}
            </p>
            <p>
                <strong>Technologies :</strong> {projet.technologies}
            </p>
            <p>
                <strong>Contexte :</strong> {projet.contexte}
            </p>
            <p>
                <strong>Objectifs :</strong> {projet.objectifs}
            </p>
            <p>
                <strong>Client :</strong> {projet.client}
            </p>
            <p>
                <strong>Resultats :</strong> {projet.resultats}
            </p>
            <p>
                <strong>Testimonials :</strong> {projet.testimonials}
            </p>
            <p>
                <strong>Videos :</strong> {projet.videos}
            </p>
        </div>
    );
}
