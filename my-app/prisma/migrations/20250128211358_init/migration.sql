-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "telephone" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "completed" BOOLEAN NOT NULL DEFAULT false
);

-- CreateTable
CREATE TABLE "Projet" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "contexte" TEXT NOT NULL,
    "technologies" TEXT NOT NULL,
    "resultats" TEXT NOT NULL,
    "objectifs" TEXT NOT NULL,
    "client" TEXT NOT NULL,
    "date_realisation" DATETIME NOT NULL,
    "completed" BOOLEAN NOT NULL DEFAULT false,
    "images" TEXT NOT NULL,
    "videos" TEXT NOT NULL,
    "testimonials" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
