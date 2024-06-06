import { Row, Col, Badge } from 'react-bootstrap';
import { GitHub } from "@mui/icons-material";
import Link from 'next/link';
import '../styles/projects.css'

export default function Projects() {
  
  interface Project {
    description: string, 
    technologyUsed: string[],
    githubLink: string 
  }

  const projectList: { [key: string]: Project } = {
    "kenesguerra-dev": {
      description: "Personal portfolio site which showcases about me, my experience and pet projects as a Software Engineer.", 
      technologyUsed: ['Next.js', 'React Bootstrap'],
      githubLink: 'https://github.com/kennethesguerra/kenesguerra-dev'
    },
    "Flames": {
      description: "A relationship calculator based on user's name and their crush's name. It checks the similar letters on each person's name, count the total and check where the count points out to which letter from 'FLAMES' word after counting recursively. FLAMES means Frieds, Lovers, Marriage, Enemy and Soulmates.",
      technologyUsed: ['Vue', 'GitHub Pages'],
      githubLink: 'https://github.com/kennethesguerra/flames'
    },
    "Covid-19-Stat": {
      description: "A visualization of Covid 19 cases across the globe during the Pandemic. Data is coming from John Hopkins University CSSE. It was no longer maintained anymore that's why it's just loading.",
      technologyUsed: ['React', 'GitHub Pages'],
      githubLink: 'https://github.com/kennethesguerra/covid-19-stat'
    }
  }

  return (
    <div id="projects">
      <div className="section-header">
        <div className="section-title">// Pet Projects</div>
        <small className="project-intro-msg">
          <em>I have some upcoming projects and will definitely update once deployed. </em>
        </small>
      </div>
      <Row className="mt-3">
        <Col>
          {
            Object.keys(projectList).map((project, i) => {
              return (
                <div className="project-container" key={i}>
                  <div className="project-title">{ project }</div>
                  <div className="project-desc">
                    { projectList[project]['description'] }
                  </div>
                  <Row className="mt-3">
                    <Col sm={8} md={8} lg={8} xl={8}>
                      <div className="project-tech-badges">
                        {
                          projectList[project]['technologyUsed'].map((tech, i) => {
                            return (
                              <Badge bg="secondary" key={i}>{ tech }</Badge>
                            )
                          })
                        }
                      </div>
                    </Col>
                    <Col>
                      <div className="project-github">
                        <Link href={ projectList[project]['githubLink'] } target="_blank">
                          <GitHub style={{ fontSize: 28 }}></GitHub>
                        </Link>
                      </div>
                    </Col>
                  </Row>
                </div>
              )
            })
          }
        </Col>
      </Row>
    </div>
  )
}