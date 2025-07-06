import '../Header.css';
import profilePhoto from '../../assets/profile.jpg';

const Header = () => {
  return (
    <header className="app-header">
      <div className="header-content">
        <img src={profilePhoto} alt="Profile" className="header-photo" />
        <div>
          <h1>Kalyan Chakravarthy</h1>
          <p>Full Stack Developer | React | Node.js | Pega</p>
        </div>
      </div>
    </header>
  );
};

export default Header;