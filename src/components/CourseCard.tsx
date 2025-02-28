
import { useState } from 'react';
import { Clock, User, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CourseCardProps {
  id: string;
  title: string;
  image: string;
  duration: string;
  level: string;
  rating: number;
  students: number;
  instructor: {
    name: string;
    avatar: string;
  };
  price: number;
  salePrice?: number;
}

const CourseCard = ({
  id,
  title,
  image,
  duration,
  level,
  rating,
  students,
  instructor,
  price,
  salePrice,
}: CourseCardProps) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <Link to={`/course/${id}`} className="course-card group animate-fade-in">
      <div className="relative overflow-hidden h-48">
        <img
          src={image}
          alt={title}
          className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 ${isImageLoaded ? 'image-loaded' : 'image-loading'}`}
          onLoad={() => setIsImageLoaded(true)}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-medium flex items-center">
          <Clock size={12} className="mr-1" />
          {duration}
        </div>
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-medium">
          {level}
        </div>
      </div>
      
      <div className="p-5 flex-grow flex flex-col">
        <div className="flex items-center mb-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={14}
                className={`${i < Math.floor(rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-600 ml-2">({students})</span>
        </div>
        
        <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-primary transition-colors line-clamp-2">
          {title}
        </h3>
        
        <div className="flex items-center mt-auto pt-4 border-t border-gray-100">
          <img
            src={instructor.avatar}
            alt={instructor.name}
            className="w-8 h-8 rounded-full object-cover mr-2"
          />
          <span className="text-sm text-gray-600">{instructor.name}</span>
        </div>
        
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center">
            <User size={14} className="text-gray-400 mr-1" />
            <span className="text-xs text-gray-500">{students} students</span>
          </div>
          <div className="flex items-center">
            {salePrice ? (
              <>
                <span className="text-gray-400 line-through text-xs mr-2">${price}</span>
                <span className="text-primary font-bold">${salePrice}</span>
              </>
            ) : (
              <span className="text-primary font-bold">${price}</span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;
