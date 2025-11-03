const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-4 py-12 max-xl:py-6"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About ShopHub
          </h2>
          <div className="w-24 h-1 bg-yellow-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold text-white mb-6">
              Your Trusted Shopping Destination
            </h3>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              At ShopHub, we believe in delivering excellence. With over a
              decade of experience in e-commerce, we&#39;ve built a reputation
              for quality, reliability, and customer satisfaction.
            </p>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              Our carefully curated selection of products ensures that you get
              only the best. From cutting-edge electronics to stylish fashion,
              we&#39;ve got everything you need.
            </p>
            <ul className="space-y-4">
              {[
                "Premium Quality Products",
                "Fast & Free Shipping",
                "24/7 Customer Support",
                "Secure Payment Options",
              ].map((feature, index) => (
                <li key={index} className="flex items-center text-gray-300">
                  <svg
                    className="w-6 h-6 text-gray-300 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-8 rounded-lg border border-blue-800 hover:border-blue-600 transition-colors">
              <div className="text-4xl mb-3">🚚</div>
              <h4 className="text-xl font-bold text-blue-700 mb-2">
                Fast Delivery
              </h4>
              <p className="text-white">
                Get your orders delivered within 2-3 days
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-900 to-blue-950 p-8 rounded-lg border border-blue-800 hover:border-blue-600 transition-colors">
              <div className="text-4xl mb-3">💎</div>
              <h4 className="text-xl font-bold text-blue-400 mb-2">Quality</h4>
              <p className="text-blue-300">
                Only authentic and premium products
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-900 to-blue-950 p-8 rounded-lg border border-blue-800 hover:border-blue-600 transition-colors">
              <div className="text-4xl mb-3">🔒</div>
              <h4 className="text-xl font-bold text-blue-400 mb-2">Secure</h4>
              <p className="text-blue-300">100% secure payment methods</p>
            </div>
            <div className=" p-8 rounded-lg border border-yellow-800 hover:border-blue-600 transition-colors">
              <div className="text-4xl mb-3">💬</div>
              <h4 className="text-xl font-bold text-yellow-600 mb-2">Support</h4>
              <p className="text-white">24/7 customer service available</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
