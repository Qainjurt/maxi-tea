import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const posts = [
  { id: 1, title: 'Шай дайындаудың 5 кеңесі', excerpt: 'Шайдың дәмін толық ашу үшін...' },
  { id: 2, title: 'Жасыл шайдың пайдасы', excerpt: 'Денсаулыққа пайдалы...' },
];

export default function Blog() {
  return (
    <div>
      <Head>
        <title>Maxi Tea - Блог</title>
        <meta name="description" content="Шай туралы қызықты мақалалар" />
      </Head>
      <Navbar />
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Блог</h2>
          <div className="space-y-8">
            {posts.map((post) => (
              <div key={post.id} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-600">{post.excerpt}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}