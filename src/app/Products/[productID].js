import { useRouter } from 'next/router';
import Head from 'next/head';

const products = [
  { id: 1, name: 'Product 1', price: '$10', description: 'Description for Product 1' },
  { id: 2, name: 'Product 2', price: '$20', description: 'Description for Product 2' },
  { id: 3, name: 'Product 3', price: '$30', description: 'Description for Product 3' },
];

export default function ProductDetails() {
  const router = useRouter();
  const { id } = router.query;
  const product = products.find((prod) => prod.id === parseInt(id));

  if (!product) {
    return <p>Product not found!</p>;
  }

  return (
    <div className="container mx-auto p-8">
      <Head>
        <title>{product.name} - E-Commerce</title>
        <meta name="description" content={`Details for ${product.name}`} />
      </Head>
      <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
      <p className="mb-4">{product.description}</p>
      <p className="mb-4 font-bold">Price: {product.price}</p>
      <button className="bg-blue-500 text-white px-4 py-2 rounded">Add to Cart</button>
    </div>
  );
}
