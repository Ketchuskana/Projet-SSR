'use client';

import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";

type Projets = {
  id: number;
  name: string;
  contexte: string;
  technologies: string;
  resultats: string;
  objectifs: string;
  client: string;
  images: string;
  videos: string;
  testimonials: string;
};

type Props = {
  projet: Projets;
};

const ProjetPage = ({ projet }: Props) => {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold">{projet.name}</h1>
      <img src={projet.images} alt={projet.name} className="rounded-lg my-4" />
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
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch('http://localhost:3000/api/details');
  const projets = await res.json();

  const paths = projets.map((projet: Projets) => ({
    params: { id: projet.id.toString() },
  }));

  return {
    paths,
    fallback: false, // Ou true selon ton besoin
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params!;
  const res = await fetch(`http://localhost:3000/api/details/${id}`);
  const projet = await res.json();

  return {
    props: {
      projet,
    },
  };
};

export default ProjetPage;
