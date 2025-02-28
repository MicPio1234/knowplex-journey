
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Rose',
    role: 'Certified Elderly Caregiver',
    image: '/lovable-uploads/931c1d79-71c9-4493-9cea-3e8885153877.png',
    rating: 5,
    text: 'These courses changed my life. The curriculum is so thorough that I feel confident in my ability to provide the best care possible. Thank you CareLearn!'
  },
  {
    id: 2,
    name: 'Marcus Brown',
    role: 'Child Care Specialist',
    image: '/lovable-uploads/9ca39d52-869b-496f-b545-de9216c2a3ad.png',
    rating: 5,
    text: 'I never thought I could learn so much in such a short time. The instructors are knowledgeable and the practical exercises helped me gain real skills that I use every day.'
  },
  {
    id: 3,
    name: 'Elena Lopez',
    role: 'Special Needs Support Provider',
    image: '/lovable-uploads/931c1d79-71c9-4493-9cea-3e8885153877.png',
    rating: 4,
    text: 'CareLearn programs are comprehensive and practical. I appreciate how they focus on both technical skills and empathetic care approaches.'
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-sm text-primary font-semibold uppercase tracking-wider">TESTIMONIALS</span>
          <h2 className="section-title mt-2">What They Say?</h2>
          <p className="text-gray-600">
            CareLearn has helped train thousands of caregivers from around the world.
            Some of our students and teachers share their experience.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          <div className="overflow-hidden rounded-2xl shadow-lg bg-white">
            <div 
              className="transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              <div className="flex">
                {testimonials.map((testimonial, index) => (
                  <div 
                    key={testimonial.id} 
                    className="w-full flex-shrink-0 p-8 md:p-12"
                    style={{ minWidth: '100%' }}
                  >
                    <div className="flex flex-col md:flex-row gap-8 items-center">
                      <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full border-4 border-white shadow-md flex-shrink-0">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="md:ml-4 flex-grow">
                        <div className="flex items-center mb-4">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              size={16}
                              className={`${i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                            />
                          ))}
                        </div>
                        <p className="text-gray-700 italic mb-6 text-lg">"{testimonial.text}"</p>
                        <div>
                          <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                          <p className="text-primary">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-primary w-8' : 'bg-gray-300'}`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          
          <button 
            onClick={prevTestimonial}
            className="absolute left-0 md:-left-16 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-gray-600 hover:text-primary transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={nextTestimonial}
            className="absolute right-0 md:-right-16 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-gray-600 hover:text-primary transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
