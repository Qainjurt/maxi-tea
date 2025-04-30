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

export default function Home() {
  return (
    <div>
      <Head>
        <title>Maxi Tea - Премиум Шай</title>
        <meta name="description" content="Табиғи және премиум Макси шайын ашыңыз" />
      </Head>
      <Navbar />
      <section className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('/tea-hero.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">Maxi Tea</h1>
          <p className="text-xl md:text-2xl mb-8">Табиғи. Премиум. Шай.</p>
          <a href="/shop" className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
            Дүкенге өту
          </a>
        </div>
      </section>
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Біздің шайлар</h2>
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