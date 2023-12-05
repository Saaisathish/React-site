import React, { useState } from 'react';
import '../../components/skillSection.css'

const SkillsSection = () => {
  const skillsData = [
    { skill: 'Docker', percentage: 90, color: 'bg-blue-500', description: 'Proficient in using Docker to containerize and deploy applications, enabling efficient and scalable software delivery.' },
    { skill: 'Python', percentage: 85, color: 'bg-green-500', description: 'Proficient in Python programming, utilizing it for web development, data processing, and automation, along with popular libraries like NumPy and Pandas for data manipulation and analysis.' },
    { skill: 'HTML5', percentage: 80, color: 'bg-yellow-500', description: 'Familiar with front-end web development using HTML to create responsive and visually appealing web pages.' },
    { skill: 'CSS3', percentage: 50, color: 'bg-red-500', description: 'Basic understanding of CSS for styling web pages.' },
    { skill: 'Machine learning', percentage: 70, color: 'bg-purple-500', description: 'Skilled in developing and implementing machine learning models for data analysis and predictive analytics, with knowledge of popular libraries like TensorFlow and scikit-learn.' },
    { skill: 'Kubernetes', percentage: 60, color: 'bg-indigo-500', description: 'Experienced in managing containerized applications using Kubernetes, ensuring high availability and fault tolerance in distributed systems.' },
  ];

  const certifications = [
    {
      imageUrl: require('../../images/gcp.png'),
      linkUrl: 'https://www.coursera.org/account/accomplishments/certificate/8ENZM4QQ6TJP',
    },
    {
      imageUrl: require('../../images/intel.png'),
      linkUrl: 'https://www.coursera.org/account/accomplishments/certificate/3U3ME5MTJZUXl',
    },
    {
      imageUrl: require('../../images/open.png'),
      linkUrl: 'https://www.coursera.org/account/accomplishments/verify/WEFQBKFZCKAJ',
    },
    {
      imageUrl: require('../../images/nvidia.png'),
      linkUrl: 'https://www.coursera.org/account/accomplishments/verify/WEFQBKFZCKAJ',
    },
    // Add more certification objects as needed
  ];

  const [currentCertIndex, setCurrentCertIndex] = useState(0);

  const goToPreviousCert = () => {
    const newIndex = (currentCertIndex - 1 + certifications.length) % certifications.length;
    setCurrentCertIndex(newIndex);
  };

  const goToNextCert = () => {
    const newIndex = (currentCertIndex + 1) % certifications.length;
    setCurrentCertIndex(newIndex);
  };

  const renderProgressBar = (skill) => {
    return (
      <div key={skill.skill} className="w-full mb-4 skill-bar">
        <div className="flex items-center justify-between mb-1">
          <p className="font-semibold">{skill.skill}</p>
          <p className="text-xs font-semibold text-gray-600">{skill.percentage}%</p>
        </div>
        <div className="relative h-8 bg-gray-300 rounded-md">
          <div
            className={`absolute top-0 left-0 h-full ${skill.color}`}
            style={{ width: `${skill.percentage}%` }}
          ></div>
          <p className="absolute top-0 left-0 h-full flex items-center pl-2 text-xs font-semibold text-white">
            {skill.percentage}%
          </p>
        </div>
      </div>
    );
  };
  return (
    <div className="content">
      {/* Main content */}
      <section className="ftco-section bg-gray-100 py-5" id="skills-section">
        <div className="container">
          <div className="row justify-content-center pb-4">
            <div className="col-md-12 heading-section text-center">
              <h1 className="mb-4 text-2xl font-bold">My Skills and Certifications</h1>
            </div>
          </div>

          {/* My Skills Section */}
          <div className="mb-8">
            <div className="row justify-content-center pb-3">
              <div className="col-md-12 heading-section text-center">
                <h2 className="mb-2 text-lg font-semibold">My Skills</h2>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {skillsData.map((skill) => renderProgressBar(skill))}
            </div>
          </div>

          {/* Certification Section */}
          <div className="relative h-64 bg-gray-200 flex justify-center items-center mb-8">
            <img
              src={certifications[currentCertIndex].imageUrl}
              alt={`Certification ${currentCertIndex + 1}`}
              className="w-auto h-auto max-h-full max-w-full object-cover rounded-md cursor-pointer"
              onClick={() => window.open(certifications[currentCertIndex].linkUrl, '_blank')}
            />
            <button
              className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2"
              onClick={goToPreviousCert}
            >
              &lt;
            </button>
            <button
              className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2"
              onClick={goToNextCert}
            >
              &gt;
            </button>
          </div>

          {/* Certification Heading */}
          <div className="row justify-content-center">
            <div className="col-md-12 heading-section text-center">
              <h2 className="mb-2 text-lg font-semibold">Certifications</h2>
            </div>
          </div>
        </div>
      </section>

      {/* Additional styling */}
      <style jsx>{`
        .content {
          margin-top: 60px; /* Adjust the margin based on your navbar height */
        }
        /* Additional styles can be added here */
      `}</style>
    </div>
  );
};

export default SkillsSection;
