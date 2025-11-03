const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    // <footer className="bg-black border-t border-blue-900 py-12 px-4">
    //   <div className="max-w-7xl mx-auto">
    //     <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
    //       {/* Brand */}
    //       <div>
    //         <h3 className="text-2xl font-bold text-blue-500 mb-4">ShopHub</h3>
    //         <p className="text-blue-300 mb-4">
    //           Your trusted destination for premium products and exceptional service.
    //         </p>
    //         <div className="flex gap-4">
    //           <a
    //             href="#"
    //             className="text-blue-400 hover:text-blue-300 transition-colors"
    //             aria-label="Facebook"
    //           >
    //             <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    //               <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    //             </svg>
    //           </a>
    //           <a
    //             href="#"
    //             className="text-blue-400 hover:text-blue-300 transition-colors"
    //             aria-label="Twitter"
    //           >
    //             <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    //               <path d="M23.953 


      <footer className="text-center py-6 mt-20 text-gray-500 text-sm border-t border-blue-900/30">
        © {currentYear} SynthSweet. All rights reserved.
      </footer>

  )
}

export default Footer