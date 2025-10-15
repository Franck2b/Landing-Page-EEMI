export default function Footer() {
  return (
    <>
      <footer className="w-full px-4 md:px-6 lg:px-12 mb-2">
        <div className="bg-[#0025DB] text-white relative overflow-hidden rounded-[20px] md:rounded-[30px]">
      <div className="hidden md:block absolute left-1 top-75 opacity-40">
        <div className="grid grid-cols-10 gap-2">
          {[...Array(36)].map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 bg-black rounded-full"></div>
          ))}
        </div>
      </div>

      <div className="hidden md:block absolute right-0 top-0 opacity-20">
        <svg width="200" height="400" viewBox="0 0 200 400">
          <path
            d="M0,0 Q50,100 0,200 Q50,300 0,400 M40,0 Q90,100 40,200 Q90,300 40,400 M80,0 Q130,100 80,200 Q130,300 80,400"
            stroke="white"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </div>

          <div className="px-4 py-10 md:px-6 md:py-16 lg:px-12">
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          <div>
            <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-yellow-400 rounded-lg flex items-center justify-center">
              </div>
              <span className="text-lg md:text-xl font-bold">
                Digital <span className="font-normal">Marketing</span>
              </span>
            </div>
            <p className="text-blue-200 text-xs md:text-sm leading-relaxed">
              But I must explain to you how all this mistaken idea of denouncing
              pleasure pain was born and I will give you a complete.
            </p>
            <div className="flex items-center gap-3 md:gap-4 mt-4 md:mt-6">
              <a
                href="#"
                className="w-8 h-8 rounded flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <svg
                  className="w-4 h-4 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-8 h-8rounded flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <svg
                  className="w-4 h-4 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <svg
                  className="w-4 h-4 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <svg
                  className="w-4 h-4 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6">Quick Links</h3>
            <ul className="space-y-1">
              <li>
                <a href="#" className="text-blue-200 hover:text-white transition-colors text-sm md:text-base">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-200 hover:text-white transition-colors text-sm md:text-base">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-200 hover:text-white transition-colors text-sm md:text-base">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-200 hover:text-white transition-colors text-sm md:text-base">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6">Let's Talk</h3>
            <ul className="space-y-3 md:space-y-4">
              <li className="flex items-center gap-2 md:gap-3">
                <svg
                  className="w-4 h-4 md:w-5 md:h-5 text-blue-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-blue-200 text-xs md:text-sm">info@yourdomain.com</span>
              </li>
              <li className="flex items-center gap-2 md:gap-3">
                <svg
                  className="w-4 h-4 md:w-5 md:h-5 text-blue-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span className="text-blue-200 text-xs md:text-sm">+7 (212) 654-33-35</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6">Office Addres</h3>
            <div className="flex items-start gap-2 md:gap-3">
              <svg
                className="w-4 h-4 md:w-5 md:h-5 text-blue-200 mt-1 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <p className="text-blue-200 text-xs md:text-sm leading-relaxed">
                Patricia C. Amedee 4401<br />
                Waldeck Street Grapevine<br />
                Nashville, Tx 76051
              </p>
            </div>
          </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="w-full py-4 md:py-6 bg-white">
        <p className="text-center text-gray-400 text-xs md:text-sm">
          © 2025 Averta. All Rights Reserved.
        </p>
      </div>

      <div className="fixed bottom-4 right-4 md:bottom-2 md:right-8 z-50 flex flex-col items-end gap-4">
        <button className="w-12 h-12 md:w-14 md:h-14 bg-[#0025DB] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow">
          <svg
            className="w-6 h-6 md:w-7 md:h-7 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
        </button>
      </div>
    </>
  );
}

