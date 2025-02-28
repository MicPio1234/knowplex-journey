
import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow flex items-center justify-center bg-gray-50 py-20">
        <div className="max-w-lg mx-auto text-center px-4">
          <div className="mb-8">
            <h1 className="text-9xl font-bold text-primary">404</h1>
            <div className="w-16 h-1 bg-primary mx-auto my-6 rounded-full"></div>
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Page Not Found</h2>
          <p className="text-gray-600 mb-8">
            Oops! The page you are looking for doesn't exist or has been moved.
          </p>
          <div className="flex justify-center">
            <Link to="/">
              <Button size="lg" className="rounded-full px-8 flex items-center gap-2">
                <Home size={18} />
                <span>Return to Home</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
