import Image from 'next/image';
import '../styles/about.css';

export default function About() {
  const techStack = [
    'TypeScript/JavaScript', 
    'React',
    'Node.js',
    'PHP', 
    'MySQL'
  ]
  return (
    <div id="about">
      <div className="section-header">
        <div className="section-title">// About Me</div>
      </div>
      <div className="about-content">
        <div className="about-desc">
          In 2013, I started my career as Analyst Programmer in a gaming industry. And on this day, 
          I'm a full-time Software Engineer working for <span className="asurion"><a href="">Asurion</a></span> with a globe wide team of
          developers whom maintains the platform for the claim filing also known as "Horizon" - the bread and butter 
          of the company.
          <p className="mt-3">
            I have been working with the following tech skills: 
          </p>
          <ul className="tech_stack">
            {
              techStack.map(tech => {
                return (
                  <li>{ tech }</li>
                )
              })
            }
          </ul>
          Outside of professional stuff, I enjoy learning new technologies for web application development 
          and building my ideas from it. There are weekends that you will find me trekking on some mountains 
          in the Philippines.
        </div>
        <div className="about-img-container">
          <div className="about-img">
            <Image 
              src="/ken_photo.jpg"
              width={300} 
              height={300} 
              alt="Picture of Mark Kenneth Esguerra - Software Engineer" />
          </div>
        </div>
      </div>
    </div>
  )
}
