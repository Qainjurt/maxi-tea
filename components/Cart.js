import { useShoppingCart } from 'use-shopping-cart';

export default function Cart() {
  const { cartDetails, removeItem, clearCart, totalPrice } = useShoppingCart();

  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-8">Себет</h2>
      {Object.values(cartDetails).length === 0 ? (
        <p>Себет бос</p>
      ) : (
        <div>
          {Object.values(cartDetails).map((item) => (
            <div key={item.id} className="flex justify-between mb-4">
              <div>
                <h3>{item.name}</h3>
                <p>{item.quantity} x {item.price} KZT</p>
              </div>
              <button
                onClick={() => removeItem(item.id)}
                className="text-red-600 hover:underline"
              >
                Жою
              </button>
            </div>
          ))}
          <p className="text-xl font-bold mt-4">Жалпы: {totalPrice} KZT</p>
          <button
            onClick={clearCart}
            className="bg-red-600 text-white px-4 py-2 rounded-full mt-4 hover:bg-red-700"
          >
            Себетті тазалау
          </button>
          <a
            href="/checkout"
            className="bg-green-600 text-white px-4 py-2 rounded-full mt-4 ml-4 hover:bg-green-700"
          >
            Төлеу
          </a>
        </div>
      )}
    </div>
  );
}