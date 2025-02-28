
import { useState, useEffect } from 'react';
import { Search, Star } from 'lucide-react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from 'react-router-dom';

const allCourses = [
  {
    id: '1',
    title: 'Elderly Care Course',
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
    category: 'elderly-care',
  },
  {
    id: '2',
    title: 'Elderly Care II Course',
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
    category: 'elderly-care',
  },
  {
    id: '3',
    title: 'Elderly Care III Course',
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
    category: 'elderly-care',
  },
  {
    id: '4',
    title: 'Child Care Course',
    image: '/lovable-uploads/9ca39d52-869b-496f-b545-de9216c2a3ad.png',
    duration: '12 weeks',
    level: 'All Levels',
    rating: 4.9,
    students: 752,
    instructor: {
      name: 'Lina',
      avatar: '/lovable-uploads/931c1d79-71c9-4493-9cea-3e8885153877.png',
    },
    price: 149.99,
    category: 'child-care',
  },
  {
    id: '5',
    title: 'Special need support care Course',
    image: '/lovable-uploads/9b339000-39e2-45b5-a6a9-e1f1e4210953.png',
    duration: '6 weeks',
    level: 'Beginner',
    rating: 4.8,
    students: 643,
    instructor: {
      name: 'Lina',
      avatar: '/lovable-uploads/931c1d79-71c9-4493-9cea-3e8885153877.png',
    },
    price: 79.99,
    category: 'special-needs',
  },
  {
    id: '6',
    title: 'Special need support care II',
    image: '/lovable-uploads/9ca39d52-869b-496f-b545-de9216c2a3ad.png',
    duration: '8 weeks',
    level: 'Intermediate',
    rating: 4.7,
    students: 528,
    instructor: {
      name: 'Lina',
      avatar: '/lovable-uploads/931c1d79-71c9-4493-9cea-3e8885153877.png',
    },
    price: 99.99,
    category: 'special-needs',
  },
  {
    id: '7',
    title: 'Special need support care III',
    image: '/lovable-uploads/9b339000-39e2-45b5-a6a9-e1f1e4210953.png',
    duration: '10 weeks',
    level: 'Advanced',
    rating: 4.9,
    students: 391,
    instructor: {
      name: 'Lina',
      avatar: '/lovable-uploads/931c1d79-71c9-4493-9cea-3e8885153877.png',
    },
    price: 129.99,
    category: 'special-needs',
  },
  {
    id: '8',
    title: 'Special Care Course',
    image: '/lovable-uploads/9ca39d52-869b-496f-b545-de9216c2a3ad.png',
    duration: '8 weeks',
    level: 'All Levels',
    rating: 4.8,
    students: 487,
    instructor: {
      name: 'Lina',
      avatar: '/lovable-uploads/931c1d79-71c9-4493-9cea-3e8885153877.png',
    },
    price: 89.99,
    category: 'special-care',
  },
];

const instructors = [
  {
    id: '1',
    name: 'Jane Cooper',
    image: '/lovable-uploads/b53d8fad-f1c6-4697-a438-3d308ca2accb.png',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
  },
  {
    id: '2',
    name: 'Adam',
    image: '/lovable-uploads/b53d8fad-f1c6-4697-a438-3d308ca2accb.png',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
  },
  {
    id: '3',
    name: 'Tamara',
    image: '/lovable-uploads/b53d8fad-f1c6-4697-a438-3d308ca2accb.png',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
  },
  {
    id: '4',
    name: 'Jane Cooper',
    image: '/lovable-uploads/b53d8fad-f1c6-4697-a438-3d308ca2accb.png',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
  },
  {
    id: '5',
    name: 'Jane Cooper',
    image: '/lovable-uploads/b53d8fad-f1c6-4697-a438-3d308ca2accb.png',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
  },
  {
    id: '6',
    name: 'Jane Cooper',
    image: '/lovable-uploads/b53d8fad-f1c6-4697-a438-3d308ca2accb.png',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
  },
];

const Courses = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [recommendedCourses, setRecommendedCourses] = useState(allCourses.slice(0, 4));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement search functionality here
    console.log('Searching for:', searchQuery);
  };

  // Function to render stars based on rating
  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <Star 
        key={i} 
        size={12} 
        className={`${i < Math.floor(rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} 
      />
    ));
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero banner with search */}
      <div className="relative h-[240px] w-full bg-gradient-to-r from-blue-500 to-teal-400 flex items-center justify-center">
        <div className="absolute inset-0">
          <img 
            src="/lovable-uploads/b53d8fad-f1c6-4697-a438-3d308ca2accb.png" 
            alt="Banner" 
            className="w-full h-full object-cover mix-blend-overlay opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 z-10">
          <form onSubmit={handleSearch} className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search your favorite courses"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full py-3 px-4 pr-12 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
              <button 
                type="submit" 
                className="absolute right-0 top-0 h-full px-4 bg-teal-500 text-white rounded-r-lg"
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
      
      {/* All Courses Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {allCourses.map((course) => (
            <div key={course.id} className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <Link to={`/course/${course.id}`}>
                <div className="relative">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-medium">
                    {course.duration}
                  </div>
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-medium">
                    {course.level}
                  </div>
                </div>
                
                <div className="p-4">
                  <div className="flex items-center mb-2">
                    <div className="flex items-center">
                      {renderStars(course.rating)}
                    </div>
                    <span className="text-xs text-gray-500 ml-2">({course.students})</span>
                  </div>
                  
                  <h3 className="font-medium text-gray-800 mb-4 line-clamp-2">{course.title}</h3>
                  
                  <p className="text-sm text-gray-500 mb-4 line-clamp-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  </p>
                  
                  <div className="flex items-center mt-auto border-t border-gray-100 pt-3">
                    <img
                      src={course.instructor.avatar}
                      alt={course.instructor.name}
                      className="w-6 h-6 rounded-full object-cover mr-2"
                    />
                    <span className="text-xs text-gray-500">{course.instructor.name}</span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Recommended Section */}
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800">Recommended for you</h2>
            <a href="#" className="text-teal-500 text-sm font-medium">See all</a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {recommendedCourses.map((course) => (
              <div key={course.id} className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <Link to={`/course/${course.id}`}>
                  <div className="relative">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-medium">
                      {course.duration}
                    </div>
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-medium">
                      {course.level}
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <div className="flex items-center mb-2">
                      <div className="flex items-center">
                        {renderStars(course.rating)}
                      </div>
                      <span className="text-xs text-gray-500 ml-2">({course.students})</span>
                    </div>
                    
                    <h3 className="font-medium text-gray-800 mb-4 line-clamp-2">{course.title}</h3>
                    
                    <p className="text-sm text-gray-500 mb-4 line-clamp-2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    </p>
                    
                    <div className="flex items-center mt-auto border-t border-gray-100 pt-3">
                      <img
                        src={course.instructor.avatar}
                        alt={course.instructor.name}
                        className="w-6 h-6 rounded-full object-cover mr-2"
                      />
                      <span className="text-xs text-gray-500">{course.instructor.name}</span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Instructors Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800">Classes taught by real creators</h2>
          <a href="#" className="text-teal-500 text-sm font-medium">See all</a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {instructors.map((instructor) => (
            <div key={instructor.id} className="p-6 border border-gray-100 rounded-lg">
              <div className="flex flex-col items-center">
                <img
                  src={instructor.image}
                  alt={instructor.name}
                  className="w-24 h-24 rounded-full object-cover mb-4"
                />
                <h3 className="font-medium text-gray-800 mb-2">{instructor.name}</h3>
                <p className="text-sm text-gray-500 text-center">
                  {instructor.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">What our students have to say</h2>
          
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="md:flex">
              <div className="md:flex-shrink-0 bg-gradient-to-b from-yellow-100 to-orange-100 p-6 flex items-center justify-center">
                <img 
                  className="h-48 w-48 rounded-full object-cover" 
                  src="/lovable-uploads/b53d8fad-f1c6-4697-a438-3d308ca2accb.png" 
                  alt="Student testimonial" 
                />
              </div>
              <div className="p-8">
                <div className="text-xl font-semibold text-gray-800">Savannah Nguyen</div>
                <div className="text-teal-500 mb-4">tamara74@example.com</div>
                <p className="text-gray-600 mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                <p className="text-gray-600 mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                <p className="text-gray-600 mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Courses;
