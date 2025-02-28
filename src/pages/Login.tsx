
import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle authentication
    if (!email || !password) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Success",
      description: "Login successful! Redirecting...",
    });
    
    // For demo purposes, we'll just log the values
    console.log({ email, password });
  };

  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      {/* Left side with image */}
      <div className="w-full md:w-1/2 bg-gray-100">
        <img
          src="/lovable-uploads/0f93ab2f-34fe-40d9-8812-9f125124359b.png"
          alt="Caregiver with elderly patient"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Right side with login form */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8 md:p-16">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-800">Welcome to CareLearn!</h1>
            <p className="mt-3 text-gray-600">
              Access quality training and certification for caregiving and healthcare support.
            </p>
          </div>

          <div className="mt-10">
            <Button 
              variant="ghost" 
              className="text-primary text-xl font-medium w-full py-6 rounded-full"
            >
              Login
            </Button>
          </div>

          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your Email Address"
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                />
              </div>

              <div className="relative">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <div className="mt-1 relative rounded-full shadow-sm">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your Password"
                    className="block w-full px-4 py-3 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-primary focus:border-primary pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 cursor-pointer top-0 bottom-0 my-auto"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            <div>
              <Button
                type="submit"
                className="w-full flex justify-center py-6 px-4 border border-transparent rounded-full shadow-sm text-white bg-teal-500 hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
              >
                Login
              </Button>
            </div>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Don't have an account?{" "}
              <Link to="/signup" className="font-medium text-teal-500 hover:text-teal-400">
                Sign up for free
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
