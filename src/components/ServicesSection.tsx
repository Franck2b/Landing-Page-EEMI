export default function ServicesSection() {
  const services = [
    {
      icon: '⚙️',
      title: 'Product Management',
      vacancies: '30 Available Vacancy',
      bgColor: 'bg-cyan-50',
      iconColor: 'text-cyan-500',
    },
    {
      icon: '📱',
      title: 'Web & Mobile Development',
      vacancies: '30 Available Vacancy',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-500',
    },
    {
      icon: '🎧',
      title: 'Customer Support',
      vacancies: '30 Available Vacancy',
      bgColor: 'bg-yellow-50',
      iconColor: 'text-yellow-500',
    },
    {
      icon: '👥',
      title: 'Human Resources',
      vacancies: '30 Available Vacancy',
      bgColor: 'bg-red-50',
      iconColor: 'text-red-500',
    },
    {
      icon: '💎',
      title: 'Design & Creatives',
      vacancies: '30 Available Vacancy',
      bgColor: 'bg-pink-50',
      iconColor: 'text-pink-500',
    },
    {
      icon: '🎯',
      title: 'Marketing & Communication',
      vacancies: '30 Available Vacancy',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-500',
    },
    {
      icon: '📊',
      title: 'Business Development',
      vacancies: '30 Available Vacancy',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-500',
    },
  ];

  return (
    <section className="w-full px-4 py-16 md:px-6 md:py-28 lg:px-12">
      <div className="w-full">
        <div className="text-center mb-8 md:mb-12">
          <p className="text-[#585FA3] font-bold text-base md:text-lg mb-4 md:mb-8">
            What We Can Do For You
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            Services We Can Help You With
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 md:p-14 shadow-[0_0_15px_rgba(0,0,0,0.1)] hover:shadow-[0_0_20px_rgba(0,0,0,0.15)] transition-shadow min-h-[220px] md:min-h-[260px] flex flex-col"
            >
              <div
                className={`w-12 h-12 md:w-16 md:h-16 ${service.bgColor} rounded-xl flex items-center justify-center mb-4 md:mb-8`}
              >
                <span className={`text-lg md:text-xl ${service.iconColor}`}>
                  {service.icon}
                </span>
              </div>

              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-6">
                {service.title}
              </h3>

              <p className="text-gray-400 text-base md:text-lg">{service.vacancies}</p>
            </div>
          ))}

          <div className="bg-[#0025DB] rounded-2xl p-6 md:p-14 flex flex-col justify-between text-white relative overflow-hidden shadow-[0_0_15px_rgba(0,0,0,0.1)] hover:shadow-[0_0_20px_rgba(0,0,0,0.15)] transition-shadow min-h-[220px] md:min-h-[260px]">
            <div className="absolute top-0 right-4 opacity-80">
              <svg width="60" height="90" viewBox="0 0 80 120" className="md:w-20 md:h-30">
                <path
                  d="M10,0 Q10,20 10,40 Q10,60 10,80 M20,0 Q20,20 20,40 Q20,60 20,80 M30,0 Q30,20 30,40 Q30,60 30,80 M40,0 Q40,20 40,40 Q40,60 40,80"
                  stroke="white"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>
            </div>

            <div className="mt-auto flex items-end justify-between relative z-10">
              <div>
                <p className="text-2xl md:text-4xl font-bold mb-2 md:mb-5">+4</p>
                <p className="text-2xl md:text-4xl font-bold mb-2 md:mb-4">More</p>
                <p className="text-sm md:text-lg opacity-90">30 available vacancy</p>
              </div>

              <div className="w-10 h-10 md:w-12 md:h-12 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-lg md:text-xl">&gt;</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

