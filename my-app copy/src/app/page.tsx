"use client"
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import LogoCarousel from "../../Carousel";
import NewsCarousel from "../../Newsletter Carousel";
// import { CldImage } from 'next-cloudinary';
// import Rating from "../../Rating";
// import LinkButton from "../../LinkButton";

export default function Home() {
  // const [rating, setRating] = useState(3);
  const bottomRef = useRef<HTMLDivElement>(null);

  const words: string[] = ["et de développement créatif", "spécialisé dans l'industrie cinématographique", "pionniers dans le contenu digitale fictifs", "pionners dans le développement d'expositions créatifs", "à Paris", "à Lyon"];

  const [currentWord, setCurrentWord] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const handleType = () => {
      const fullText = words[loopNum % words.length];
      setCurrentWord(isDeleting ? fullText.substring(0, index - 1) : fullText.substring(0, index + 1));
      setIndex(isDeleting ? index - 1 : index + 1);

      if (!isDeleting && index === fullText.length) {
        setTimeout(() => setIsDeleting(true), 500);
      } else if (isDeleting && index === 0) {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const typingSpeed = isDeleting ? 50 : 150;
    const timer = setTimeout(handleType, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentWord, isDeleting, index, loopNum]);


  const scrollToBottom = () => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <main className="flex flex-col sm:items-start">
      <header className="relative flex flex-col items-center justify-center w-full h-screen overflow-hidden">
        {/* <nav className="relative z-30 p-5 text-2xl text-black bg-purple-300 bg-opacity-50 rounded-xl">
          <a href="">Nos projets web</a>
          <a href="">Contenus web</a>
        </nav> */}
        <div className="relative z-30 p-5 text-2xl text-black">
          Agence de réalisation de contenus web fictifs et promotionnels pour le cinéma à Paris et Lyon
        </div>
        <button
        onClick={scrollToBottom}
        className="relative z-30 px-4 py-2 bg-white text-black rounded hover:bg-blue-700"
      >
        En savoir plus
      </button>
        <video autoPlay loop muted className="absolute z-10 w-auto min-w-full min-h-full max-w-none">
          <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />Your browser does not support the video tag.
        </video>
      </header>
      <div className="relative flex flex-col mx-auto my-12" ref={bottomRef}>
        <p className="text-black mx-auto font-dm-sans">L24</p>
        <p className="text-black max-w-[400px] font-raleway">Services web pour des productions cinématographique (applications, contenu, simulation de stream...)</p>
      </div>
      <div className="mb-5 h-1 bg-gray-200">
  <div className="h-1 bg-purple-500" style={{width: "75%"}}></div>
</div>
      <div className="relative w-full flex flex-col items-center justify-center mb-12 overflow-hidden">
        <div className="relative z-30 p-5 text-2xl text-black font-dm-sans">
          Une agence web, d'édition logiciels {currentWord}
        </div>
        <div className="relative z-30 p-5 text-black max-w-[1000px] font-raleway">
        L20 (on verra le nom après ) est une agence spécialisée dans le développement web, l'édition de logiciels et la création de contenus créatifs pour l'industrie cinématographique. Grâce à notre expertise et notre expérience, nous vous accompagnons dans la réalisation de sites web innovants, de logiciels sur mesure, et de projets créatifs variés.

Nous offrons également des services de développement de plateformes e-learning, de gestion de contenu, et de solutions interactives pour enrichir vos projets cinématographiques. Notre équipe est dédiée à fournir des solutions de haute qualité qui répondent aux besoins spécifiques de chaque client.

Depuis plusieurs années, nous collaborons avec des entreprises de renom dans le secteur du cinéma, et nous sommes fiers de contribuer à leur succès et à leur croissance.
        </div>
        {/* <div>
          <LinkButton pageRoute={"/contact"}>
            <button>Contactez-nous</button>
          </LinkButton>
        </div> */}
        <Image
            aria-hidden
            src="/test.jpg"
            alt="Globe icon"
            width={0}
            height={0}
            className="absolute z-10 w-full min-w-full min-h-full max-w-none"
          />
      </div>
      <div className="relative flex flex-col mx-auto">
        <p className="text-black mx-auto text-2xl pb-7 font-dm-sans">Contenus fictifs</p>
        <p className="text-black max-w-[1000px] font-raleway">Depuis de nombreuses années, nous offrons des services d'édition de contenus web fictifs spécialement conçus pour répondre aux besoins variés de l'industrie cinématographique. Que ce soit pour des besoins temporaires ou pour la promotion d'un film ou d'une série, nous vous accompagnons dans la création de solutions web sur mesure.

Nous développons des applications personnalisées et des sites web innovants qui répondent aux exigences uniques de chaque projet cinématographique. Notre expertise nous permet de vous offrir des plateformes interactives et des outils de gestion de contenu qui enrichissent vos productions.</p>
      {/* <div>
          <LinkButton pageRoute={"/contact"}>
            <button>Contactez-nous</button>
          </LinkButton>
        </div> */}
      </div>

<div className="relative w-full flex flex-col items-center justify-center my-12 overflow-hidden">
        <div className="relative z-30 p-5 text-2xl text-black font-dm-sans">
        Et si votre projet passez à l'IA générative ?
        </div>
        <div className="relative z-30 p-5 max-w-[1000px] text-black font-raleway">
        Vous avez un projet de film cinématographique nécessitant des assets graphiques 3D ou 2D automatisés ? C’est maintenant possible grâce à notre service d'IA générative ! Nous créons des assets graphiques de haute qualité pour vos productions cinématographiques, qu'il s'agisse de films, de séries ou de publicités.

Grâce à notre technologie avancée et à notre expertise en intelligence artificielle, nous générons des éléments visuels qui s'intègrent parfaitement à vos projets. Nous nous occupons de tout, de la conception à la réalisation, pour vous offrir des solutions graphiques innovantes et automatisées.

Passez le cap de la production cinématographique avec nos services d'IA générative et donnez vie à vos idées avec des assets graphiques de qualité professionnelle.
        </div>
        {/* <div>
          <LinkButton pageRoute={"/contact"}>
            <button>Contactez-nous</button>
          </LinkButton>
        </div> */}
        <Image
            aria-hidden
            src="/test.jpg"
            alt="Globe icon"
            width={0}
            height={0}
            className="absolute z-10 w-full min-w-full min-h-full max-w-none"
          />
      </div>
        
      <div className="relative grid grid-cols-4 gap-4 mx-auto text-black my-12">
        <div className="flex flex-col">
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          <p>2870</p>
          <p className="font-barlow">Projets en 10 ans</p>
        </div>
        <div className="flex flex-col">
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          <p>100</p>
          <p className="font-barlow">Clients satisfaits</p>
        </div>
      </div>
      <button
      type="button"
      className="relative mx-auto text-black bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 my-5 transition-transform duration-500 ease-in-out transform hover:scale-110"
    >
      <Image width={96} height={96} src="https://img.icons8.com/material-rounded/96/FFFFFF/down.png" alt="down" />
      <span className="sr-only">Icon description</span>
    </button>
<div className="relative flex flex-col mx-auto my-12">
        <p className="text-black mx-auto font-[Roboto] pb-3">L24</p>
        <p className="text-black mx-auto text-2xl pb-7 font-dm-sans">Exemples de réalisation de site internet</p>
        <div className="relative grid grid-cols-4 gap-4 mx-auto text-black">
        <div className="flex flex-col">
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          <p className="font-barlow">Wesite 1</p>
        </div>
        <div className="flex flex-col">
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          <p className="font-barlow">Website 2</p>
        </div>
      </div>
      </div>
      <div className="relative flex flex-col mx-auto mbmy-12">
        <p className="text-black mx-auto font-[Roboto] pb-3">L24</p>
        <p className="text-black text-2xl pb-7 font-dm-sans">Exemples de réalisation de logiciels ou contenus fictifs</p>
        <div className="relative grid grid-cols-4 gap-4 mx-auto text-black">
        <div className="flex flex-col">
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          <p className="font-barlow">Software 1</p>
        </div>
        <div className="flex flex-col">
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={86}
            height={86}
          />
          <p className="font-barlow">Software 2</p>
        </div>
      </div>
      </div>
      <div className="relative flex flex-col mx-auto my-12">
        <p className="text-black mx-auto font-nunito-sans pb-3">L24</p>
        <p className="text-black text-2xl pb-7 font-dm-sans">Exemples de réalisation créatifs évènementiels</p>
        <div className="relative grid grid-cols-4 gap-4 mx-auto text-black">
        <div className="flex flex-col">
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={86}
            height={86}
          />
          <p className="font-barlow">Creative dev 1</p>
        </div>
        <div className="flex flex-col">
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={86}
            height={86}
          />
          <p className="font-barlow">Creative dev 2</p>
        </div>
      </div>
      </div>
      <div className="relative flex flex-col mx-auto my-12">
      <p className="text-black mx-auto text-2xl pb-7 font-dm-sans">Les services de L24</p>
      <div className="grid grid-cols-3 gap-4 max-auto text-black">
        <div className="flex flex-col">
          <Image
            aria-hidden
            src="/test.jpg"
            alt="Globe icon"
            width={86}
            height={86}
            className="rounded-full object-center"
          />
          <p className="pb-3">L24</p>
          <p className="text-2xl font-quicksand">Contenus web fictifs</p>
        </div>
        <div className="flex flex-col">
          <Image
            aria-hidden
            src="/test.jpg"
            alt="Globe icon"
            width={86}
            height={86}
            className="rounded-full object-center"
          />
          <p className="pb-3">L24</p>
          <p className="text-2xl font-quicksand">Edition logiciels</p>
        </div>
        <div className="flex flex-col">
          <Image
            aria-hidden
            src="/test.jpg"
            alt="Globe icon"
            width={86}
            height={86}
            className="rounded-full object-center"
          />
          <p className="pb-3">L24</p>
          <p className="text-2xl font-quicksand">Setup interactifs promotionnels</p>
        </div>
      </div>
      </div>
      
      {/* <div>
          <LinkButton pageRoute={"/contact"}>
            <button>Contactez-nous</button>
          </LinkButton>
        </div> */}
      <div className="relative flex flex-col mx-auto mb-12">
        <p className="text-black mx-auto pb-3">L24</p>
        <p className="text-black mx-auto text-2xl pb-7 font-dm-sans">Ils nous font confiance</p>
        <LogoCarousel/>
      </div>
      {/* <div className="relative flex flex-col mx-auto mb-12">
        <p className="text-black text-2xl">Ce que nos clients pensent de nos services : (grid and last review grades only at the bottom)</p>
      </div> */}
      <div className="relative flex flex-col mx-auto mb-12">
        <p className="text-black mx-auto">L24</p>
        <p className="text-black mx-auto text-2xl pb-7 font-dm-sans">Articles récents</p>
        <NewsCarousel />
      </div>
      </main>
      <footer className="flex flex-col gap-6 items-center justify-center text-black font-bold">
        <div className="p-4">

          <div className="flex flex-col">
          <div className="flex gap-10">
          <div className="font-dm-sans">
            L24 Agency
          </div>
          <div>
            Agence et prestatire de réalisations web pour le cinéma
          </div>
          <hr></hr>
          </div>
          </div>

        </div>

        <div className="flex pb-7 gap-10">
        <div className="flex flex-col">

<div className="font-dm-sans">Contacts</div> 
<div className="flex">
  <div>
    Téléphone:
  </div>
  <p>06 37 89 46 91 70</p>
</div> 

</div>
<div className="flex flex-col">

<div className="font-dm-sans">Liens rapides</div> 
<div className="flex">
  <div>
    Contenus fictifs web -
  </div>
  <div>
    Editions de logiciels de Chat - 
  </div>
  <div>
    Environnements créatifs
  </div>
</div> 
        </div>
        <hr></hr>
        </div>

        <div className="p-4">

          <div className="flex flex-col">
          <div className="flex gap-10">
          <div>
            <Image src="https://img.icons8.com/?size=100&id=88661&format=png&color=FFFFFF" width={10} height={10} alt="copyright"/>
          </div>
          <div className="font-raleway">
            Tous droits réservés L24 Corporation
          </div>
          </div>
          </div>

        </div>
          {/* <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          /> */}
          {/* <CldImage
          src="cld-sample-5" // Use this sample image or upload your own via the Media Explorer
          width="500" // Transform the image: auto-crop to square aspect_ratio
          height="500"
          crop={{
            type: 'auto',
            source: true
          }} alt={"Random image test"}
          /> */}
          {/* <Image
          src="cld-sample-5" // Use this sample image or upload your own via the Media Explorer
          width={16}
          height={16}
          alt={"Random image test"}
          /> */}
      </footer>
    </div>
  );
}
