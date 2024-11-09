import Link from 'next/link';

export default function Navbar() {
  return (
    <header>
      <h1>🌸 Flower Collection</h1>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
}