
import { useState, useEffect } from 'react';
import { Play } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = "/lovable-uploads/38ce3b4c-d150-4890-9e70-d75f9ca33892.png";
    img.onload = () => setIsImageLoaded(true);
  }, []);

  return (
    <section className="relative pt-20 pb-24 md:pt-28 md:pb-32 bg-gradient-to-b from-teal-500 to-teal-400 wavy-bottom overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="fade-in-bottom">
            <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium mb-6 animate-fade-in">
              Professional Caregiver Training
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Empowering <span className="relative inline-block">
                Caregivers
                <span className="absolute bottom-0 left-0 w-full h-1 bg-white/40 rounded-full"></span>
              </span> with <span className="text-teal-100">Knowledge</span> and <span className="text-teal-100">Skills</span>
            </h1>
            <p className="text-white/90 text-lg md:text-xl mb-8 leading-relaxed max-w-lg">
              Discover high-quality caregiver training courses designed by healthcare professionals to help you provide exceptional care.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 hover:shadow-lg transition-all duration-300 rounded-full px-8 py-6">
                Join For Free
              </Button>
              <Button variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white/10 rounded-full px-8 py-6 flex items-center gap-2">
                <Play size={18} className="text-white" />
                <span>Watch How it Works</span>
              </Button>
            </div>
          </div>
          
          <div className={`relative transition-all duration-500 ${isImageLoaded ? 'opacity-100' : 'opacity-0'}`}>
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl transform transition-transform hover:scale-[1.02] duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-transparent z-10 rounded-2xl"></div>
              <img 
                src="/lovable-uploads/38ce3b4c-d150-4890-9e70-d75f9ca33892.png" 
                alt="Caregiver with patient" 
                className={`w-full h-auto object-cover rounded-2xl ${isImageLoaded ? 'image-loaded' : 'image-loading'}`}
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-1/4 -right-6 w-20 h-20 bg-teal-300 rounded-full opacity-30 blur-2xl"></div>
            <div className="absolute bottom-1/3 -left-10 w-32 h-32 bg-teal-200 rounded-full opacity-30 blur-3xl"></div>
          </div>
        </div>
      </div>
      
      {/* Stats section that overlaps with the wave */}
      <div className="container mx-auto px-4 relative z-20 mt-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 -mb-24">
          <div className="stats-item bg-white rounded-xl shadow-lg p-6 transform transition-transform hover:-translate-y-1 hover:shadow-xl duration-300">
            <h3 className="stat-value">15K+</h3>
            <p className="stat-label">Trained Caregivers</p>
          </div>
          <div className="stats-item bg-white rounded-xl shadow-lg p-6 transform transition-transform hover:-translate-y-1 hover:shadow-xl duration-300">
            <h3 className="stat-value">75%</h3>
            <p className="stat-label">Job Success Rate</p>
          </div>
          <div className="stats-item bg-white rounded-xl shadow-lg p-6 transform transition-transform hover:-translate-y-1 hover:shadow-xl duration-300">
            <h3 className="stat-value">26</h3>
            <p className="stat-label">Expert Instructors</p>
          </div>
          <div className="stats-item bg-white rounded-xl shadow-lg p-6 transform transition-transform hover:-translate-y-1 hover:shadow-xl duration-300">
            <h3 className="stat-value">16</h3>
            <p className="stat-label">Years of Experience</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
