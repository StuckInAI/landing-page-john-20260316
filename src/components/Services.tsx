interface Service {
  icon: string;
  title: string;
  description: string;
  color: string;
}

const services: Service[] = [
  {
    icon: '🌐',
    title: 'Web Development',
    description:
      'We build fast, scalable, and beautiful websites and web applications using the latest technologies and best practices.',
    color: 'from-blue-500 to-indigo-600',
  },
  {
    icon: '📱',
    title: 'Mobile Apps',
    description:
      'Native and cross-platform mobile applications for iOS and Android that deliver exceptional user experiences.',
    color: 'from-purple-500 to-pink-600',
  },
  {
    icon: '🎨',
    title: 'UI/UX Design',
    description:
      'User-centered design solutions that combine aesthetics with functionality to create intuitive digital experiences.',
    color: 'from-pink-500 to-rose-600',
  },
  {
    icon: '☁️',
    title: 'Cloud Solutions',
    description:
      'Scalable cloud infrastructure, migration services, and managed solutions to power your business operations.',
    color: 'from-cyan-500 to-blue-600',
  },
  {
    icon: '📈',
    title: 'Digital Marketing',
    description:
      'Data-driven marketing strategies including SEO, PPC, social media, and content marketing to boost your online presence.',
    color: 'from-green-500 to-emerald-600',
  },
  {
    icon: '💼',
    title: 'IT Consulting',
    description:
      'Expert technology consulting to help you make informed decisions, optimize processes, and achieve your business goals.',
    color: 'from-orange-500 to-amber-600',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-indigo-100 text-indigo-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wider">
            What We Offer
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            We provide a comprehensive suite of digital services to help your business succeed in the ever-evolving digital landscape.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              {/* Icon */}
              <div
                className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} mb-6 text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}
              >
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors duration-200">
                {service.title}
              </h3>
              <p className="text-gray-500 leading-relaxed">{service.description}</p>

              {/* Learn more link */}
              <div className="mt-6 flex items-center text-indigo-600 font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <span>Learn more</span>
                <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-14">
          <p className="text-gray-500 mb-4">Looking for a custom solution?</p>
          <a
            href="#contact"
            className="inline-flex items-center bg-indigo-600 text-white px-8 py-3.5 rounded-xl font-semibold hover:bg-indigo-700 transition-colors duration-200 shadow-md hover:shadow-lg"
          >
            Talk to Our Experts
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
