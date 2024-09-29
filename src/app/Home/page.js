import Link from 'next/link';
import Head from 'next/head';

export default function Home() {
  return (
    <div className="container mx-auto p-8">
      <Head>
        <title>Home - E-Commerce</title>
        <meta name="description" content="Welcome to our E-commerce site" />
      </Head>
      <h1 className="text-4xl font-bold mb-4">Welcome to Our E-commerce Site</h1>
      <p className="mb-4">Browse our products and learn more about us!</p>
      <nav>
        <Link href="/Products" className="text-blue-500 underline mr-4">Products</Link>
        <Link href="/About" className="text-blue-500 underline">About Us</Link>
      </nav>
    </div>
  );
}
