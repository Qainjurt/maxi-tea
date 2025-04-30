import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';

const products = [
  {
    id: '1',
    name: 'Жасыл шай',
    description: 'Табиғи антиоксиданттарға бай шай.',
    price: 5000,
    image: '/green-tea.jpg',
    currency: 'KZT',
  },
  {
    id: '2',
    name: 'Қара шай',
    description: 'Қанық дәмі бар классикалық шай.',
    price: 4500,
    image: '/black-tea.jpg',
    currency: 'KZT',
  },
  {
    id: '3',
    name: 'Шөп шай',
    description: 'Релаксацияға арналған хош иісті шай.',
    price: 6000,
    image: '/herbal-tea.jpg',
    currency: 'KZT',
  },
];

export default function Shop() {
  return (
    <div>
      <Head>
        <title>Maxi Tea - Дүкен</title>
        <meta name="description" content="Макси шайдың премиум түрлерін сатып алыңыз" />
      </Head>
      <Navbar />
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Дүкен</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}