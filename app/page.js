import HomePage from "./components/HomePage/HomePage";

async function getProducts() {
  try {
    const res = await fetch('https://fakestoreapi.com/products');
    if (!res.ok) {
      throw new Error('Failed to fetch products');
    }
    return res.json();
  } catch (error) {
    console.error('Error fetching products:', error);
    return []; 
  }
}

//metadata
export const metadata = {
  title: "Discover Our Exclusive Collection | Shopify",
  description: "Browse our curated collection of high-quality products. Find the latest trends in fashion, electronics, and more.",
  openGraph: {
    title: 'Discover Our Exclusive Collection | Shopify',
    description: 'Your one-stop shop for the latest and greatest products.',
    images: [
      {
        url: '/Seo-Image.png', 
        width: 1200,
        height: 630,
        alt: 'Shopify Storefront',
      },
    ],
  },
};

function ProductSchema({ products }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    'itemListElement': products.map((product, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'item': {
        '@type': 'Product',
        'name': product.title,
        'image': product.image,
        'description': product.description,
        'sku': product.id,
        'offers': {
          '@type': 'Offer',
          'priceCurrency': 'USD',
          'price': product.price,
          'availability': 'https://schema.org/InStock',
        },
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}


export default async function Home() {
  const products = await getProducts();

  return (
    <>
      <ProductSchema products={products} />
      <HomePage products={products} />
    </>
  );
}
