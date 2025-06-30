import { useState } from "react";
import { Menu, X, ChevronRight } from "lucide-react";
import img from "../assets/Experimind-labs-Logo.svg";

export default function ResponsiveNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsMobileProductsOpen(false); // Close products dropdown when closing mobile menu
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsMobileProductsOpen(false);
  };

  const toggleMobileProducts = () => {
    setIsMobileProductsOpen(!isMobileProductsOpen);
  };

  const handleProductsMouseEnter = () => {
    setIsProductsDropdownOpen(true);
  };

  const handleProductsMouseLeave = () => {
    setIsProductsDropdownOpen(false);
  };

  const products = [
    { name: "PSL", url: "/psl" },
    { name: "Prastuti", url: "/prastuti" },
    { name: "Anubhav", url: "/anubhav" },
    { name: "Geomagic", url: "/geomagic" },
    // { name: "Shiksha", url: "/shiksha" }
  ];

  // Get current path for active state (you can replace this with your routing logic)
  const currentPath = window.location.pathname;

  return (
    <>
      <nav className="container Utility-font-Montserrat mx-auto h-16 bg-[#ffffff] z-50 fixed top-0 left-0 right-0 flex justify-between items-center py-2 sm:px-4 shadow-sm my-3 sm:rounded-xl">
        <div className="">
          <a href="/">
            <div className="">
              <img src={img} alt="logo" width="250" />
            </div>
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:block">
          <ul className="flex justify-between items-center gap-8 text-black font-semibold text-lg">
            <li className="transition duration-300 ease-in-out hover:scale-125">
              <a
                href="/"
                className={currentPath === "/" ? "text-[#00AEEF]" : ""}
              >
                Home
              </a>
            </li>

            <li className="transition duration-300 ease-in-out hover:scale-125">
              <a
                href="/about"
                className={currentPath === "/about" ? "text-[#00AEEF]" : ""}
              >
                About Us
              </a>
            </li>

            {/* Products Dropdown */}
            <li
              className="relative transition duration-300 ease-in-out hover:scale-125"
              onMouseEnter={handleProductsMouseEnter}
              onMouseLeave={handleProductsMouseLeave}
            >
              <a
                href="/products"
                className={`flex items-center gap-1 ${
                  currentPath === "/products" ||
                  products.some((product) => currentPath === product.url)
                    ? "text-[#00AEEF]"
                    : ""
                }`}
              >
                Products
                <ChevronRight
                  size={16}
                  className={`transition-transform duration-200 ${
                    isProductsDropdownOpen ? "rotate-90" : ""
                  }`}
                />
              </a>

              {/* Desktop Dropdown Menu */}
              {isProductsDropdownOpen && (
                <div className="absolute top-full left-0 w-48 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-50">
                  {products.map((product, index) => (
                    <a
                      key={index}
                      href={product.url}
                      className={`block px-4 py-2 text-sm font-medium transition-colors duration-200 hover:bg-gray-50 hover:text-[#00AEEF] ${
                        currentPath === product.url
                          ? "text-[#00AEEF] bg-blue-50"
                          : "text-gray-700"
                      }`}
                    >
                      {product.name}
                    </a>
                  ))}
                </div>
              )}
            </li>

            <li className="transition duration-300 ease-in-out hover:scale-125">
              <a
                href="/careers"
                className={currentPath === "/careers" ? "text-[#00AEEF]" : ""}
              >
                Careers
              </a>
            </li>

            <li>
              <a
                className={`hover:text-gray-600 ${
                  currentPath === "/contact"
                    ? "text-[#00AEEF]"
                    : "text-[#f05a28]"
                }`}
                href="/contact"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Mobile & Tablet Burger Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-black hover:text-gray-600 transition-colors duration-200"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile & Tablet Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden"
          onClick={closeMobileMenu}
        >
          <div
            className="fixed top-20 left-4 right-4 md:left-auto md:right-4 md:w-1/3 bg-white rounded-xl shadow-lg p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <ul className="flex flex-col gap-4 text-black font-semibold text-lg">
              <li>
                <a
                  href="/"
                  onClick={closeMobileMenu}
                  className={`block py-2 hover:text-gray-600 transition-colors duration-200 ${
                    currentPath === "/" ? "text-[#00AEEF]" : ""
                  }`}
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="/about"
                  onClick={closeMobileMenu}
                  className={`block py-2 hover:text-gray-600 transition-colors duration-200 ${
                    currentPath === "/about" ? "text-[#00AEEF]" : ""
                  }`}
                >
                  About Us
                </a>
              </li>

              {/* Mobile Products with Nested Dropdown */}
              <li>
                <div>
                  <button
                    onClick={toggleMobileProducts}
                    className={`flex items-center justify-between w-full p-2 text-left hover:text-gray-600 transition-colors duration-200 ${
                      currentPath === "/products" ||
                      products.some((product) => currentPath === product.url)
                        ? "text-[#00AEEF]"
                        : ""
                    }`}
                  >
                    Products
                    <ChevronRight
                      size={16}
                      className={`transition-transform duration-200 ${
                        isMobileProductsOpen ? "rotate-90" : ""
                      }`}
                    />
                  </button>

                  {/* Mobile Nested Products List */}
                  {isMobileProductsOpen && (
                    <ul className="ml-4 mt-2 space-y-2 border-l-2 border-gray-200 pl-4">
                      {products.map((product, index) => (
                        <li key={index}>
                          <a
                            href={product.url}
                            onClick={closeMobileMenu}
                            className={`block py-1 text-base hover:text-gray-600 transition-colors duration-200 ${
                              currentPath === product.url
                                ? "text-[#00AEEF]"
                                : ""
                            }`}
                          >
                            {product.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </li>

              <li>
                <a
                  href="/careers"
                  onClick={closeMobileMenu}
                  className={`block py-2 hover:text-gray-600 transition-colors duration-200 ${
                    currentPath === "/careers" ? "text-[#00AEEF]" : ""
                  }`}
                >
                  Careers
                </a>
              </li>

              <li>
                <a
                  href="/contact"
                  onClick={closeMobileMenu}
                  className={`block py-2 transition-colors duration-200 ${
                    currentPath === "/contact"
                      ? "text-[#00AEEF]"
                      : "text-[#f05a28] hover:text-gray-600"
                  }`}
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
