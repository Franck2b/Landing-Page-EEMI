export default function NewsletterSection() {
  return (
    <section className="w-full px-4 py-12 md:px-6 md:py-18 lg:px-12 bg-white relative">
      <div className="w-full max-w-4xl mx-auto text-center">
        <div className="hidden md:block absolute left-32 top-20 opacity-30">
          <div className="grid grid-cols-6 gap-2">
            {[...Array(24)].map((_, i) => (
              <div
                key={i}
                className="w-1.5 h-1.5 bg-blue-400 rounded-full"
              ></div>
            ))}
          </div>
        </div>

        <p className="text-[#585FA3] font-bold text-base md:text-lg mb-4 md:mb-6">
          Join Our Community
        </p>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 md:mb-8">
          Subscribe To Our Newsletter
        </h2>

        <p className="text-gray-600 text-base md:text-lg mb-8 md:mb-10 max-w-2xl mx-auto">
          But I must explain to you how all this mistaken idea of denouncing
          pleasure and praising pain was born and I will give you a complete.
        </p>

        <div className="relative max-w-2xl mx-auto flex flex-col md:flex-row gap-3 md:gap-0">
          <input
            type="email"
            placeholder="Enter Your E-mail"
            className="w-full px-6 md:px-8 py-3 md:py-4 md:pr-48 rounded-full border border-gray-300 focus:outline-none focus:border-blue-500 text-gray-600 text-sm md:text-base"
          />
          <button className="md:absolute md:right-1.5 md:top-1.5 md:bottom-1.5 bg-[#0025DB] text-white px-6 py-3 md:px-8 rounded-full font-medium hover:bg-blue-700 transition-colors shadow-[0_10px_30px_rgba(0,37,219,0.4)] text-sm md:text-base">
            Get Started
          </button>
        </div>

        <div className="hidden md:block absolute right-20 bottom-20 opacity-30">
          <div className="grid grid-cols-6 gap-2">
            {[...Array(24)].map((_, i) => (
              <div
                key={i}
                className="w-1.5 h-1.5 bg-blue-400 rounded-full"
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
