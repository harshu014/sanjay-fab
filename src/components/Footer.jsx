import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/sanjay.jpeg" 
                alt="Sanjay Fabricators" 
                className="h-12 w-auto object-contain"
              />
              <div className="flex flex-col leading-tight">
                <span className="font-extrabold text-xl text-red-500">SANJAY</span>
                <span className="font-semibold text-sm text-gray-300">FABRICATORS</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Leading metal fabrication company specializing in custom metal products since 2010.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold text-red-500 mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-red-500 transition duration-300 flex items-center gap-2 text-sm">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-red-500 transition duration-300 flex items-center gap-2 text-sm">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  About
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-400 hover:text-red-500 transition duration-300 flex items-center gap-2 text-sm">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  Products
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-red-500 transition duration-300 flex items-center gap-2 text-sm">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-red-500 mb-4">Our Products</h4>
            <ul className="space-y-3">
              <li className="text-gray-400 hover:text-red-500 transition duration-300 text-sm flex items-center gap-2 cursor-default">
                <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                Metal Pot Tables
              </li>
              <li className="text-gray-400 hover:text-red-500 transition duration-300 text-sm flex items-center gap-2 cursor-default">
                <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                Shelf Racks
              </li>
              <li className="text-gray-400 hover:text-red-500 transition duration-300 text-sm flex items-center gap-2 cursor-default">
                <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                Pyro Stands
              </li>
              <li className="text-gray-400 hover:text-red-500 transition duration-300 text-sm flex items-center gap-2 cursor-default">
                <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                Metal Stands
              </li>
              <li className="text-gray-400 hover:text-red-500 transition duration-300 text-sm flex items-center gap-2 cursor-default">
                <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                Custom Fabrication
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-red-500 mb-4">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400 text-sm hover:text-white transition duration-300">
                <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Gali NO.3, Anand Parbat Industrial Area, New Delhi, India</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm hover:text-white transition duration-300">
                <svg className="w-5 h-5 text-red-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+919310602295" className="hover:text-red-500 transition duration-300">+91 9310602295</a>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm hover:text-white transition duration-300">
                <svg className="w-5 h-5 text-red-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+916388052096" className="hover:text-red-500 transition duration-300">+91 6388052096</a>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm hover:text-white transition duration-300">
                <svg className="w-5 h-5 text-red-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+918527164122" className="hover:text-red-500 transition duration-300">+91 8527164122</a>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm hover:text-white transition duration-300">
                <svg className="w-5 h-5 text-red-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:sanjayfabricators484@gmail.com" className="hover:text-red-500 transition duration-300">sanjayfabricators484@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} Sanjay Fabricators. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-xs text-gray-500">
              <span>🇮🇳 Made in India</span>
              <span className="w-px h-4 bg-gray-700"></span>
              <span>Quality Since 2010</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;