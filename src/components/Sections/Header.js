import React from 'react';
import profileImg from '../../assets/profile.jpg';

const Header = () => {
  return (
    <div className="header">
      <img src={profileImg} alt="Profile" className="profile-photo" />
      <h1>Kalyan Chakravarthy</h1>
      <p>Full Stack Developer | React | Node | Pega | Cloud</p>
    </div>
  );
};

export default Header;