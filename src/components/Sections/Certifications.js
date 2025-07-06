import React from 'react';
import cert1 from '../../assets/cert1.png';
import cert2 from '../../assets/cert2.png';

const Certifications = () => {
  return (
    <div className="certifications">
      <div className="cert-images">
        <img src={cert1} alt="Certification 1" />
        <img src={cert2} alt="Certification 2" />
      </div>
    </div>
  );
};

export default Certifications;
