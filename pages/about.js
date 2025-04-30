import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function About() {
  return (
    <div>
      <Head>
        <title>Maxi Tea - Біз туралы</title>
        <meta name="description" content="Maxi Tea брендінің тарихы" />
      </Head>
      <Navbar />
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Біз туралы</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Maxi Tea — табиғи және премиум шайларды ұсынатын бренд. Біздің миссиямыз — әр шыны шай арқылы табиғаттың дәмін жеткізу.
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
}