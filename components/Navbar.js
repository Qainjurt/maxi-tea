export default function Navbar() {
    return (
      <nav className="bg-white shadow-md fixed w-full z-20">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <a href="/" className="text-2xl font-bold text-green-600">Maxi Tea</a>
          <div className="space-x-6">
            <a href="/shop" className="text-gray-600 hover:text-green-600">Дүкен</a>
            <a href="/blog" className="text-gray-600 hover:text-green-600">Блог</a>
            <a href="/about" className="text-gray-600 hover:text-green-600">Біз туралы</a>
            <a href="/contact" className="text-gray-600 hover:text-green-600">Байланыс</a>
            <a href="/cart" className="text-gray-600 hover:text-green-600">Себет</a>
          </div>
        </div>
      </nav>
    );
  }