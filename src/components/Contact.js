import React from 'react';
import contactImage from '../images/contact.jpg';

const ContactUs = () => {
  const divStyle = {
    backgroundImage: `url(${contactImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '500px',
  };

  return (
    
    <div className="mt-20"> {/* Apply a margin-top of 20 (or your preferred value) */}
       <div className="col-md-6 d-flex">
          <div className="w-full h-full bg-cover bg-center rounded-md shadow-md" style={divStyle}></div>
        </div>
      <div className="row no-gutters block-9">
        <div className="col-md-6 order-md-last d-flex">
          {/* Embed the Google Form */}
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSd-cHsayNShwk-woWBqdn6iypm7t7rmD5wgMSNeRmKQF-aKUQ/viewform?embedded=true"
            width="100%"
            height="1000"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            title="Contact Form"
          >
            Loading...
          </iframe>
        </div>
        
      </div>
    </div>
  );
};

export default ContactUs;