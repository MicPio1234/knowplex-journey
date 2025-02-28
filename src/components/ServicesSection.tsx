
import { Heart, Baby, Users } from 'lucide-react';

const ServicesSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title">Our Caregiving Services</h2>
          <p className="text-gray-600">
            CareLearn offers comprehensive training in various caregiving specialties. We are committed to maintaining the highest standards of care, regularly reviewing and updating our services to ensure excellence.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger-children">
          <div className="rounded-xl p-8 border border-gray-100 bg-white shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
            <div className="w-16 h-16 rounded-2xl bg-teal-100 flex items-center justify-center mb-6">
              <Heart size={30} className="text-primary" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Elderly Care</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Providing compassionate care for seniors, supporting daily activities, medication management, and creating a safe and engaging environment to maintain dignity and independence.
            </p>
            <a href="#" className="text-primary font-medium flex items-center hover:underline">
              Learn more
              <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
          
          <div className="rounded-xl p-8 border border-gray-100 bg-white shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
            <div className="w-16 h-16 rounded-2xl bg-teal-100 flex items-center justify-center mb-6">
              <Baby size={30} className="text-primary" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Child Care Support</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Supporting children's development through age-appropriate activities, nutritional guidance, and creating a nurturing environment that promotes growth, learning, and emotional well-being.
            </p>
            <a href="#" className="text-primary font-medium flex items-center hover:underline">
              Learn more
              <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
          
          <div className="rounded-xl p-8 border border-gray-100 bg-white shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
            <div className="w-16 h-16 rounded-2xl bg-teal-100 flex items-center justify-center mb-6">
              <Users size={30} className="text-primary" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Special Need Support Care</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Specialized care for individuals with diverse needs, including physical disabilities, developmental disorders, and chronic conditions, focusing on personalized support and enhancing quality of life.
            </p>
            <a href="#" className="text-primary font-medium flex items-center hover:underline">
              Learn more
              <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
