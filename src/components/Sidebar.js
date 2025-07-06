import React,{ useState } from 'react';
import './Sidebar.css';

const Sidebar = () =>{
  const[collapsed,setCollapsed] = useState(true); //make it default collapsed
  const scrollToSection = (id) =>{
    const el = document.getElementById(id);
    if(el)
      el.scrollIntoView({behavior: 'smooth'});
  };
// const Sidebar = () => {
//   return (
//     <nav className="sidebar">
//       <h2>My Profile</h2>
//       <ul>
//         <li><a href="#about">About Me</a></li>
//         <li><a href="#experience">Experience</a></li>
//         <li><a href="#education">Education</a></li>
//         <li><a href="#certifications">Certifications</a></li>
//         <li><a href="#contact">Contact</a></li>
//       </ul>
//     </nav>
//   );
// };

return (
  <div className = {`sidebar ${collapsed ? `collapsed`:``}`}>
    <div className = "top-bar">
      <button className="hamburger" onClick={()=>setCollapsed(!collapsed)}>
        ☰
      </button>
      {!collapsed && <h3 className="sidebar-title">My Profile</h3>}
  </div>
      {!collapsed && (
        <ul className="nav-items">
          <li onClick ={() => scrollToSection('about')}>About</li>
          <li onClick ={() => scrollToSection('experience')}>Experience</li>
          <li onClick ={() => scrollToSection('education')}>Education</li>
          <li onClick ={() => scrollToSection('certifications')}>Certifications</li>
          <li onClick ={() => scrollToSection('contact')}>Contact</li>
        </ul>
      )}
    </div>
  );
};

export default Sidebar;