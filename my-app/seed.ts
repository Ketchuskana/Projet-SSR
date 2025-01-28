import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.projet.createMany({
    data: [
      {
        name: "Site e-commerce",
        description: "Un site de vente en ligne moderne.",
        client: "Client A",
        date_realisation: new Date("2023-12-01"),
        completed: false,
      },
      {
        name: "Application mobile",
        description: "Une application mobile pour gérer les tâches.",
        client: "Client B",
        date_realisation: new Date("2024-01-15"),
        completed: true,
      },
      {
        name: "Portfolio créatif",
        description: "Un portfolio pour un artiste.",
        client: "Client C",
        date_realisation: new Date("2024-02-10"),
        completed: false,
      },
    ],
  });

  console.log("Projets ajoutés avec succès !");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
