import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const { id } = req.query; // Utilise req.query pour récupérer l'ID depuis l'URL

    try {
      const projet = await prisma.projet.findUnique({
        where: {
          id: Number(id), 
        },
      });

      if (!projet) {
        return res.status(404).json({ error: 'Project not found' });
      }

      return res.status(200).json(projet);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'An error occurred while fetching the data.' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).json({ error: `Method ${req.method} not allowed.` });
  }
}
