import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Cart from '../components/Cart';

export default function CartPage() {
  return (
    <div>
      <Head>
        <title>Maxi Tea - Себет</title>
        <meta name="description" content="Себетті қарау және төлеу" />
      </Head>
      <Navbar />
      <Cart />
      <Footer />
    </div>
  );
}