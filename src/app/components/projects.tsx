import { Row, Col, Badge } from 'react-bootstrap';
import { GitHub } from "@mui/icons-material";
import Link from 'next/link';
import Image from 'next/image';
import '../styles/projects.css'

export default function Projects() {
  
  interface Project {
    description: string, 
    technologyUsed: string[],
    githubLink: string | null,
    imagePath: string
  }

  const projectList: { [key: string]: Project } = {
    "Ayala Data Analytics": {
      description: "A platform for data repository and data sharing used by Data Scientists within Ayala Corporation and its subsidiaries. My role was to build the frontend.",
      technologyUsed: ['React.js', 'React Bootstrap', 'AWS S3'],
      githubLink: null,
      imagePath: '/ada.png'
    },
    "Time Tracking Tool": {
      description: "A Time Tracking Tool (T3) designed to monitor the hours worked on projects, produce reports, and ensure projects stay on schedule and within budget. My role was to build the frontend and helped on building the backend",
      technologyUsed: ['React.js', 'React Bootstrap', 'Digital Ocean', 'Laravel'],
      githubLink: null,
      imagePath: '/t3.png'
    },
    "kenesguerra.dev": {
      description: "Personal portfolio site which showcases about me, my experience and pet projects as a Software Engineer.", 
      technologyUsed: ['Next.js', 'React Bootstrap'],
      githubLink: 'https://github.com/kennethesguerra/kenesguerra-dev',
      imagePath: '/kenesguerra.dev.png'
    },
    "Flames": {
      description: "A relationship calculator based on user's name and their crush's name. It checks the similar letters on each person's name, count the total and check where the count points out to which letter from 'FLAMES' word after counting recursively. FLAMES means Frieds, Lovers, Marriage, Enemy and Soulmates.",
      technologyUsed: ['Vue', 'GitHub Pages'],
      githubLink: 'https://github.com/kennethesguerra/flames',
      imagePath: '/flames.png'
    }
  }

  return (
    <div id="projects">
      <div className="section-header">
        <div className="section-title">// Professional & Pet Projects</div>
      </div>
      <Row className="mt-3">
        <Col>
          {
            Object.keys(projectList).map((project, i) => {
              
              const gitHubLink = projectList[project]['githubLink'];

              return (
                <div className="project-container" key={i}>
                  <Row>
                    <Col xs={12} md={12} lg={9} xl={9}>
                      <Row className="project-title">
                        <Col>
                        { project }
                        </Col>
                      </Row>
                      <Row className="project-desc">
                        <Col xs={12} md={12} lg={9} xl={9}>
                        { projectList[project]['description'] }
                        </Col>
                      </Row>
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
                            <span className="project-github">
                              { gitHubLink && <Link href={ gitHubLink } target="_blank">
                                <GitHub style={{ fontSize: 28 }}></GitHub>
                              </Link> }
                            </span>
                          </div>
                        </Col>
                      </Row>
                    </Col>
                    <Col xs={12} md={12} lg={3} xl={3}>
                      <Image 
                        src={ projectList[project]['imagePath'] } 
                        style={{objectFit: "contain"}}
                        width={200} 
                        height={200} 
                        alt={project} />
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