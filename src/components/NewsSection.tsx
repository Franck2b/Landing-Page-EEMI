import Image from "next/image";

export default function NewsSection() {
  const articles = [
    {
      date: "June 14, 2020",
      author: "Ashton Adams",
      tag: "News",
      title:
        "Punto Pago Allows Quick And Secure Payments For Services In Panama",
      image: "/p6.webp",
    },
    {
      date: "June 14, 2020",
      author: "Cathryn Ritchie",
      tag: "News",
      title: "Teamwork Of Team Members Together In The Best Way",
      image: "/p6.webp",
    },
    {
      date: "June 14, 2020",
      author: "Gayle Owens",
      tag: "News",
      title: "The User Can Also Replenish A Balance Make Remittances",
      image: "/p6.webp",
    },
  ];

  return (
    <section className="w-full px-4 py-16 md:px-6 md:py-20 lg:px-12 bg-gray-50">
      <div className="w-full">
        <div className="flex flex-col md:flex-row items-start justify-between mb-4 gap-4">
          <div>
            <p className="text-[#585FA3] font-bold text-base md:text-lg mb-4 md:mb-8">
              News & Article
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
              You May Also Like
            </h2>
          </div>
          <button className="bg-[#0025DB] text-white px-8 py-3 md:px-12 md:py-3.5 rounded-full font-medium hover:bg-blue-700 transition-colors md:mt-6 shadow-[0_10px_30px_rgba(0,37,219,0.4)] text-sm md:text-base">
            View All
          </button>
        </div>

        <div className="mt-6 md:mt-10">
          <div className="border-t border-gray-200"></div>

          {articles.map((article, index) => (
            <div key={index}>
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 py-6 md:py-8">
                <div className="relative w-full md:w-60 h-48 md:h-40 rounded-2xl overflow-hidden flex-shrink-0">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>

                <div className="flex-1 flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 md:gap-4 mb-3 md:mb-4">
                      <span className="text-gray-500 text-xs md:text-sm">
                        Posted{" "}
                        <span className="font-medium">{article.date}</span>
                      </span>
                      <span className="text-gray-500 text-xs md:text-sm">
                        By <span className="font-medium">{article.author}</span>
                      </span>
                      <span className="text-[#0025DB] text-xs md:text-sm font-medium">
                        {article.tag}
                      </span>
                    </div>

                    <h3 className="text-xl md:text-3xl font-bold text-gray-900 max-w-2xl">
                      {article.title}
                    </h3>
                  </div>

                  <div className="w-10 h-10 md:w-12 md:h-12 bg-[#0025DB]/10 rounded-lg flex items-center justify-center flex-shrink-0 md:mr-20">
                    <svg
                      className="w-4 h-4 md:w-5 md:h-5 text-[#0025DB]"
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

              <div className="border-t border-gray-200"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
