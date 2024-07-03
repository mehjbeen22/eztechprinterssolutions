import React from "react";
import { blogData } from "./blogData";
import { Link } from "react-router-dom";

const BlogPage = () => {
  return (
    <div className="bg-white text-[#115e59]">
      {/* Main Content */}
      <main className="py-16">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Our Blog</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogData.map((blog) => (
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
        </div>
      </main>
    </div>
  );
};

export default BlogPage;
