import { CartProvider } from 'use-shopping-cart';
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <CartProvider
      mode="payment"
      cartMode="client-only"
      stripe={process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY}
      successUrl="/success"
      cancelUrl="/cart"
      currency="KZT"
    >
      <Component {...pageProps} />
    </CartProvider>
  );
}