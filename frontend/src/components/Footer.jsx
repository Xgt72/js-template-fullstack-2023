import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="mt-5 bg-gray-800 text-white py-4 mt-50">
      <div className="flex md:flex-row justify-between items-center px-5">
        <div className="container mx-auto px-4">
          <p className="text-center">&copy; ℗ ® ™ 2023 Fitness Center</p>
        </div>
        <div className="text-gray-800 text-sm md:text-base bg-white mb-5 rounded-full px-2 py-1 md:px-5 md:py-3 mt-5 hover:bg-red-500 hover:text-white">
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
