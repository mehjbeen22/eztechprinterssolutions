import React from "react";
import { blogData } from "./blog/blogData";
import { Link } from "react-router-dom";
import Disclaimer from "./Disclaimer";

const HomePage = () => {
  return (
    <main className="bg-white text-[#115e59]">
      <div className="relative">
        <img
          src="https://img.freepik.com/free-photo/side-view-printer-desk-office_23-2149628827.jpg?t=st=1719913247~exp=1719916847~hmac=3e65ef73b95680d20019002e42dd164ba24febc1fcf084c7e3dfd919524d2be2&w=740"
          alt="Woman drinking coffee"
          className="w-full h-96 object-cover animate__animated animate__fadeIn"
        />
        <div className="absolute inset-0  bg-teal-900 bg-opacity-50 flex justify-center items-center animate__animated animate__fadeIn">
          <div className="text-center text-white animate__animated animate__fadeInLeft">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 ">
              Welcome to Eztech Printer Solutions
            </h1>
            <p className="text-2xl mb-8 ">
              Your one-stop solution for all printer setup and troubleshooting
              needs.
            </p>
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <section className="py-10 bg-gray-100 shadow-inner">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-8 text-[#115e59]">
            OUR SERVICES
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link
              to="/printersetup"
              className="bg-white p-6 shadow-lg rounded-lg transform transition-transform duration-300 hover:scale-105"
            >
              <h4 className="text-2xl font-bold mb-4 text-[#115e59]">
                Printer Setup
              </h4>
              <p className="text-gray-700">
                Step-by-step guides to help you set up your printer
                effortlessly.
              </p>
            </Link>
            <Link
              to="scannersetup"
              className="bg-white p-6 shadow-lg rounded-lg transform transition-transform duration-300 hover:scale-105"
            >
              <h4 className="text-2xl font-bold mb-4 text-[#115e59]">
                Scanner Setup
              </h4>
              <p className="text-gray-700">
                Comprehensive instructions for setting up your scanner.
              </p>
            </Link>
            <Link
              to="printeroffline"
              className="bg-white p-6 shadow-lg rounded-lg transform transition-transform duration-300 hover:scale-105"
            >
              <h4 className="text-2xl font-bold mb-4 text-[#115e59]">
                Troubleshooting / Printer Offline
              </h4>
              <p className="text-gray-700">
                Find solutions to common printer and scanner problems.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* blog ----------- page  */}
      <section className="p-8">
        <h3 className="text-3xl font-bold text-center mb-8">OUR BLOGS</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {blogData.slice(0, 3).map((blog) => (
            <div
              key={blog.id}
              className="bg-white p-6 shadow-lg rounded-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={blog.imageUrl}
                alt={blog.title}
                className="rounded-t-lg w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-2xl font-bold mb-4">{blog.title}</h3>
                <p>{blog.description}</p>
                <Link
                  to={`/blogdeatil/${blog.id}`}
                  className="text-[#115e59] font-bold mt-4 inline-block hover:underline"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Disclaimer />
    </main>
  );
};

export default HomePage;
