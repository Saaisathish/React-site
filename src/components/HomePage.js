import React from 'react';
import bg from '../images/saaiedit.jpg';

const HomeSection = () => {
  return (
    <section id="home-section" className="bg-gray-900 text-white py-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-last md:order-first relative">
            {/* Adjust the style based on image size */}
            <div
              className="h-96 rounded-md shadow-md overflow-hidden" // Remove bg-cover and bg-center
              style={{
                width: '100%',
                height:'100%' // Ensure the width of the container matches the image
              }}
            >
              <img
                src={bg}
                alt="Saaisathish"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0  opacity-50 rounded-md"></div>
            </div>
          </div>
          <div className="md:pl-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Hello! I'm Saaisathish</h1>
            <p className="text-lg mb-6">Aspiring Software Engineer</p>
            <div>
              <a href="https://www.linkedin.com/in/saai-sathish-s-a-10441016a/" className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 mr-4 rounded-full">Linkedin</a>
              <a href="https://github.com/Saaisathish" className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full">My works</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
