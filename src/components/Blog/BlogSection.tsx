import React from 'react';
import { BlogCard } from './BlogCard';

export function BlogSection() {
  const blogs = [
    {
      title: "These Heart Tests Could Save Your Life",
      excerpt: "Life tests for Heart Disease: When it comes to heart disease, having regular checkups can help you and your healthcare team...",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      date: "14th Dec, 2023"
    },
    {
      title: "Coronary Artery Calcium Scanning",
      excerpt: "Coronary heart disease (CHD) is the number one cause of death for men and women...",
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2080&q=80",
      date: "12th Dec, 2023"
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12">Our Latest Blogs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <BlogCard key={index} {...blog} />
          ))}
        </div>
        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors">
            Read All Blogs
          </button>
        </div>
      </div>
    </div>
  );
}