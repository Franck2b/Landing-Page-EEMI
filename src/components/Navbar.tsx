export default function Navbar() {
  return (
    <nav className="w-full px-4 py-6 md:px-6 md:py-8 lg:px-12">
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 md:w-8 md:h-8 bg-blue-600 rounded-md flex items-center justify-center">
            <span className="text-white font-bold text-base md:text-lg">M</span>
          </div>
          <span className="text-lg md:text-xl font-semibold text-gray-900">
            Digital <span className="font-normal">Marketing</span>
          </span>
        </div>

        <div className="hidden lg:flex items-center gap-8">
          <a href="#" className="font-bold text-[#0025DB]">
            Home
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-[#0025DB] font-bold">
            About
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-[#0025DB] font-bold">
            Services
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-[#0025DB] font-bold">
            Project
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-[#0025DB] font-bold">
            Blog
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-[#0025DB] font-bold">
            Contact
          </a>
          <button className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-10 py-3.5 rounded-full font-medium hover:shadow-lg transition-shadow shadow-[0_10px_30px_rgba(251,191,36,0.4)]">
            Let's Talk
          </button>
        </div>

        <button className="lg:hidden text-gray-700">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
}

