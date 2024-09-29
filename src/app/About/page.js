import Image from 'next/image';
import Head from 'next/head';

export default function About() {
  return (
    <div className="container mx-auto p-8">
      <Head>
        <title>About Us - E-Commerce</title>
        <meta name="description" content="Learn more about our E-commerce" />
      </Head>
      <h1 className="text-4xl font-bold mb-4">About Us</h1>
      <Image src="/skin.jpg" alt="About Us" width={500} height={300} className="rounded" />
      <p className="mt-4">We are a dedicated e-commerce platform offering quality products at affordable prices.</p>
    </div>
  );
}
