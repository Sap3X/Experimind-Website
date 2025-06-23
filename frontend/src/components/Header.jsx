import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function ResponsiveNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="container h-16 bg-[#ffffff] z-50 fixed top-0 left-0 right-0 mx-auto flex justify-between items-center py-2 px-4 shadow-sm my-3 rounded-xl">
        <div className="">
          <a href="/">
            <div className="">
              <img src="../assets/Experimind_logo.svg" alt="logo" width="200" />
            </div>
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <ul className="flex justify-between items-center gap-8 text-black font-semibold text-lg">
            <li className="transition duration-300 ease-in-out hover:scale-125">
              <a href="/">Home</a>
            </li>

            <li className="transition duration-300 ease-in-out hover:scale-125">
              <a href="/about">About Us</a>
            </li>

            <li className="transition duration-300 ease-in-out hover:scale-125">
              <a href="/products">Products</a>
            </li>

            <li className="transition duration-300 ease-in-out hover:scale-125">
              <a href="/careers">Careers</a>
            </li>

            <li>
              <a className="hover:text-gray-600 text-[#f05a28]" href="/contact">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Mobile Burger Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-black hover:text-gray-600 transition-colors duration-200"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50 md:hidden"
          onClick={closeMobileMenu}
        >
          <div
            className="fixed top-20 left-4 right-4 bg-white rounded-xl shadow-lg p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <ul className="flex flex-col gap-4 text-black font-semibold text-lg">
              <li>
                <a
                  href="/"
                  onClick={closeMobileMenu}
                  className="block py-2 hover:text-gray-600 transition-colors duration-200"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="/about"
                  onClick={closeMobileMenu}
                  className="block py-2 hover:text-gray-600 transition-colors duration-200"
                >
                  About Us
                </a>
              </li>

              <li>
                <a
                  href="/products"
                  onClick={closeMobileMenu}
                  className="block py-2 hover:text-gray-600 transition-colors duration-200"
                >
                  Products
                </a>
              </li>

              <li>
                <a
                  href="/careers"
                  onClick={closeMobileMenu}
                  className="block py-2 hover:text-gray-600 transition-colors duration-200"
                >
                  Careers
                </a>
              </li>

              <li>
                <a
                  href="/contact"
                  onClick={closeMobileMenu}
                  className="block py-2 text-[#f05a28] hover:text-gray-600 transition-colors duration-200"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
