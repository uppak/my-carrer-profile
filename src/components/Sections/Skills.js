import '../Skills.css'

const skills = [
  {category: 'Frontend', skills:'HTML, CSS, Javascript'},
  {category: 'Backend', skills:'Pega, Java, Node.js'},
  {category: 'Database', skills:'SQL Server, DB2, Postgre SQL'},
  {category: 'Tools', skills:'Git, Postman, SOAP UI, Jenkins'},
];

const Skills = () => {
return (
    <div className="skills-table-container">
      <table className="skills-table">
        <thead>
          <tr>
            <th>Category</th>
            <th>Technologies / Tools</th>
          </tr>
        </thead>
        <tbody>
          {skills.map((row, index) => (
            <tr key={index}>
              <td>{row.category}</td>
              <td>{row.skills}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Skills;


