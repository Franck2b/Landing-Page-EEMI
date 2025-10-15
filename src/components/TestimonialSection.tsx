import Image from 'next/image';

export default function TestimonialSection() {
  const testimonials = [
    {
      name: 'Charles Patterson',
      role: 'One Year With Us',
      avatar: '/avatar1.jpg',
      text: 'consectetur adipiscing elit, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
    },
    {
      name: 'Charles Patterson',
      role: 'One Year With Us',
      avatar: '/avatar2.jpg',
      text: 'consectetur adipiscing elit, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
    },
    {
      name: 'Charles Patterson',
      role: 'One Year With Us',
      avatar: '/avatar3.jpg',
      text: 'consectetur adipiscing elit, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
    },
  ];

  return (
    <section className="w-full px-6 py-28 lg:px-12">
      <div className="w-full">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-[#585FA3] font-bold text-xl mb-8">Testimonial</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            What The People Thinks About Us
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 shadow-[0_4px_15px_rgba(0,0,0,0.1)] rounded-2xl min-h-[260px] flex flex-col justify-center"
            >
              {/* Header with avatar and quote icon */}
              <div className="flex items-center justify-between p-4">
                <div className="flex items-center gap-4">
                  {/* Avatar */}
                  <div className="w-14 h-14 rounded-full bg-gray-200 overflow-hidden flex-shrink-0">
                    <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-400"></div>
                  </div>
                  {/* Name and Role */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
                {/* Quote Icon */}
                <div className="text-[#0025DB] flex-shrink-0">
                  <svg
                    className="w-10 h-10"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-900 leading-relaxed text-left p-4">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

