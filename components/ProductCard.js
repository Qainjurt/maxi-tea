import { useShoppingCart } from 'use-shopping-cart';

export default function ProductCard({ product }) {
  const { addItem } = useShoppingCart();

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <p className="text-lg font-bold mb-4">{product.price} KZT</p>
        <button
          onClick={() => addItem(product)}
          className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition"
        >
          Себетке қосу
        </button>
      </div>
    </div>
  );
}