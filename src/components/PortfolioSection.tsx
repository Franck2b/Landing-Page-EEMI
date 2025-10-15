import Image from "next/image";

export default function PortfolioSection() {
  return (
    <section className="w-full px-4 py-16 md:px-6 md:py-28 lg:px-12">
      <div className="w-full">
        <div className="flex flex-col md:flex-row items-start justify-between mb-8 md:mb-12 gap-4">
          <div>
            <p className="text-[#585FA3] font-bold text-base md:text-lg mb-4 md:mb-8">
              Our Portfolio
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
              Latest Project
            </h2>
          </div>
          <button className="bg-[#0025DB] text-white px-8 py-3 md:px-12 md:py-3.5 rounded-full font-medium hover:bg-blue-700 transition-colors shadow-[0_10px_30px_rgba(0,37,219,0.4)] text-sm md:text-base">
            View All
          </button>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-4 md:gap-6">
            <div className="lg:col-span-3 relative rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/p41.avif"
                alt="Project 1"
                width={400}
                height={250}
                className="w-full h-auto"
                unoptimized
              />
            </div>
            <div className="hidden lg:block lg:col-span-3"></div>

            <div className="lg:col-span-3 relative rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/p42.webp"
                alt="Project 2"
                width={400}
                height={250}
                className="w-full h-auto"
                unoptimized
              />
            </div>
            <div className="hidden lg:block lg:col-span-3"></div>
          </div>

          <div className="hidden lg:flex absolute right-0 top-2/4 -translate-y-1/2 flex-col gap-1 z-40">
            <button className="bg-[#8A898F] hover:bg-[#6f6e73] text-white px-4 py-3 flex items-center gap-3 transition-colors min-w-[160px] cursor-pointer">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
              <span className="text-sm font-medium">Browse Demos</span>
            </button>
            <button className="bg-[#8A898F] hover:bg-[#6f6e73] text-white px-4 py-3 flex items-center gap-3 transition-colors min-w-[160px] cursor-pointer">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="text-sm font-medium">Buy Next</span>
            </button>
            <button className="bg-[#8A898F] hover:bg-[#6f6e73] text-white px-4 py-3 flex items-center gap-3 transition-colors min-w-[160px] cursor-pointer">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              <span className="text-sm font-medium">Export Section</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
