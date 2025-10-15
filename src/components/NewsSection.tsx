import Image from 'next/image';

export default function NewsSection() {
  const articles = [
    {
      date: 'June 14, 2020',
      author: 'Ashton Adams',
      tag: 'News',
      title: 'Punto Pago Allows Quick And Secure Payments For Services In Panama',
      image: '/p6.webp',
    },
    {
      date: 'June 14, 2020',
      author: 'Cathryn Ritchie',
      tag: 'News',
      title: 'Teamwork Of Team Members Together In The Best Way',
      image: '/p6.webp',
    },
    {
      date: 'June 14, 2020',
      author: 'Gayle Owens',
      tag: 'News',
      title: 'The User Can Also Replenish A Balance Make Remittances',
      image: '/p6.webp',
    },
  ];

  return (
    <section className="w-full px-6 py-20 lg:px-12 bg-gray-50">
      <div className="w-full">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div>
            <p className="text-[#585FA3] font-bold text-lg mb-8">
              News & Article
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              You May Also Like
            </h2>
          </div>
          <button className="bg-[#0025DB] text-white px-12 py-3.5 rounded-full font-medium hover:bg-blue-700 transition-colors mt-6 shadow-[0_10px_30px_rgba(0,37,219,0.4)]">
            View All
          </button>
        </div>

        {/* Articles List */}
        <div className="mt-10">
          {/* Top border */}
          <div className="border-t border-gray-200"></div>

          {articles.map((article, index) => (
            <div key={index}>
              <div className="flex items-center gap-8 py-8">
                {/* Image */}
                <div className="relative w-92 h-48 rounded-2xl overflow-hidden flex-shrink-0">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>

                {/* Content */}
                <div className="flex-1 flex items-center justify-between">
                  <div>
                    {/* Meta Info */}
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-gray-500 text-sm">
                        Posted <span className="font-medium">{article.date}</span>
                      </span>
                      <span className="text-gray-500 text-sm">
                        By <span className="font-medium">{article.author}</span>
                      </span>
                      <span className="text-[#0025DB] text-sm font-medium">
                        {article.tag}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-3xl font-bold text-gray-900 max-w-2xl">
                      {article.title}
                    </h3>
                  </div>

                  {/* Arrow Icon */}
                  <div className="w-12 h-12 bg-[#0025DB]/10 rounded-lg flex items-center justify-center flex-shrink-0 mr-20">
                    <svg
                      className="w-5 h-5 text-[#0025DB]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Border after each article */}
              <div className="border-t border-gray-200"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

