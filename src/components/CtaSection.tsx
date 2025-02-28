
import { BookOpen, Award, Calendar } from 'lucide-react';
import { Button } from "@/components/ui/button";

const CtaSection = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-teal-600 to-teal-500 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-teal-400/30 blur-xl"></div>
        <div className="absolute top-1/2 -left-20 w-60 h-60 rounded-full bg-teal-300/30 blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-32 h-32 rounded-full bg-teal-200/20 blur-xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
              Get the care giving training you need.
            </h2>
            <p className="text-white/90 text-lg mb-8">
              Enhance your skills with certificates and unlock more career opportunities. Our training complies with industry standards and is recognized by leading healthcare providers.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center mr-4 flex-shrink-0">
                  <BookOpen className="text-white" size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-white mb-2">Comprehensive Curriculum</h3>
                  <p className="text-white/80">
                    Courses designed by healthcare professionals covering all aspects of caregiving.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center mr-4 flex-shrink-0">
                  <Award className="text-white" size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-white mb-2">Industry Recognized Certification</h3>
                  <p className="text-white/80">
                    Earn certificates that boost your credentials and employment prospects.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center mr-4 flex-shrink-0">
                  <Calendar className="text-white" size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-white mb-2">Flexible Learning Schedule</h3>
                  <p className="text-white/80">
                    Learn at your own pace with 24/7 access to course materials.
                  </p>
                </div>
              </div>
            </div>
            
            <Button size="lg" className="mt-10 bg-white text-teal-600 hover:bg-white/90 rounded-full px-8 py-6">
              Join Now
            </Button>
          </div>
          
          <div className="relative animate-fade-in">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/lovable-uploads/9ca39d52-869b-496f-b545-de9216c2a3ad.png" 
                alt="Training Session" 
                className="w-full h-auto rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 w-full p-6">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-red-500"></div>
                  <span className="text-sm text-white font-medium">Live Training</span>
                </div>
                <h3 className="text-xl text-white font-bold mb-2">
                  Professional Caregiving Techniques
                </h3>
                <p className="text-white/80">
                  Join our next live session with expert instructors
                </p>
                <Button variant="outline" size="sm" className="mt-4 bg-transparent border border-white text-white hover:bg-white/10">
                  Watch Preview
                </Button>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-white/20 rounded-2xl -z-10"></div>
            <div className="absolute -bottom-8 -right-8 w-full h-full border-2 border-white/10 rounded-2xl -z-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
