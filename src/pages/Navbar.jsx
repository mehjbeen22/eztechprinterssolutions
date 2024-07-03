import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-[#115e59] text-white p-4 shadow-lg">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          Eztech Printer Solutions
        </Link>
        <ul className="flex flex-wrap space-x-6 mt-4 md:mt-0 md:ml-auto">
          <li className="hover:text-gray-200">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-gray-200">
            <Link to="/blog">Blogs</Link>
          </li>
          <li className="hover:text-gray-200">
            <Link to="/privacypolicy">Privacy Policy</Link>
          </li>
          <li className="hover:text-gray-200">
            <Link to="/faqs">FAQs</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
