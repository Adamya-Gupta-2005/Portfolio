import { educationEntries } from '../data/education';
import '../styles/education.css';

export default function Education() {
  return (
    <main className="Edu">

      <div className='header'>
        <h2>Education</h2>
        <p>My education has been a journey of learning and development. Here are the details of my academic background</p>
      </div>

      {educationEntries.map((entry) => (
        <section key={entry.heading} className="sec">
          <span className="heading">{entry.heading}</span>
          <span className="inst-name">{entry.institution}</span>
          {entry.className && <span className="class">{entry.className}</span>}
          <span className="year">{entry.year}</span>
          <span className="marks">{entry.marks}</span>
        </section>
      ))}
    </main>
  );
}
