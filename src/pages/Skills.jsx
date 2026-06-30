
import { skillInfo } from '../data/skills';
import '../styles/skills.css';

export default function Skills() {
  return <div className='skill-container'>
    {/**header section */}
    <div className='header'>
      <h2>Skills</h2>
      <p>A collection of technical skills and expertise honed through projects</p>
    </div>

    {/**skill section */}
    <div className="skillSec">
      {skillInfo.map((category) => {
        return (
          <div key={category.title} className='category-container'>
            <h4 className='title'>{category.title}</h4>
            <div className='skillBox'>
              {category.skills.map((skill) => {
                return (
                  <div key={skill.name} className='skills'>
                  <img src={skill.logo} alt={skill.name} />
                  <span>{skill.name}</span>
                </div>
                )
              })}
            </div>
          </div>
        )
      })}
    </div>
  </div>;
}
