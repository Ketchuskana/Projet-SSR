1.Description du projet
SITE WEB POUR UNE AGENCE DIGITALE:
Agence&Vous est une agence digitale spécialisé dans la réalisation de solution pour les établissements et personnes du domaines du spéctacle et du cinéma. 
L'objectif était de faire le site web de l'agence pour mettre en avant l'agence et ses différents projets réalisés.
Le projet réalisé est donc le site web de l'agence en NextJs, TailwindCSS et CSS. Il a été réalisé par:
  -Myriam a pris en charge la création complète de la page d'accueil ainsi que du header et footer;
  -Ketchuskana s'est concentré sur le développement du formulaire de contact, la fonctionnalité de tri par catégorie, ainsi que le déploiement du projet sur Vercel et de l'animation de la page listing des projets.
  -Axelle a travaillé sur le listing des projets et la conception de la page de détail des projets.
Les consignes spécifiques du projet sont disponibles ici : [LiensVersConsigne(https://gist.github.com/Punkte/d0ee076be261eafa4985282710e981af)].
Ce projet illustre notre capacité à travailler en équipe, à respecter des consignes précises et à créer un site fonctionnel et esthétique.
Il est disponible de consulter notre projet ici: https://projet-ssr.vercel.app/

2.Instructions d'installation et de lancement
Après récupération du projet, il faut:
# Installation local :

Après avoir cloner le repo :

## 1. Faire la commande ```npm i``` afin d'installer toutes les dépendances nécessaires

## 2. Supprimer le dossier prisma existant

## 3. Se rendre dans le dossier "my-app" de notre projet via la commande ```cd```

## 4. ```npm i prisma -D```

## 5. ```npm install @prisma/client@latest```

## 6. ```npx prisma init --datasource-provider SQLite```

## 7. Aller dans le dossier Prisma "schema.prisma" et mettre :

```
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model User {
  id          Int      @id @default(autoincrement())
  createdAt   DateTime @default(now())
  name        String
  email       String   @unique
  telephone   String  
  message     String
  completed   Boolean  @default(false)
}

model Projet {
  id                 Int       @id @default(autoincrement())
  name               String
  description        String    
  contexte           String
  technologies       String
  resultats          String
  objectifs          String
  client             String 
  date_realisation   DateTime 
  completed          Boolean   @default(false)
  images             String  
  videos             String  
  testimonials       String 
}

```


## 8. ```npx prisma migrate dev --name init```

## 9. ```npx prisma generate```

## 10. ```npx tsx seed.ts```

## 11. Vous pouvez lancer via la commande ```npm run dev```
