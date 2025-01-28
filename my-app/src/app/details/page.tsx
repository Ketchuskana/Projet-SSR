'use client';

import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";

type Projets = {
    id Number;
    name String;
    // description String ;   
    contexte String;
    technologies String;
    resultats String;
    objectifs String;
    client String ;
    // date_realisation   DateTime; 
    // completed Boolean;
    images String  ;
    videos String  ;
    testimonials String ;
};

type Props = {
  projet: Projets;
};

const ProjetPage = ({ projet }: Props) => {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold">{projet.name}</h1>
      <img src={projet.image} alt={projet.name} className="rounded-lg my-4" />
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
        <strong>Completed :</strong> {projet.name}
      </p>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const req = await fetch("/api/details");
  const res = await req.json();

  const paths = res.results.map((projet: Projet) => ({
    params: { id: ^projet.id.toString() },
  }));

  return {
    paths,
    fallback: false, 
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params!;
  const req = await fetch(`api/details/${id}`);
  const character = await req.json();

  return {
    props: {
      character,
    },
  };
};

export default ProjetPage;

