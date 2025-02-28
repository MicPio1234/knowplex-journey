
import { ChevronRight } from 'lucide-react';
import CourseCard from './CourseCard';
import { Link } from 'react-router-dom';

const recommendedCourses = [
  {
    id: '5',
    title: 'Communication Skills for Caregivers',
    image: '/lovable-uploads/9b339000-39e2-45b5-a6a9-e1f1e4210953.png',
    duration: '4 weeks',
    level: 'All Levels',
    rating: 4.7,
    students: 982,
    instructor: {
      name: 'Lina',
      avatar: '/lovable-uploads/931c1d79-71c9-4493-9cea-3e8885153877.png',
    },
    price: 69.99,
  },
  {
    id: '6',
    title: 'Dementia Care: Advanced Approaches',
    image: '/lovable-uploads/9ca39d52-869b-496f-b545-de9216c2a3ad.png',
    duration: '8 weeks',
    level: 'Intermediate',
    rating: 4.9,
    students: 642,
    instructor: {
      name: 'Lina',
      avatar: '/lovable-uploads/931c1d79-71c9-4493-9cea-3e8885153877.png',
    },
    price: 119.99,
    salePrice: 89.99,
  },
  {
    id: '7',
    title: 'Nutrition and Meal Planning for Caregivers',
    image: '/lovable-uploads/9b339000-39e2-45b5-a6a9-e1f1e4210953.png',
    duration: '6 weeks',
    level: 'Beginner',
    rating: 4.6,
    students: 491,
    instructor: {
      name: 'Lina',
      avatar: '/lovable-uploads/931c1d79-71c9-4493-9cea-3e8885153877.png',
    },
    price: 79.99,
  },
  {
    id: '8',
    title: 'First Aid and Emergency Response',
    image: '/lovable-uploads/9ca39d52-869b-496f-b545-de9216c2a3ad.png',
    duration: '3 weeks',
    level: 'All Levels',
    rating: 4.8,
    students: 1358,
    instructor: {
      name: 'Lina',
      avatar: '/lovable-uploads/931c1d79-71c9-4493-9cea-3e8885153877.png',
    },
    price: 59.99,
  },
];

const RecommendedCourses = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="section-title">Recommended for you</h2>
            <p className="text-gray-600 max-w-2xl">
              Courses picked based on popular demand and industry needs
            </p>
          </div>
          <Link to="/courses" className="hidden md:flex items-center text-primary hover:text-primary/80 font-medium">
            See all
            <ChevronRight size={16} className="ml-1" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 stagger-children">
          {recommendedCourses.map((course) => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>
        
        <div className="mt-10 text-center md:hidden">
          <Link to="/courses" className="btn-secondary">
            See all
            <ChevronRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RecommendedCourses;
