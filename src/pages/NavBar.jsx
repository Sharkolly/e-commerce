import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [ 
    { name: 'Home', href: '/' },
    { name: 'About', href: '/#about' },
    { name: 'Products', href: '/products' },
    { name: 'Contact', href: '#cta' },
  ];

  return (
    <nav className="fixed top-0 w-full bg-black/95 backdrop-blur-sm z-50 border-b border-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#home" className="text-2xl font-bold text-blue-500 hover:text-blue-400 transition-colors">
              ShopHub
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-400  hover:text-blue-300 px-3 py-2 text-sm font-medium transition-colors"
                >
                  {link.name}
                </a>
              ))}
              {/* <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors">
                Sign In
              </button> */}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-blue-400 hover:text-blue-300 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-blue-900">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-blue-400 hover:text-blue-300 block px-3 py-2 text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
