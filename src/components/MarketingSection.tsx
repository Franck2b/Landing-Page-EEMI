import Image from 'next/image';

export default function MarketingSection() {
  return (
    <section className="w-full px-6 py-28 lg:px-12">
      <div className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Left side - Image */}
          <div className="relative w-full h-[400px] lg:h-[550px]">
            <Image
              src="/p3.png"
              alt="Marketing Illustration"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Right side - Content */}
          <div className="space-y-8">
            {/* Tag */}
            <p className="text-[#585FA3] font-bold text-lg">Marketing</p>

            {/* Title */}
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Take Your Business<br /> Marketing To The Next
            </h2>

            {/* Description */}
            <p className="text-gray-600 text-xl leading-relaxed">
              But I must explain to you how all this mistaken idea of denouncing
              pleasure and <br /> account of the system, and expound the actual teachings of the
              great explorer <br /> of the truth, the master-builder of human happiness.
              No one rejects, dislikes, or <br /> avoids pleasure itself.
            </p>

            {/* CTA Button */}
            <div>
              <button className="bg-[#0025DB] text-white px-8 py-3.5 rounded-full font-medium hover:bg-blue-700 transition-colors shadow-[0_10px_30px_rgba(0,37,219,0.4)]">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

