import '../styles/about.css';
import profileimg from '../assets/profileImg/main-img-copy.jpg'

export default function About() {
  return (
    <main className="intro">
      <div className="description">
        <p>
          <span className="highlight">Hi, I&apos;m Adamya Gupta</span>
          <br />
          <br />
          I am a B.Tech Computer Science student at PSIT with a strong interest in software
          engineering, modern web development, and problem solving. I enjoy building clean,
          responsive, and user-focused applications while continuously improving my technical
          skills and exploring modern technologies.
          <br />
          <br />
          My journey in technology started with curiosity about how websites and software work,
          which gradually developed into a passion for creating meaningful digital experiences
          and real-world projects.
          <br />
          Along with web development, I am also interested in Generative AI and intelligent
          systems, especially how AI can be integrated into applications to make them smarter,
          more efficient, and user-friendly.
          <br />
          <br />
          I enjoy learning by building projects, experimenting with new ideas, and improving my
          understanding of scalable systems, software engineering principles, and modern
          development practices.
          <br />
          <br />
          Currently, I am focused on strengthening my development skills, expanding my knowledge
          in full-stack technologies and Generative AI, and growing step by step toward becoming
          a skilled software engineer.
        </p>
      </div>
      <div className="img-container">
        <img src={profileimg} alt="Adamya Gupta" className="me-img" />
      </div>
    </main>
  );
}
