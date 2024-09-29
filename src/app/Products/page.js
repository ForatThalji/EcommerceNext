import Link from 'next/link';
import Head from 'next/head';

const products = [
  { id: 1, name: 'Product 1', price: '$10' },
  { id: 2, name: 'Product 2', price: '$20' },
  { id: 3, name: 'Product 3', price: '$30' },
];

export default function Products() {
  return (
    <div className="container mx-auto p-8">
      <Head>
        <title>Products - E-Commerce</title>
        <meta name="description" content="Browse our products" />
      </Head>
      <h1 className="text-4xl font-bold mb-4">Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id} className="mb-2">
            <Link href={`/Products/${product.id}`}>
              <p className="text-green-500 underline">{product.name} - {product.price}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
