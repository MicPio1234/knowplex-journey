
import { useState, useEffect } from 'react';
import { Menu, X, Search, ChevronDown, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <h1 className="text-xl md:text-2xl font-bold text-primary mr-2">CareLearn</h1>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            <Link to="/" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary transition-colors">
              Home
            </Link>
            <div className="relative group">
              <button className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary transition-colors flex items-center">
                Courses <ChevronDown size={16} className="ml-1 transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left z-50">
                <div className="py-1 rounded-md bg-white shadow-xs">
                  <Link to="/courses/elderly-care" className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary/10 hover:text-primary">
                    Elderly Care
                  </Link>
                  <Link to="/courses/child-care" className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary/10 hover:text-primary">
                    Child Care
                  </Link>
                  <Link to="/courses/special-needs" className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary/10 hover:text-primary">
                    Special Needs Support
                  </Link>
                </div>
              </div>
            </div>
            <Link to="/about" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary transition-colors">
              About Us
            </Link>
            <Link to="/blog" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary transition-colors">
              Blog
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search courses..." 
                className="py-2 pl-10 pr-4 w-48 lg:w-64 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
              />
              <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
            <Link to="/login">
              <Button variant="outline" className="rounded-full border-primary/20 text-primary hover:bg-primary/5">
                Log in
              </Button>
            </Link>
            <Link to="/signup">
              <Button className="rounded-full bg-primary hover:bg-primary/90 text-white shadow-sm">
                Sign up for free
              </Button>
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 rounded-md text-gray-700">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen opacity-100 py-4' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <div className="flex flex-col space-y-3 pt-2 pb-3 border-t mt-3">
            <Link to="/" className="px-3 py-2 text-base font-medium text-gray-700 hover:text-primary">
              Home
            </Link>
            <Link to="/courses" className="px-3 py-2 text-base font-medium text-gray-700 hover:text-primary">
              Courses
            </Link>
            <Link to="/about" className="px-3 py-2 text-base font-medium text-gray-700 hover:text-primary">
              About Us
            </Link>
            <Link to="/blog" className="px-3 py-2 text-base font-medium text-gray-700 hover:text-primary">
              Blog
            </Link>
            <div className="relative mt-3">
              <input 
                type="text" 
                placeholder="Search courses..." 
                className="w-full py-2 pl-10 pr-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
              />
              <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
            <div className="flex flex-col space-y-3 mt-4">
              <Link to="/login" className="btn-secondary text-center py-2">
                Log in
              </Link>
              <Link to="/signup" className="btn-primary text-center py-2">
                Sign up for free
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
