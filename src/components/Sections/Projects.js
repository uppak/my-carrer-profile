const Projects = () => {
  return (
    <table className="project-table">
      <tbody>
        <tr>
          <th>Probation Case Management System</th>
          <td>
            <div class="projects-desc">
            <div><b>Description: </b>The application helps in handling inmates’ probation/parole. My role specifically involves in developing Payment process for fines that clients have to pay. The payments will be allocated to different departments using backing mainframe job. The payments can also be reversed and reentered. As an architect, which handles payments/reversals/reentries. Apart from this worked on prod support issues and production bugs that gets reported sporadically.</div>
            <div><b>Designation: </b> Senior Architect </div>
            <div><b>Skills/Technologies: </b> Pega, Java, SOAP UI </div>
            <div><b>Role(s): </b> Architecture, Problem Solving, Production </div>
            </div>
          </td>
        </tr>
        <tr>
          <th>Data Orchestration</th>
          <td>
           <div class="projects-desc">
            <div><b>Description: </b>A Project goal is to develop a system which will read data from different systems through various sources and perform some calculations on the incoming data. Once we have all the data, it is showcased in Pega UI in different dashboards.
Role: Lead System Architect</div>
            <div><b>Designation: </b> Senior Specalist - Implementation </div>
            <div><b>Skills/Technologies: </b> Pega, Java, Javascript, Postman </div>
            <div><b>Role(s): </b> Architecture, UI Design, Problem Solving, Production </div>
            </div>
           </td> 
        </tr>
        <tr>
          <th>My Profile Builder</th>
          <td>  
           <div class="projects-desc">
            <div><b>Description: </b> A Self development project which I implemented to learn react. It was done in process of learning react. A simple UI profile with SPA that represents my total experience, skillsets, Projects etc..,</div>
            <div><b>Designation: </b> Front End UI Developer </div>
            <div><b>Skills/Technologies: </b> React, CSS, Node.js, Git </div>
            <div><b>Role(s): </b> Development, UI Design </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Projects;
