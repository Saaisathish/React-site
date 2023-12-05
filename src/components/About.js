import React from 'react';
import bg from '../images/selfie.jpg';
import '../components/about.css'; // Import the CSS file for styling
import img1 from '../images/srm.png'
import img2 from '../images/verzeo.png'
import img3 from '../images/Ford-Logo.png'
import img4 from '../images/slu.png'

const AboutSection = () => {
  return (
    <section className="bg-gray-100 py-20" id="about-section">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="md:order-last">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
            <ul className="text-lg mb-8">
              <li className="mb-3">
                <strong className="text-gray-800">Name:</strong> Saaisathish Sankarabhattar Ayyappan
              </li>
              <li className="mb-3">
                <strong className="text-gray-800">Date of birth:</strong> July 22, 2000
              </li>
              <li className="mb-3">
                <strong className="text-gray-800">Address:</strong> 529 Whittier St.Louis
              </li>
              <li className="mb-3">
                <strong className="text-gray-800">Zip code:</strong> 63108
              </li>
              <li className="mb-3">
                <strong className="text-gray-800">Email:</strong> sa.saaisathish@gmail.com
              </li>
              <li>
                <strong className="text-gray-800">Phone:</strong> +1(720)5374530
              </li>
            </ul>
            <div className="mb-8">
              <p className="text-lg text-gray-800">Over 2 years of experience in Software development</p>
            </div>
            <div>
              <a href="../images/Saai-mainCV.pdf"  download="Saai-mainCV.pdf" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full inline-block">
  Download CV
</a>
            </div>
          </div>

          <div className="md:pl-10">
            <div className="relative">
              <div className="h-96 rounded-md shadow-md overflow-hidden" style={{ width: '70%', height: '70%',marginRight: '1000%' }}>
                <img
                  src={bg}
                  alt="About Me"
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

{/* Timeline section */}
<div className="timeline-section container mx-auto mt-10 px-4">
        <h2 className="mb-4 text-center">Education and Professional Experience</h2>
        <div className="row">
          <div className="col-md-6 mb-4">
            <div className="timeline-box">
              <img src={img1} alt="SRM University" className="timeline-img" />
              <div className="timeline-details">
                <span className="date">June 2018 - May 2022</span>
                <h3>Bachelor of Technology in Computer Science</h3>
                <p>Graduated from SRM University with a 3.6 GPA in Computer Science.</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="timeline-box">
              <img src={img3} alt="Ford India" className="timeline-img" />
              <div className="timeline-details">
                <span className="date">July 2022 - July 2023</span>
                <h3>Software Engineer at Ford India</h3>
                <p>Worked on deploying Machine Learning models and migrating to GCP.</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="timeline-box">
              <img src={img4} alt="Saint Louis University" className="timeline-img" />
              <div className="timeline-details">
                <span className="date">Aug 2023 - Present</span>
                <h3>Masters in Computer Science at SLU</h3>
                <p>Pursuing a master's degree in Computer Science at SLU.</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="timeline-box">
              <img src={img2} alt="Ford India Trainee" className="timeline-img" />
              <div className="timeline-details">
                <span className="date">Jan 2022 - July 2022</span>
                <h3>Software Engineer Trainee at Ford India</h3>
                <p>Internship focused on AI/ML for model deployments using cloud services.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutSection;
