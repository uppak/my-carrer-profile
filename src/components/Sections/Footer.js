import React from 'react';
import '../Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <h4>Kalyan Chakravarthy</h4>
        <p>© {new Date().getFullYear()} All rights reserved.</p>
      </div>
      <div className="footer-center">
        <a href="mailto:kalyan@email.com">📧 kalyan@email.com</a>
        <a href="tel:+11234567890">📞 +1 (123) 456-7890</a>
      </div>
      <div className="footer-right">
        <a href="https://www.linkedin.com/in/kalyan-uppalapati/" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="https://github.com/uppak" target="_blank" rel="noreferrer">GitHub</a>
        <a href="/resume.pdf" download>📄 Download Resume</a>
      </div>
    </footer>
  );
};

export default Footer;