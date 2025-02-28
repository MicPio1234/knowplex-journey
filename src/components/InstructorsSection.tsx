
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const instructors = [
  {
    id: 1,
    name: 'Jane Cooper',
    role: 'Elderly Care Specialist',
    image: '/lovable-uploads/931c1d79-71c9-4493-9cea-3e8885153877.png',
    bio: 'Over 15 years of experience in geriatric care with a focus on dementia and Alzheimer\'s management.'
  },
  {
    id: 2,
    name: 'Adam',
    role: 'Pediatric Care Expert',
    image: '/lovable-uploads/9ca39d52-869b-496f-b545-de9216c2a3ad.png',
    bio: 'Certified pediatric nurse with extensive experience in developmental psychology and childcare.'
  },
  {
    id: 3,
    name: 'Tamara',
    role: 'Special Needs Educator',
    image: '/lovable-uploads/931c1d79-71c9-4493-9cea-3e8885153877.png',
    bio: 'Specialized in autism spectrum disorders and sensory processing conditions with a holistic approach.'
  },
];

const InstructorsSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="section-title">Classes taught by real creators</h2>
            <p className="text-gray-600 max-w-2xl">
              Learn from professionals with real-world experience in caregiving and healthcare
            </p>
          </div>
          <Link to="/instructors" className="hidden md:flex items-center text-primary hover:text-primary/80 font-medium">
            See all
            <ChevronRight size={16} className="ml-1" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger-children">
          {instructors.map((instructor) => (
            <div key={instructor.id} className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition-all duration-300 group">
              <div className="relative overflow-hidden h-64">
                <img 
                  src={instructor.image} 
                  alt={instructor.name} 
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-1">{instructor.name}</h3>
                <p className="text-primary font-medium mb-4">{instructor.role}</p>
                <p className="text-gray-600">{instructor.bio}</p>
                <Link to={`/instructor/${instructor.id}`} className="inline-flex items-center text-primary font-medium mt-4 hover:underline">
                  View profile
                  <ChevronRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-10 text-center md:hidden">
          <Link to="/instructors" className="btn-secondary">
            See all
            <ChevronRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default InstructorsSection;
