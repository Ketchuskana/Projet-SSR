import Image from 'next/image';
import { useEffect, useRef } from 'react';

const logos = [
  { src: "https://cruip-tutorials.vercel.app/logo-carousel/facebook.svg", alt: "Facebook" },
  { src: "https://cruip-tutorials.vercel.app/logo-carousel/disney.svg", alt: "Disney" },
  { src: "https://cruip-tutorials.vercel.app/logo-carousel/airbnb.svg", alt: "Airbnb" },
  { src: "https://cruip-tutorials.vercel.app/logo-carousel/apple.svg", alt: "Apple" },
  { src: "https://cruip-tutorials.vercel.app/logo-carousel/spark.svg", alt: "Spark" },
  { src: "https://cruip-tutorials.vercel.app/logo-carousel/samsung.svg", alt: "Samsung" },
  { src: "https://cruip-tutorials.vercel.app/logo-carousel/quora.svg", alt: "Quora" },
  { src: "https://cruip-tutorials.vercel.app/logo-carousel/sass.svg", alt: "Sass" },
];

const LogoCarousel: React.FC = () => {
  const logosRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (logosRef.current) {
      const ul = logosRef.current;
      ul.insertAdjacentHTML('afterend', ul.outerHTML);
      const nextSibling = ul.nextSibling as HTMLElement;
      if (nextSibling) {
        nextSibling.setAttribute('aria-hidden', 'true');
      }
    }
  }, []);

  return (
    <div className="w-full flex flex-row overflow-x-auto flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
      <ul ref={logosRef} className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
        {logos.map((logo, index) => (
          <li key={index} className='px-4'>
            <Image src={logo.src} alt={logo.alt} width={400} height={400}/>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LogoCarousel;