import React from 'react';
import project5Image from '../../images/project-5.jpg';
import project6Image from '../../images/project-6.jpg';
import project3Image from '../../images/project-3.jpg';

const ProjectSection = () => {
  return (
    <section className="bg-gray-100 py-20" id="projects-section">
      <div className="container mx-auto">
        <div className="row justify-center mb-8">
          <div className="col-md-12 text-center">
            <h2 className="text-4xl font-bold mb-4">My Projects</h2>
            <p>These are some of my major and minor projects.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div
              className="project img ftco-animate flex justify-center items-center bg-cover bg-center h-64 relative text-white"
              style={{ backgroundImage: `url(${project5Image})` }}
            >
              <div className="overlay bg-gray-800 opacity-70 absolute inset-0"></div>
              <div className="text text-center p-4 w-full absolute z-10">
                <h3 className="text-2xl font-semibold mb-2 hover:underline">
                  <a href="https://github.com/Saaisathish/Trafficsign-detection" className="text-white hover:underline">
                    Trafficsign Detection using OpenCV
                  </a>
                </h3>
                <span className="text-sm">Deeplearning</span>
              </div>
            </div>
          </div>
          <div className="col-md-8 mb-4">
            <div
              className="project img ftco-animate flex justify-center items-center bg-cover bg-center h-64 relative text-white"
              style={{ backgroundImage: `url(${project6Image})` }}
            >
              <div className="overlay bg-gray-800 opacity-70 absolute inset-0"></div>
              <div className="text text-center p-4 w-full absolute z-10">
                <h3 className="text-2xl font-semibold mb-2 hover:underline">
                  <a href="https://github.com/Saaisathish/ML-Agriculture" className="text-white hover:underline">
                    Evaluating ML Algorithms using Gridsearch CV and Tkinter ML app deployment
                  </a>
                </h3>
                <span className="text-sm">Machine learning</span>
              </div>
            </div>
          </div>
          <div className="col-md-8 mb-4">
            <div
              className="project img ftco-animate flex justify-center items-center bg-cover bg-center h-64 relative text-white"
              style={{ backgroundImage: `url(${project3Image})` }}
            >
              <div className="overlay bg-gray-800 opacity-70 absolute inset-0"></div>
              <div className="text text-center p-4 w-full absolute z-10">
                <h3 className="text-2xl font-semibold mb-2 hover:underline">
                  <a href="https://github.com/Saaisathish/Web-portfolio" className="text-white hover:underline">
                    Website design and hosting
                  </a>
                </h3>
                <span className="text-sm">Web Design</span>
              </div>
            </div>
          </div>
          {/* Add more project divs as needed */}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
