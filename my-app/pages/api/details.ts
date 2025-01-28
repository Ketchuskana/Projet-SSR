import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const { id, name, description, contexte, technologies, resultats, objectifs, client, date_realisation, images, videos, testimonials} = req.body;
    // const completed = Boolean(name && email && telephone && message);


    try {
      const user = await prisma.user.create({
        data: {
            id, 
            name, 
            description: description || null, 
            contexte, 
            technologies, 
            resultats, 
            objectifs, 
            client : client || null, 
            date_realisation : date_realisation || null, 
            images, 
            videos : videos || null, 
            testimonials: testimonials || null
        },
      });

      return res.status(201).json(user);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'An error occurred while saving the data.' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ error: `Method ${req.method} not allowed.` });
  }
}
