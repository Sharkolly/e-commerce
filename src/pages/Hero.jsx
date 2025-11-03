const Hero = () => {
  return (
    <section id="home" className="min-h-screen max-lg:h-auto flex items-center justify-center pt-12 px-4 max-xl:pt-8">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
          Welcome to ShopHub
        </h1>
        <p className="text-xl md:text-2xl text-gray-500 mb-8 max-w-3xl mx-auto">
          Discover the finest collection of premium products tailored just for you
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#products"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105"
          >
            Shop Now
          </a>
          <a
            href="#about"
            className="border-2 border-white text-blue-400 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105"
          >
            Learn More
          </a>
        </div>
        
        {/* Decorative elements */}
        <div className="mt-16 grid grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="p-6 border border-green-800 rounded-lg  hover:border-blue-600 transition-colors max-md:p-4">
            <div className="text-4xl font-bold text-blue-500 mb-2 max-md:text-3xl">500+</div>
            <div className="text-blue-300">Products</div>
          </div>
          <div className="p-6 border border-blue-800 rounded-lg hover:border-blue-600 transition-colors max-md:p-4">
            <div className="text-4xl font-bold text-white mb-2 max-md:text-3xl">50K+</div>
            <div className="text-gray-600 ">Customers</div>
          </div>
          <div className="p-6 border border-white rounded-lg hover:border-blue-600 transition-colors max-md:p-4">
            <div className="text-4xl font-bold text-yellow-500 mb-2 max-md:text-3xl">4.9★</div>
            <div className="text-yellow-300">Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
