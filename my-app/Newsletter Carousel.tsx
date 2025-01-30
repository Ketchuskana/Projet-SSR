import Image from 'next/image';
import { useEffect, useRef } from 'react';

const cinemaLogos = [
  { src: "https://example.com/images/film-reel.jpg", alt: "Film Reel" },
  { src: "https://example.com/images/people-watching-movie.jpg", alt: "People Watching Movie" },
  { src: "https://example.com/images/film-clapper-board.png", alt: "Film Clapper Board" },
  { src: "https://example.com/images/film-camera.jpg", alt: "Film Camera" },
  { src: "https://example.com/images/cinema-screen.jpg", alt: "Cinema Screen" },
  { src: "https://example.com/images/movie-theater.jpg", alt: "Movie Theater" },
  { src: "https://example.com/images/film-strip.png", alt: "Film Strip" },
  { src: "https://example.com/images/popcorn-and-movie-tickets.jpg", alt: "Popcorn and Movie Tickets" },
];

const NewsCarousel: React.FC = () => {
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
        {cinemaLogos.map((logo, index) => (
          <li key={index} className='px-4'>
            <Image src={logo.src} alt={logo.alt} width={400} height={400}/>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsCarousel;