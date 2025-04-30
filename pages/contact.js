import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Contact() {
  return (
    <div>
      <Head>
        <title>Maxi Tea - Байланыс</title>
        <meta name="description" content="Бізбен байланысыңыз" />
      </Head>
      <Navbar />
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Байланыс</h2>
          <form className="max-w-lg mx-auto space-y-4">
            <input
              type="text"
              placeholder="Атыңыз"
              className="w-full p-3 rounded-lg border border-gray-300"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 rounded-lg border border-gray-300"
            />
            <textarea
              placeholder="Хабарлама"
              className="w-full p-3 rounded-lg border border-gray-300"
            ></textarea>
            <button
              type="submit"
              className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition"
            >
              Жіберу
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </div>
  );
}