import React from 'react';

interface BlogCardProps {
  title: string;
  excerpt: string;
  image: string;
  date: string;
}

export function BlogCard({ title, excerpt, image, date }: BlogCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img 
        src={image} 
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <span className="text-blue-600 text-sm">{date}</span>
        <h3 className="text-xl font-semibold mt-2 mb-3">{title}</h3>
        <p className="text-gray-600 mb-4">{excerpt}</p>
        <button className="text-blue-600 font-semibold hover:text-blue-800">
          Read more
        </button>
      </div>
    </div>
  );
}