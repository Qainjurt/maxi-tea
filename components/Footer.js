export default function Footer() {
    return (
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-4">© 2025 Maxi Tea. Барлық құқықтар қорғалған.</p>
          <div className="space-x-4">
            <a href="/contact" className="hover:text-green-400">Байланыс</a>
            <a href="/about" className="hover:text-green-400">Біз туралы</a>
          </div>
        </div>
      </footer>
    );
  }