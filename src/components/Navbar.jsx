import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <img 
              src="/sanjay.jpeg" 
              alt="Sanjay Fabricators" 
              className="h-12 w-auto object-contain"
            />
            <div className="flex flex-col leading-tight">
              <span className="font-extrabold text-xl text-red-500">SANJAY</span>
              <span className="font-semibold text-sm tracking-wider text-gray-300">
                FABRICATORS
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            <NavLink 
              to="/" 
              className={({ isActive }) => `
                px-4 py-2.5 rounded-lg text-base font-semibold tracking-wide
                transition-all duration-300 ease-in-out
                ${isActive 
                  ? 'bg-red-500 text-white shadow-lg scale-105' 
                  : 'text-gray-200 hover:bg-gray-800 hover:text-red-400 hover:scale-105'
                }
              `}
            >
              Home
            </NavLink>
            <NavLink 
              to="/about" 
              className={({ isActive }) => `
                px-4 py-2.5 rounded-lg text-base font-semibold tracking-wide
                transition-all duration-300 ease-in-out
                ${isActive 
                  ? 'bg-red-500 text-white shadow-lg scale-105' 
                  : 'text-gray-200 hover:bg-gray-800 hover:text-red-400 hover:scale-105'
                }
              `}
            >
              About
            </NavLink>
            <NavLink 
              to="/products" 
              className={({ isActive }) => `
                px-4 py-2.5 rounded-lg text-base font-semibold tracking-wide
                transition-all duration-300 ease-in-out
                ${isActive 
                  ? 'bg-red-500 text-white shadow-lg scale-105' 
                  : 'text-gray-200 hover:bg-gray-800 hover:text-red-400 hover:scale-105'
                }
              `}
            >
              Products
            </NavLink>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => `
                px-4 py-2.5 rounded-lg text-base font-semibold tracking-wide
                transition-all duration-300 ease-in-out
                ${isActive 
                  ? 'bg-red-500 text-white shadow-lg scale-105' 
                  : 'text-gray-200 hover:bg-gray-800 hover:text-red-400 hover:scale-105'
                }
              `}
            >
              Contact
            </NavLink>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="inline-flex items-center justify-center p-2.5 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-300"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-7 w-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-7 w-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 border-t border-gray-700">
          <div className="px-4 pt-3 pb-4 space-y-2">
            <NavLink 
              to="/" 
              className={({ isActive }) => `
                block px-4 py-3 rounded-lg text-base font-semibold tracking-wide
                transition-all duration-300
                ${isActive 
                  ? 'bg-red-500 text-white' 
                  : 'text-gray-200 hover:bg-gray-700 hover:text-red-400'
                }
              `}
            >
              🏠 Home
            </NavLink>
            <NavLink 
              to="/about" 
              className={({ isActive }) => `
                block px-4 py-3 rounded-lg text-base font-semibold tracking-wide
                transition-all duration-300
                ${isActive 
                  ? 'bg-red-500 text-white' 
                  : 'text-gray-200 hover:bg-gray-700 hover:text-red-400'
                }
              `}
            >
              ℹ️ About
            </NavLink>
            <NavLink 
              to="/products" 
              className={({ isActive }) => `
                block px-4 py-3 rounded-lg text-base font-semibold tracking-wide
                transition-all duration-300
                ${isActive 
                  ? 'bg-red-500 text-white' 
                  : 'text-gray-200 hover:bg-gray-700 hover:text-red-400'
                }
              `}
            >
              📦 Products
            </NavLink>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => `
                block px-4 py-3 rounded-lg text-base font-semibold tracking-wide
                transition-all duration-300
                ${isActive 
                  ? 'bg-red-500 text-white' 
                  : 'text-gray-200 hover:bg-gray-700 hover:text-red-400'
                }
              `}
            >
              📞 Contact
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;