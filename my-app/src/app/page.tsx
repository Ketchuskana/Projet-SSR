"use client"
import Image from "next/image";
import { useRef } from "react";
// import { CldImage } from 'next-cloudinary';
// import Rating from "../../Rating";
// import LinkButton from "../../LinkButton";

export default function Home() {
  // const [rating, setRating] = useState(3);
  const bottomRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <main className="flex flex-col sm:items-start">
      <header className="relative flex flex-col items-center justify-center w-full h-screen overflow-hidden">
        {/* <nav className="relative z-30 p-5 text-2xl text-white bg-purple-300 bg-opacity-50 rounded-xl">
          <a href="">First</a>
          <a href="">second</a>
        </nav> */}
        <button
        onClick={scrollToBottom}
        className="relative z-30 px-4 py-2 bg-white text-black rounded hover:bg-blue-700"
      >
        En savoir plus
      </button>
        <div className="relative z-30 p-5 text-2xl text-white">
          Agence de réalisation de contenus web fictifs et promotionnels pour le cinéma à Paris et Lyon
        </div>
        <video autoPlay loop muted className="absolute z-10 w-auto min-w-full min-h-full max-w-none">
          <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />Your browser does not support the video tag.
        </video>
      </header>
      <div className="relative flex flex-col mx-auto" ref={bottomRef}>
        <p className="text-white mx-auto">L24</p>
        <p className="text-white">Services web pour des productions cinématographique (applications, contenu, simulation de stream...)</p>
      </div>
      <div className="mb-5 h-1 bg-gray-200">
  <div className="h-1 bg-purple-500" style={{width: "75%"}}></div>
</div>
      <div className="relative w-full flex flex-col items-center justify-center h-80 mb-12 overflow-hidden">
        <div className="relative z-30 p-5 text-2xl text-white">
          Une agence web, d'édition logiciels et de développement créatif
        </div>
        <div className="relative z-30 p-5 text-2xl text-white">
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
        <div className="mx-auto text-white"></div>
        <p className="text-white mx-auto">Contenus fictifs</p>
        <p className="text-white max-w-[1000px]">Depuis de nombreuses années, nous offrons des services d'édition de contenus web fictifs spécialement conçus pour répondre aux besoins variés de l'industrie cinématographique. Que ce soit pour des besoins temporaires ou pour la promotion d'un film ou d'une série, nous vous accompagnons dans la création de solutions web sur mesure.

Nous développons des applications personnalisées et des sites web innovants qui répondent aux exigences uniques de chaque projet cinématographique. Notre expertise nous permet de vous offrir des plateformes interactives et des outils de gestion de contenu qui enrichissent vos productions.</p>
      {/* <div>
          <LinkButton pageRoute={"/contact"}>
            <button>Contactez-nous</button>
          </LinkButton>
        </div> */}
      </div>

<div className="relative w-full flex flex-col items-center justify-center h-80 mb-12 overflow-hidden">
        <div className="relative z-30 p-5 text-2xl text-white">
        Et si votre projet passez à l'IA générative ?
        </div>
        <div className="relative z-30 p-5 text-2xl text-white">
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
        
      <div className="relative grid grid-cols-4 gap-4 mx-auto text-white">
        <div className="flex flex-col">
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          <p>2870</p>
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
        </div>
      </div>
      <button type="button" className="relative mx-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
      <Image width="96" height="96" src="https://img.icons8.com/material-rounded/96/FFFFFF/down.png" alt="down"/>
<span className="sr-only">Icon description</span>
</button>
<div className="relative flex flex-col mx-auto">
        <p className="text-white mx-auto">L24</p>
        <p className="text-white mx-auto">Exemples de réalisation de site internet</p>
        <div className="relative grid grid-cols-4 gap-4 mx-auto text-white">
        <div className="flex flex-col">
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          <p>Wesite 1</p>
        </div>
        <div className="flex flex-col">
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          <p>Website 2</p>
        </div>
      </div>
      </div>
      <div className="relative flex flex-col mx-auto">
        <p className="text-white mx-auto">L24</p>
        <p className="text-white">Exemples de réalisation de logiciels ou contenus fictifs</p>
        <div className="relative grid grid-cols-4 gap-4 mx-auto text-white">
        <div className="flex flex-col">
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          <p>Software 1</p>
        </div>
        <div className="flex flex-col">
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          <p>Software 2</p>
        </div>
      </div>
      </div>
      <div className="relative flex flex-col mx-auto">
        <p className="text-white mx-auto">L24</p>
        <p className="text-white">Exemples de réalisation créatifs évènementiels</p>
        <div className="relative grid grid-cols-4 gap-4 mx-auto text-white">
        <div className="flex flex-col">
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          <p>Creative dev 1</p>
        </div>
        <div className="flex flex-col">
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          <p>Creative dev 2</p>
        </div>
      </div>
      </div>
      <div className="relative flex flex-col mx-auto">
      <p className="text-white mx-auto">Les services de L24</p>
      <div className="grid grid-cols-3 gap-4 max-auto text-white">
        <div className="flex flex-col">
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          <p>L24</p>
          <p>Contenus web fictifs</p>
        </div>
        <div className="flex flex-col">
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          <p>L24</p>
          <p>Edition logiciels</p>
        </div>
        <div className="flex flex-col">
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          <p>L24</p>
          <p>Setup interactifs promotionnels</p>
        </div>
      </div>
      </div>
      
      {/* <div>
          <LinkButton pageRoute={"/contact"}>
            <button>Contactez-nous</button>
          </LinkButton>
        </div> */}
      <div className="relative flex flex-col mx-auto">
        <p className="text-white mx-auto">L24</p>
        <p className="text-white">Ils nous font confiance</p>
        <div className="max-auto text-white">Carousel</div>
      </div>
      <div className="relative flex flex-col mx-auto">
        <p className="text-white">Ce que nos clients pensent de nos services : (grid and last review grades only at the bottom)</p>
      </div>
      <div className="relative flex flex-col mx-auto">
        <p className="text-white mx-auto">L24</p>
        <p className="text-white">Articles récents</p>
        <div className="mx-auto text-white">Carousel</div>
      </div>
      </main>
      <footer className="flex gap-6 items-center justify-center text-white font-bold">
        <div className="flex">

          <div className="flex flex-col">
          <div className="flex">
          <div>
            L24 Agency
          </div>
          <div>
            Agence et prestatire de réalisations web pour le cinéma
          </div>
          </div>
          <div className="flex flex-col">

        <div>Contacts</div> 
        <div className="flex">
          <div>
            Téléphone:
          </div>
          <p>06 37 89 46 91 70</p>
        </div> 

        </div>
          </div>

        </div>
        <div className="flex flex-col">

        <div>Liens rapides</div> 
        <div className="flex">
          <div>
            Contenus fictifs web -
          </div>
          <div>
            Editions de logiciels de Chat -
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
