import React from 'react';

const ProfileTable = () => {
  return (
    <table className="profile-table">
      <tbody>
        <tr>
          <th>Experience</th>
          <td>6+ years in Software Development</td>
        </tr>
        <tr>
          <th>Skills</th>
          <td>React, Node.js, Pega, JavaScript, SQL, AWS</td>
        </tr>
        <tr>
          <th>Education</th>
          <td>Bachelors of Technology in Computer Sciencen</td>
        </tr>
        <tr>
          <th>Email</th>
          <td>chakravarthyu@gmail.com</td>
        </tr>
        <tr>
          <th>LinkedIn</th>
          <td><a href="https://www.linkedin.com/in/kalyan-uppalapati/" target="_blank" rel="noreferrer">View Profile</a></td>
        </tr>
      </tbody>
    </table>
  );
};

export default ProfileTable;
