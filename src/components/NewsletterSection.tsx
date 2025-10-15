export default function NewsletterSection() {
  return (
    <section className="w-full px-6 py-18 lg:px-12 bg-white relative">
      <div className="w-full max-w-4xl mx-auto text-center">
        {/* Decorative dots */}
        <div className="absolute left-32 top-20 opacity-30">
          <div className="grid grid-cols-6 gap-2">
            {[...Array(24)].map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
            ))}
          </div>
        </div>

        {/* Tag */}
        <p className="text-[#585FA3] font-bold text-lg mb-6">
          Join Our Community
        </p>

        {/* Title */}
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
          Subscribe To Our Newsletter
        </h2>

        {/* Description */}
        <p className="text-gray-600 text-lg mb-10 max-w-2xl mx-auto">
          But I must explain to you how all this mistaken idea of denouncing
          pleasure and praising pain was born and I will give you a complete.
        </p>

        {/* Email Input with Button */}
        <div className="relative max-w-2xl mx-auto">
          <input
            type="email"
            placeholder="Enter Your E-mail"
            className="w-full px-8 py-4 pr-48 rounded-full border border-gray-300 focus:outline-none focus:border-blue-500 text-gray-600"
          />
          <button className="absolute right-1.5 top-1.5 bottom-1.5 bg-[#0025DB] text-white px-8 rounded-full font-medium hover:bg-blue-700 transition-colors shadow-[0_10px_30px_rgba(0,37,219,0.4)]">
            Get Started
          </button>
        </div>

        {/* Decorative dots */}
        <div className="absolute right-20 bottom-20 opacity-30">
          <div className="grid grid-cols-6 gap-2">
            {[...Array(24)].map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

