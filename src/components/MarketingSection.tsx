import Image from 'next/image';

export default function MarketingSection() {
  return (
    <section className="w-full px-4 py-16 md:px-6 md:py-28 lg:px-12">
      <div className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-14 items-center">
          <div className="relative w-full h-[300px] md:h-[400px] lg:h-[550px]">
            <Image
              src="/p3.png"
              alt="Marketing Illustration"
              fill
              className="object-contain"
              priority
            />
          </div>

          <div className="space-y-4 md:space-y-8">
            <p className="text-[#585FA3] font-bold text-base md:text-lg">Marketing</p>

            <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Take Your Business Marketing To The Next
            </h2>

            <p className="text-gray-600 text-base md:text-xl leading-relaxed">
              But I must explain to you how all this mistaken idea of denouncing
              pleasure and account of the system, and expound the actual teachings of the
              great explorer of the truth, the master-builder of human happiness.
              No one rejects, dislikes, or avoids pleasure itself.
            </p>

            <div className="pt-2">
              <button className="bg-[#0025DB] text-white px-6 py-3 md:px-8 md:py-3.5 rounded-full font-medium hover:bg-blue-700 transition-colors shadow-[0_10px_30px_rgba(0,37,219,0.4)] text-sm md:text-base">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

