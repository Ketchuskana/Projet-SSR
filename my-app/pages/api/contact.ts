import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, telephone, message } = req.body;
    const completed = Boolean(name && email && telephone && message);

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Name, email, and message are required.' });
    }

    try {
      const user = await prisma.user.create({
        data: {
          name,
          email,
          telephone: telephone || null,
          message,
          completed,
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
