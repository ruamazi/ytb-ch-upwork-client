import { Link } from "react-router-dom";

const Navbar = () => {
 return (
  <header className="flex justify-between items-center py-8">
   <Link to="/">
    <img src="./logo.jpg" alt="Logo" className="w-16 h-16" />
   </Link>

   <nav>
    <Link
     to="/admin"
     className="bg-blue-500  text-white font-bold py-2 px-4 rounded-full transition duration-300 hover:bg-transparent hover:border-blue-700 hover:text-blue-700 border-2"
    >
     Admin
    </Link>
   </nav>
  </header>
 );
};

export default Navbar;
