import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const products = [
    {
      id: 1,
      name: 'Wireless Headphones',
      price: '$199.99',
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop',
      description: 'Premium sound quality with noise cancellation',
    },
    {
      id: 2,
      name: 'Smart Watch',
      price: '$299.99',
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop',
      description: 'Track your fitness and stay connected',
    },
    {
      id: 3,
      name: 'Laptop Stand',
      price: '$79.99',
      image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&h=500&fit=crop',
      description: 'Ergonomic design for better posture',
    },
    {
      id: 4,
      name: 'Mechanical Keyboard',
      price: '$149.99',
      image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&h=500&fit=crop',
      description: 'RGB backlit with tactile switches',
    },
    {
      id: 5,
      name: 'Camera Lens',
      price: '$599.99',
      image: 'https://images.unsplash.com/photo-1606244864456-8bee63fce472?w=500&h=500&fit=crop',
      description: 'Professional grade photography lens',
    },
    {
      id: 6,
      name: 'Coffee Maker',
      price: '$129.99',
      image: 'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=500&h=500&fit=crop',
      description: 'Brew perfect coffee every morning',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
    }, 3000); // Auto-slide every 3 seconds

    return () => clearInterval(interval);
  }, [products.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? products.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  // Get visible products (3 at a time on desktop, 1 on mobile)
  const getVisibleProducts = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % products.length;
      visible.push(products[index]);
    }
    return visible;
  };

  return (
    <section id="products" className="min-h-screen flex items-center justify-center px-4 py-12 max-md:py-6">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-500 mb-4">
            Featured Products
          </h2>
          <div className="w-24 h-1 bg-white mx-auto mb-4"></div>
          <p className="text-gray-400 text-lg">
            Explore our handpicked selection of premium products
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Products Display */}
          <div className="overflow-hidden">
            <div className="flex gap-6 transition-transform duration-500 ease-in-out">
              {/* Mobile: Show 1 product */}
              <div className="md:hidden w-full flex justify-center">
                <div className="w-full max-w-sm bg-gradient-to-br from-blue-950 to-blue-900 rounded-xl overflow-hidden border border-blue-800 hover:border-blue-600 transition-all transform hover:scale-105">
                  <div className="h-64 overflow-hidden">
                    <img
                      src={products[currentIndex].image}
                      alt={products[currentIndex].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-blue-400 mb-2">
                      {products[currentIndex].name}
                    </h3>
                    <p className="text-blue-300 mb-4">
                      {products[currentIndex].description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-3xl font-bold text-blue-500">
                        {products[currentIndex].price}
                      </span>
                      <Link href="/products" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors">
                        Add to Cart
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Desktop: Show 3 products */}
              <div className="hidden md:flex gap-6 w-full">
                {getVisibleProducts().map((product) => (
                  <div
                    key={product.id}
                    className="flex-1 bg-gradient-to-br from-blue-950 to-blue-900 rounded-xl overflow-hidden border border-blue-800 hover:border-blue-600 transition-all transform hover:scale-105"
                  >
                    <div className="h-64 overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {product.name}
                      </h3>
                      <p className="text-gray-400 mb-4">
                        {product.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-3xl font-bold text-gray-300">
                          {product.price}
                        </span>
                        <Link href="/products" className="bg-green-600 hover:bg-green-700 text-white px-4 py-1.5 rounded-lg transition-colors">
                          Add to Cart
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full transition-colors z-10"
            aria-label="Previous"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full transition-colors z-10"
            aria-label="Next"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {products.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-blue-500 w-8'
                    : 'bg-blue-800 hover:bg-blue-700'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-all transform hover:scale-105">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products;
