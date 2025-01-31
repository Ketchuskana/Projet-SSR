# Description du projet

## SITE WEB POUR UNE AGENCE DIGITALE

**Agence&Vous** est une agence digitale spécialisée dans la réalisation de solutions pour les établissements et personnes du domaine du spectacle et du cinéma.

L'objectif était de créer le site web de l'agence afin de mettre en avant l'agence et ses différents projets réalisés.

### Technologies utilisées :
- **Next.js**
- **Tailwind CSS**
- **CSS**

### Répartition des tâches :
- **Myriam** : Création complète de la page d'accueil, ainsi que du header et du footer.
- **Ketchuskana** : Développement du formulaire de contact, fonctionnalité de tri par catégorie, déploiement du projet sur Vercel et animation de la page listing des projets.
- **Axelle** : Conception du listing des projets et de la page de détail des projets.

Les consignes spécifiques du projet sont disponibles ici : [Consignes du projet](https://gist.github.com/Punkte/d0ee076be261eafa4985282710e981af).

Ce projet illustre notre capacité à travailler en équipe, à respecter des consignes précises et à créer un site fonctionnel et esthétique.

🔗 **Consulter le projet en ligne** : [Lien vers le site](https://projet-ssr.vercel.app/)

---

# Instructions d'installation et de lancement

Après récupération du projet, il faut suivre ces étapes :

### Installation locale :

Après avoir cloné le repository :

1. Installer les dépendances :
   ```sh
   npm i
   ```
2. Supprimer le dossier Prisma existant.
3. Se rendre dans le dossier **my-app** du projet :
   ```sh
   cd my-app
   ```
4. Installer Prisma en mode développement :
   ```sh
   npm i prisma -D
   ```
5. Installer le client Prisma :
   ```sh
   npm install @prisma/client@latest
   ```
6. Initialiser Prisma avec SQLite :
   ```sh
   npx prisma init --datasource-provider SQLite
   ```
7. Modifier le fichier `schema.prisma` avec :

```prisma
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

8. Appliquer les migrations Prisma :
   ```sh
   npx prisma migrate dev --name init
   ```
9. Générer le client Prisma :
   ```sh
   npx prisma generate
   ```
10. Insérer des données de test :
    ```sh
    npx tsx seed.ts
    ```
11. Démarrer le serveur :
    ```sh
    npm run dev
    ```

---

# Fonctionnalités implémentées

- 🔍 Tri par catégorie
- 📩 Formulaire de contact

---

# Choix de conception

## **ProjectsPage**
Le composant **ProjectsPage** est conçu pour récupérer et afficher une liste de projets. Les appels à la base de données sont effectués directement côté serveur à l'aide de Prisma. Cela permet de générer un rendu HTML avant l'envoi au client, réduisant ainsi le transfert de données et améliorant les performances globales de l'application.

## **ProjetDetailsPage**
Le composant **ProjetDetailsPage** affiche les détails d'un projet unique. Les données sont récupérées via Prisma côté serveur, garantissant que la logique sensible (comme l'accès à la base de données) reste protégée. L'utilisation d'une fonction asynchrone assure que les requêtes en base de données sont effectuées efficacement et exclusivement sur le serveur.

## **ProjetContact**

Le formulaire de contact utilise use client pour permettre l'interactivité en temps réel avec l'utilisateur et use server pour gérer la validation et l'insertion des données côté serveur.
- Côté client (use client) : Permet l'affichage dynamique des erreurs et du statut du formulaire sans rechargement de la page.
- Côté serveur (use server) : Assure la validation sécurisée des données avec Zod et empêche toute altération des entrées utilisateur. L'enregistrement des messages dans la base de données est effectué via Prisma, évitant ainsi toute exposition de la logique métier au client

---

# Justification de l'utilisation des React Server Components (RSC)

### 🔹 **Performances améliorées**
- **ProjectsPage** récupère et affiche dynamiquement une liste de projets côté client. Grâce à `use client`, le contenu de la page s'adapte en temps réel aux changements, comme la sélection de catégories.
- Les appels à la base de données via Prisma sont déclenchés côté client, garantissant une expérience interactive.
- Le formulaire de contact combine use client et use server pour assurer une gestion efficace des entrées utilisateur et un rendu dynamique sans rechargement de page. La validation côté serveur améliore la sécurité et l'intégrité des données, tout en limitant la charge sur le client.

### 🔹 **Simplicité côté client**
En déléguant le traitement des données au serveur, le client reçoit une page pré-rendue, évitant ainsi la gestion de requêtes complexes ou d'états inutiles côté client. 

### 🔹 **Adaptation au type de contenu**
Les **RSC** sont idéaux pour les pages où les données sont majoritairement statiques ou semi-dynamiques, comme une liste de projets ou des détails spécifiques. Cela garantit une architecture robuste et optimisée pour le rendu de contenu.

---

# 📊 Rapport de performance

📄 **Consulter le rapport détaillé** : [Google Doc](https://docs.google.com/document/d/103dzG4FufLaIITmd8UwIWbJnr6dIuOCTtCq4YYjw3I8/edit?usp=sharing)

---

📌 **Merci d'avoir lu !** 😊 🚀

