export default function TestimonialSection() {
  const testimonials = [
    {
      name: "Charles Patterson",
      role: "One Year With Us",
      avatar: "/avatar1.jpg",
      text: "consectetur adipiscing elit, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
    },
    {
      name: "Charles Patterson",
      role: "One Year With Us",
      avatar: "/avatar2.jpg",
      text: "consectetur adipiscing elit, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
    },
    {
      name: "Charles Patterson",
      role: "One Year With Us",
      avatar: "/avatar3.jpg",
      text: "consectetur adipiscing elit, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
    },
  ];

  return (
    <section className="w-full px-4 py-16 md:px-6 md:py-28 lg:px-12">
      <div className="w-full">
        <div className="text-center mb-8 md:mb-12">
          <p className="text-[#585FA3] font-bold text-lg md:text-xl mb-4 md:mb-8">
            Testimonial
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            What The People Thinks About Us
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 md:p-8 shadow-[0_4px_15px_rgba(0,0,0,0.1)] rounded-2xl min-h-[220px] md:min-h-[260px] flex flex-col justify-center"
            >
              <div className="flex items-center justify-between p-2 md:p-4">
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gray-200 overflow-hidden flex-shrink-0">
                    <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-400"></div>
                  </div>
                  <div>
                    <h3 className="text-base md:text-lg font-bold text-gray-900">
                      {testimonial.name}
                    </h3>
                    <p className="text-xs md:text-sm text-gray-400">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                <div className="text-[#0025DB] flex-shrink-0">
                  <svg
                    className="w-8 h-8 md:w-10 md:h-10"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
              </div>

              <p className="text-sm md:text-base text-gray-900 leading-relaxed text-left p-2 md:p-4">
                {testimonial.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
