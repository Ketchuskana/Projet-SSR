// my-app/src/app/api/contact/routes.ts
'use server';

import { z } from 'zod';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const ContactSchema = z.object({
  name: z.string().min(2, { message: "Le nom doit comporter au moins 2 caractères." }),
  email: z.string().email({ message: "Adresse e-mail invalide." }),
  telephone: z.string().optional(),
  message: z.string().min(10, { message: "Le message doit comporter au moins 10 caractères." }),
});

export type State = {
  errors?: {
    name?: string[];
    email?: string[];
    message?: string[];
  };
  message?: string | null;
};

export async function submitContactForm(prevState: State, formData: FormData): Promise<State> {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const validatedFields = ContactSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    telephone: formData.get('telephone'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Échec de l'envoi du formulaire.",
    };
  }

  try {
    const { name, email, telephone, message } = validatedFields.data;

      // Vérifier si l'email existe déjà dans la base de données
      const existingUser = await prisma.user.findUnique({
        where: { email },
      });

      if (existingUser) {
        // Si l'email existe déjà, renvoyer un message indiquant que le message a déjà été envoyé
        return { message: "Vous avez déjà envoyé un message avec cet email." };
      }

    await prisma.user.create({
      data: {
        name,
        email,
        telephone: telephone || null,
        message,
      },
    });

    return { message: "Votre message a été envoyé avec succès !" };
  } catch (error: any) {
    console.error("Erreur Prisma :", error);
    return { message: "Erreur serveur : " + error.message };
  }
  
}
