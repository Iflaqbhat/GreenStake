
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { TreeDeciduous } from "lucide-react";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-green-50 to-white dark:from-green-950 dark:to-background p-4">
      <div className="text-center max-w-md">
        <div className="inline-flex items-center justify-center p-2 bg-green-100 dark:bg-green-900/30 rounded-full mb-4">
          <TreeDeciduous className="h-12 w-12 text-green-600" />
        </div>
        <h1 className="text-4xl font-bold mb-2 text-green-800 dark:text-green-400">Oops! Page Not Found</h1>
        <p className="text-xl text-muted-foreground mb-6">
          We couldn't find the page you were looking for. It might have been moved or doesn't exist.
        </p>
        <Link to="/">
          <Button className="bg-green-600 hover:bg-green-700 text-white">
            Return to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
