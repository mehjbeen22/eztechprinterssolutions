import React from "react";
import { useParams } from "react-router-dom";
import { blogData } from "./blogData";

const BlogDetailPage = () => {
  const { blogId } = useParams();
  const singleBlog = blogData.find((blog) => blog.id === blogId);

  if (!singleBlog) {
    return <div className="text-center text-red-500">Blog not found</div>;
  }

  return (
    <div className="bg-white text-[#115e59] p-6 lg:p-16">
      <div className="container mx-auto flex flex-col lg:flex-row items-center lg:items-start lg:space-x-8">
        <div className="w-full lg:w-2/3">
          <h1 className="text-4xl font-bold mb-4">{singleBlog.title}</h1>
          <p className="mb-6">{singleBlog.description}</p>
          <div>
            {singleBlog.content.map((step, index) => (
              <div key={index} className="mb-4 p-4 border-b border-gray-200">
                <h2 className="text-2xl font-semibold mb-2">{step.title}</h2>
                <p>{step.details}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full lg:w-1/3 mt-6 lg:mt-0">
          <img
            src={singleBlog.imageUrl}
            alt={singleBlog.title}
            className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default BlogDetailPage;
