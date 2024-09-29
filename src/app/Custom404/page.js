import Link from 'next/link';
import Head from 'next/head';

export default function Custom404() {
  return (
    <div className="container mx-auto p-8">
      <Head>
        <title>Page Not Found</title>
      </Head>
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link href="/">
        <a className="text-blue-500 underline">Go back to the Home page</a>
      </Link>
    </div>
  );
}
