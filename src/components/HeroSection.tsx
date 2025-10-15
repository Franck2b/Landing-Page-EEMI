import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="w-full px-6 py-20 lg:px-14">
      <div className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left content */}
          <div className="space-y-4">
            {/* Welcome tag */}
            <div className="inline-block">
              <span className="text-[#585FA3] font-bold text-md">Welcome</span>
            </div>

            {/* Main title */}
            <h1 className="text-5xl lg:text-8xl font-bold text-gray-900 leading-tight">
              Marketing Is The Key Of Business Success
            </h1>

            {/* Description */}
            <p className="text-gray-600 text-lg leading-relaxed max-w-2xl">
              But I must explain to you how all this mistaken idea of denouncing
              pleasure and praising pain was born and I will give you a complete.
            </p>

            {/* CTA Button */}
            <div>
              <button className="bg-[#0025DB] text-white px-8 py-3.5 rounded-full font-medium hover:bg-[#001b9b] transition-colors shadow-[0_10px_30px_rgba(0,37,219,0.4)]">
                Get Started
              </button>
            </div>
          </div>

          {/* Right content - Image */}
          <div className="relative w-full h-[400px] lg:h-[600px]">
            <Image
              src="/header.png"
              alt="Digital Marketing Illustration"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

