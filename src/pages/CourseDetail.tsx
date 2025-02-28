
import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Mock data for the course
const courseData = {
  id: '1',
  title: 'Anatomy',
  subtitle: 'Introduction to anatomy',
  duration: '1 hour',
  image: '/lovable-uploads/bb3c889b-f64d-473d-8e52-bf100f9a3b71.png',
  price: 89.99,
  description: 'Lorem ipsum dolor sit amet, consectetur adi piscting elit, sed do eiusmodtempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodtempor elit, sed do eiusmodtempor ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodtempor elit, sed do eiusmod',
  instructor: {
    name: 'Bulkin Simons',
    avatar: '/lovable-uploads/931c1d79-71c9-4493-9cea-3e8885153877.png',
    rating: 5
  },
  modules: [
    {
      title: 'Change Simplification',
      lessons: [
        { id: '1', title: 'Lesson 01: Introduction about XD', duration: '30 mins', type: 'video' },
        { id: '2', title: 'Lesson 01: Introduction about XD', duration: '30 mins', type: 'document' },
        { id: '3', title: 'Lesson 01: Introduction about XD', duration: '30 mins', type: 'video' },
        { id: '4', title: 'Lesson 01: Introduction about XD', duration: '30 mins', type: 'exercise' }
      ]
    },
    {
      title: 'PRACTICE QUIZ',
      lessons: [
        { id: '5', title: 'Lesson 01: Introduction about XD', duration: '30 mins', type: 'video' },
        { id: '6', title: 'Lesson 01: Introduction about XD', duration: '30 mins', type: 'document' },
        { id: '7', title: 'Lesson 01: Introduction about XD', duration: '30 mins', type: 'video' },
        { id: '8', title: 'Lesson 01: Introduction about XD', duration: '30 mins', type: 'exercise' },
        { id: '9', title: 'Lesson 01: Introduction about XD', duration: '30 mins', type: 'video' },
        { id: '10', title: 'Lesson 01: Introduction about XD', duration: '30 mins', type: 'document' },
        { id: '11', title: 'Lesson 01: Introduction about XD', duration: '30 mins', type: 'video' }
      ]
    },
    {
      title: 'PRACTICE QUIZ',
      lessons: [
        { id: '12', title: 'Lesson 01: Introduction about XD', duration: '30 mins', type: 'video' },
        { id: '13', title: 'Lesson 01: Introduction about XD', duration: '30 mins', type: 'document' },
        { id: '14', title: 'Lesson 01: Introduction about XD', duration: '30 mins', type: 'video' },
        { id: '15', title: 'Lesson 01: Introduction about XD', duration: '30 mins', type: 'exercise' },
        { id: '16', title: 'Lesson 01: Introduction about XD', duration: '30 mins', type: 'video' }
      ]
    }
  ],
  videoUrl: '#',
  whoisfor: 'Lorem ipsum dolor sit amet, consectetur adi piscting elit, sed do eiusmodtempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodtempor elit, sed do eiusmodtempor ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodtempor elit, sed do eiusmod.',
  achievable: [
    'Lorem ipsum dolor sit amet, consectetur adi piscting elit, sed do eiusmodtempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodtempor elit, sed do eiusmodtempor ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodtempor elit, sed do eiusmod.Who this course is for?',
    'Lorem ipsum dolor sit amet, consectetur adi piscting elit, sed do eiusmodtempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodtempor elit, sed do eiusmodtempor ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodtempor elit, sed do eiusmod.'
  ]
};

// Mock data for related courses
const relatedCourses = [
  {
    id: '101',
    title: 'AWS Certified solutions Architect',
    image: '/lovable-uploads/9b339000-39e2-45b5-a6a9-e1f1e4210953.png',
    duration: '1 Month',
    category: 'Design',
    price: 89.99,
    originalPrice: 149.99,
    instructor: {
      name: 'Lina',
      avatar: '/lovable-uploads/931c1d79-71c9-4493-9cea-3e8885153877.png',
    },
    description: 'Lorem ipsum dolor sit amet, consectetur adipcing elit, sed do eiusmod tempor'
  },
  {
    id: '102',
    title: 'AWS Certified solutions Architect',
    image: '/lovable-uploads/9ca39d52-869b-496f-b545-de9216c2a3ad.png',
    duration: '1 Month',
    category: 'Design',
    price: 89.99,
    originalPrice: 149.99,
    instructor: {
      name: 'Lina',
      avatar: '/lovable-uploads/931c1d79-71c9-4493-9cea-3e8885153877.png',
    },
    description: 'Lorem ipsum dolor sit amet, consectetur adipcing elit, sed do eiusmod tempor'
  },
  {
    id: '103',
    title: 'AWS Certified solutions Architect',
    image: '/lovable-uploads/9b339000-39e2-45b5-a6a9-e1f1e4210953.png',
    duration: '1 Month',
    category: 'Design',
    price: 89.99,
    originalPrice: 149.99,
    instructor: {
      name: 'Lina',
      avatar: '/lovable-uploads/931c1d79-71c9-4493-9cea-3e8885153877.png',
    },
    description: 'Lorem ipsum dolor sit amet, consectetur adipcing elit, sed do eiusmod tempor'
  },
  {
    id: '104',
    title: 'AWS Certified solutions Architect',
    image: '/lovable-uploads/9ca39d52-869b-496f-b545-de9216c2a3ad.png',
    duration: '1 Month',
    category: 'Design',
    price: 89.99,
    originalPrice: 149.99,
    instructor: {
      name: 'Lina',
      avatar: '/lovable-uploads/931c1d79-71c9-4493-9cea-3e8885153877.png',
    },
    description: 'Lorem ipsum dolor sit amet, consectetur adipcing elit, sed do eiusmod tempor'
  }
];

// Lesson icon component based on lesson type
const LessonIcon = ({ type }: { type: string }) => {
  switch (type) {
    case 'video':
      return <div className="w-5 h-5 bg-blue-600 rounded flex items-center justify-center"><span className="text-white text-xs">V</span></div>;
    case 'document':
      return <div className="w-5 h-5 bg-orange-400 rounded flex items-center justify-center"><span className="text-white text-xs">D</span></div>;
    case 'exercise':
      return <div className="w-5 h-5 bg-pink-400 rounded flex items-center justify-center"><span className="text-white text-xs">E</span></div>;
    default:
      return <div className="w-5 h-5 bg-gray-400 rounded flex items-center justify-center"><span className="text-white text-xs">?</span></div>;
  }
};

// Related course card component
const RelatedCourseCard = ({ course }: { course: any }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col">
      <div className="relative h-40 overflow-hidden">
        <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
      </div>
      <div className="p-4 flex-grow flex flex-col">
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <span className="mr-4">{course.category}</span>
          <Clock size={14} className="mr-1" />
          <span>{course.duration}</span>
        </div>
        <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2">{course.title}</h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{course.description}</p>
        <div className="mt-auto pt-3 border-t border-gray-100 flex items-center justify-between">
          <div className="flex items-center">
            <img src={course.instructor.avatar} alt={course.instructor.name} className="w-6 h-6 rounded-full mr-2" />
            <span className="text-sm text-gray-600">{course.instructor.name}</span>
          </div>
          <div>
            <span className="text-gray-400 line-through text-xs mr-2">${course.originalPrice}</span>
            <span className="text-primary font-bold">${course.price}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const CourseDetail = () => {
  const { courseId } = useParams();
  const [currentVideo, setCurrentVideo] = useState('0:00');
  const [totalVideo, setTotalVideo] = useState('03:28');
  const [videoProgress, setVideoProgress] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // In a real app, we would fetch the course data based on courseId
  // For now, we'll use our mock data
  const course = courseData;
  
  // Handle slide navigation for related courses
  const nextSlide = () => {
    setCurrentSlide((prev) => 
      prev === Math.ceil(relatedCourses.length / 4) - 1 ? 0 : prev + 1
    );
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => 
      prev === 0 ? Math.ceil(relatedCourses.length / 4) - 1 : prev - 1
    );
  };
  
  const visibleCourses = relatedCourses.slice(
    currentSlide * 4, 
    Math.min((currentSlide + 1) * 4, relatedCourses.length)
  );

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Course header with video section */}
      <div className="bg-primary text-white">
        <div className="container mx-auto px-4 md:px-6 py-10 md:py-6 flex flex-col lg:flex-row">
          <div className="lg:w-1/4 mb-6 lg:mb-0">
            <Link to="/" className="inline-flex items-center text-white hover:text-white/80 mb-6">
              <ArrowLeft size={20} className="mr-2" />
              <span>Back to Home</span>
            </Link>
            
            <div className="lg:pr-8">
              <button className="bg-white/10 hover:bg-white/20 rounded py-2 px-4 mb-6 text-sm w-full text-left">
                Change Simplification
              </button>
              
              {course.modules.map((module, moduleIndex) => (
                <div key={moduleIndex} className="mb-6">
                  <h3 className="font-semibold mb-3 uppercase text-sm">{module.title}</h3>
                  <div className="space-y-2">
                    {module.lessons.map((lesson) => (
                      <div 
                        key={lesson.id} 
                        className="flex items-center bg-white/5 hover:bg-white/10 rounded p-2 cursor-pointer"
                      >
                        <LessonIcon type={lesson.type} />
                        <div className="ml-2 flex-grow">
                          <p className="text-sm">{lesson.title}</p>
                          <p className="text-xs text-gray-300">{lesson.duration}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:w-3/4">
            <div className="bg-gray-800 rounded-lg overflow-hidden">
              {/* Course title bar */}
              <div className="bg-primary p-4">
                <h1 className="text-2xl font-bold">{course.title}</h1>
                <p className="text-white/80">{course.subtitle}</p>
                <div className="flex items-center mt-2">
                  <Clock size={16} className="mr-1" />
                  <span className="text-sm">{course.duration}</span>
                </div>
              </div>
              
              {/* Video player */}
              <div className="relative">
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="w-full object-cover aspect-video"
                />
                
                {/* Video controls */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <div className="flex items-center justify-between text-white mb-2">
                    <div className="flex items-center">
                      <button className="p-2 bg-white/20 rounded-full mr-2">
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </button>
                      <span className="text-sm">{currentVideo} / {totalVideo}</span>
                    </div>
                    <button className="p-2 bg-white/20 rounded-full">
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z" />
                      </svg>
                    </button>
                  </div>
                  
                  {/* Progress bar */}
                  <div className="w-full bg-white/30 rounded-full h-1 mb-1">
                    <div 
                      className="bg-primary h-1 rounded-full" 
                      style={{ width: `${videoProgress}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Course info */}
            <div className="bg-white rounded-lg p-6 mt-6">
              <h2 className="text-xl font-semibold mb-4">06 Super Coins on the way</h2>
              <p className="text-gray-600 mb-6">{course.description}</p>
              
              <h2 className="text-xl font-semibold mb-4">Who this course is for?</h2>
              <p className="text-gray-600 mb-6">{course.whoisfor}</p>
              
              <h2 className="text-xl font-semibold mb-4">Achievable</h2>
              <div className="space-y-4">
                {course.achievable.map((item, index) => (
                  <p key={index} className="text-gray-600">{item}</p>
                ))}
              </div>
              
              {/* Instructor info */}
              <div className="mt-8 flex items-start">
                <img 
                  src={course.instructor.avatar} 
                  alt={course.instructor.name} 
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold">{course.instructor.name}</h3>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={16} 
                        className={`${
                          i < course.instructor.rating 
                            ? "text-yellow-400 fill-yellow-400" 
                            : "text-gray-300"
                        }`} 
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 mt-2">
                    Lorem ipsum dolor sit amet, consectetur adi piscting elit, sed do eiusmodtempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodtempor
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Related courses section */}
      <div className="container mx-auto px-4 md:px-6 py-10">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Student also bought</h2>
          <div className="flex space-x-2">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={prevSlide}
              className="border-gray-200"
            >
              <ChevronLeft size={20} />
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              onClick={nextSlide}
              className="border-gray-200"
            >
              <ChevronRight size={20} />
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {visibleCourses.map((course) => (
            <RelatedCourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
