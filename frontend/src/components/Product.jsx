import React from "react";
import { useNavigate } from "react-router-dom";
import img from "../image";

const ProductCard = ({ title, imageSrc, className = "", route }) => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate(route);
  };

  return (
    <div
      className={`w-full max-w-sm bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-3 sm:p-4 lg:p-6 flex flex-col hover:-translate-y-1 ${className}`}
    >
      <div className=" aspect-[3/3] w-full mb-3 sm:mb-4 overflow-hidden rounded-lg bg-gray-100">
        <img
          className="w-50 h-50 bg-white object-cover hover:scale-105 transition-transform duration-500"
          src={imageSrc}
          alt={title}
          loading="lazy"
        />
      </div>
      <h3 className="Utility-font-Montserrat Utility-color-Blue text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold font-sans text-center mb-3 sm:mb-4 lg:mb-6 flex-grow flex items-center justify-center leading-tight">
        {title}
      </h3>
      <button
        onClick={handleButtonClick}
        className="Utility-font-NunitoSans w-full px-4 py-2.5 sm:px-6 sm:py-3 lg:py-3.5 bg-orange-600 hover:bg-orange-700 active:bg-orange-800 rounded-lg text-white text-sm sm:text-base lg:text-lg font-medium font-sans transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 hover:shadow-md"
      >
        See More
      </button>
    </div>
  );
};

const ProductsSection = () => {
  const products = [
    { title: "PSL", imageSrc: img.psl, route: "/psl" },
    { title: "Prastuti", imageSrc: img.prastuti, route: "/prastuti" },
    { title: "Anubhav", imageSrc: img.anubhav, route: "/anubhav" },
    { title: "Geomagic", imageSrc: img.geomagic, route: "/geomagic" },
    // { title: "Shiksha 2.0", imageSrc: img.shiksha, route: "/shiksha" }
  ];

  return (
    <div className="bg-[#2e31923b] flex items-center">
      <section className="w-full py-12 sm:py-16 lg:py-20 xl:py-20 px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Title */}
          <div className=" text-center mb-8 sm:mb-12 lg:mb-16 xl:mb-20">
            <h2 className="Utility-font-Montserrat Utility-color-Blue text-3xl sm:text-4xl lg:text-6xl font-bold text-center">
              Our Products
            </h2>
            <div className="mt-4 mb-12 lg:mb-16 w-24 h-1 bg-orange-600 mx-auto rounded-full"></div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 xl:gap-10 justify-items-center">
            {products.map((product, index) => (
              <ProductCard
                key={index}
                title={product.title}
                imageSrc={product.imageSrc}
                className="w-full max-w-xs sm:max-w-sm"
                route={product.route}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsSection;
