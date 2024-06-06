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
          I have begun my career as Analyst Programmer in a gaming industry last 2013. Currently, 
          I am working as Software Engineer in <span className="asurion"><a href="">Asurion</a></span> under a large team 
          that develops and maintains the platform for the claim filing called Horizon - the bread and butter 
          of the company.
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
        <div className="about-img">
          <Image 
            src="/ken_photo.jpg"
            width={300} 
            height={300} 
            alt="Picture of Mark Kenneth Esguerra - Software Engineer" />
        </div>
      </div>
    </div>
  )
}
