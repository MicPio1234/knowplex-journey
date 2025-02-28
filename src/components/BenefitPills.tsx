
import { CheckCircle, Clock, Book, Award, Users } from 'lucide-react';

const benefits = [
  {
    id: 1,
    icon: <CheckCircle size={20} className="text-primary" />,
    text: "Industry-recognized certifications"
  },
  {
    id: 2,
    icon: <Clock size={20} className="text-primary" />,
    text: "Learn at your own pace"
  },
  {
    id: 3,
    icon: <Book size={20} className="text-primary" />,
    text: "Comprehensive curriculum"
  },
  {
    id: 4,
    icon: <Award size={20} className="text-primary" />,
    text: "Expert instructors"
  },
  {
    id: 5,
    icon: <Users size={20} className="text-primary" />,
    text: "Join a community of caregivers"
  }
];

const BenefitPills = () => {
  return (
    <div className="flex justify-center py-6 overflow-x-auto hide-scrollbar">
      <div className="flex space-x-4 px-4">
        {benefits.map((benefit) => (
          <div 
            key={benefit.id} 
            className="flex items-center space-x-2 bg-white py-2 px-4 rounded-full shadow-sm whitespace-nowrap"
          >
            {benefit.icon}
            <span className="text-sm font-medium text-gray-800">{benefit.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BenefitPills;
