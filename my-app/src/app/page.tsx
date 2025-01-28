// my-app/src/app/page.tsx
import Link from 'next/link';

const HomePage = () => {
  return (
    <div>
      <h1>Page Principale</h1>
      <Link href="/contact">
        <button>Aller à la page Contact</button>
      </Link>
      <Link href="/details">
        <button>Aller à la page Details</button>
      </Link>
    </div>
  );
}

export default HomePage;
