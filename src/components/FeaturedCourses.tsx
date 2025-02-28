
import { ChevronRight } from 'lucide-react';
import CourseCard from './CourseCard';
import { Link } from 'react-router-dom';

const featuredCourses = [
  {
    id: '1',
    title: 'Elderly Care Course: Foundations of Geriatric Care',
    image: '/lovable-uploads/9b339000-39e2-45b5-a6a9-e1f1e4210953.png',
    duration: '8 weeks',
    level: 'Beginner',
    rating: 4.8,
    students: 1254,
    instructor: {
      name: 'Lina',
      avatar: '/lovable-uploads/931c1d79-71c9-4493-9cea-3e8885153877.png',
    },
    price: 99.99,
    salePrice: 89.99,
  },
  {
    id: '2',
    title: 'Child Care: Advanced Pediatric Support Techniques',
    image: '/lovable-uploads/9ca39d52-869b-496f-b545-de9216c2a3ad.png',
    duration: '6 weeks',
    level: 'Intermediate',
    rating: 4.9,
    students: 843,
    instructor: {
      name: 'Lina',
      avatar: '/lovable-uploads/931c1d79-71c9-4493-9cea-3e8885153877.png',
    },
    price: 89.99,
  },
  {
    id: '3',
    title: 'Special Need Support Care: Comprehensive Approaches',
    image: '/lovable-uploads/9b339000-39e2-45b5-a6a9-e1f1e4210953.png',
    duration: '10 weeks',
    level: 'Advanced',
    rating: 4.7,
    students: 621,
    instructor: {
      name: 'Lina',
      avatar: '/lovable-uploads/931c1d79-71c9-4493-9cea-3e8885153877.png',
    },
    price: 129.99,
    salePrice: 99.99,
  },
  {
    id: '4',
    title: 'Elderly Care II: Advanced Geriatric Management',
    image: '/lovable-uploads/9ca39d52-869b-496f-b545-de9216c2a3ad.png',
    duration: '12 weeks',
    level: 'Advanced',
    rating: 4.9,
    students: 752,
    instructor: {
      name: 'Lina',
      avatar: '/lovable-uploads/931c1d79-71c9-4493-9cea-3e8885153877.png',
    },
    price: 149.99,
    salePrice: 119.99,
  },
];

const FeaturedCourses = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="section-title">Featured Courses</h2>
            <p className="text-gray-600 max-w-2xl">
              Discover our most popular caregiver training programs, designed by healthcare professionals.
            </p>
          </div>
          <Link to="/courses" className="hidden md:flex items-center text-primary hover:text-primary/80 font-medium">
            View all courses
            <ChevronRight size={16} className="ml-1" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 stagger-children">
          {featuredCourses.map((course) => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>
        
        <div className="mt-10 text-center md:hidden">
          <Link to="/courses" className="btn-secondary">
            View all courses
            <ChevronRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;
