import { Row, Col, Nav, Tab, Badge } from 'react-bootstrap';
import '../styles/experience.css';

export default function Experience() {

  interface JobExperience {
    duration: string,
    jobTitle: string,
    companyIntro: string,
    description: string[],
    technologyUsed: string[]
  }

  const jobExperienceList: { [key: string]: JobExperience} = {
    "Asurion": {
      duration: "August 2021 - Present",
      jobTitle: "Software Engineer",
      companyIntro: "Asurion is a leading provider of device insurance, warranty & support services for cell phones, consumer electronics & home appliances",
      description: [
        "Launch new clients and new features for existing clients across the US and Latin America to the claim-filing platform called Horizon. Some of our big clients are AT&T and Verizon.",
        "Actively helping on solving prod-related issues and processing stuck claims due to some error.",
        "Prior to working on Horizon Platform for US & LatAm clients, I started as Site Reliability Engineer for Horizon APAC. We mainly do application support and develop a portal called Datazap Portal to automate data change required to solve a production issue."
      ],
      technologyUsed: ['React', 'GraphQL', 'Node.js', 'AWS Lambda', 'Oracle']
    },
    "HCX Technology Partners Inc": {
      duration: "January 2020 - August 2021", 
      jobTitle: "Customer Applications Engineer",
      companyIntro: "HCX offers innovative solutions and services that enable organizations’ HR and other Core units to leverage on leading edge platforms, systems and tools to improve productivity, enhance user experience and reduce costs.",
      description: [
        "Lead the frontend development of two big projects such as ADA (Ayala Data Analytics) for Ayala Corporation and T3 (Time Tracking Tool) for HCX itself.",
        "Enhanced and maintained the ARC (Ayala Rewards Circle) API for their ARC Mobile Application that handles rewards for Zing, Globe and BPI."
      ],
      technologyUsed: ['React', 'Node.js', 'PHP', 'Laravel', 'Heroku', 'MySQL', 'PostgreSQL', 'Docker']
    },
    "Deltek": {
      duration: "January 2016 - January 2020", 
      jobTitle: "Software Engineer", 
      companyIntro: "Deltek is the leading global provider of software and solutions for projectbased businesses.",
      description: [
        "Developed and maintained the Deltek Talent Management (formerly HRSmart) product using PHP, MySQL, jQuery and Smarty. DTM is a solution that helps an organization to handle human resourcing from start to finish.",
        "Pioneered the development of CoreHR module of the DTM which manages employee information easily and efficiently. The module supports Effective Dating and Employee/Manager SelfService.",
        "Maintained the Legacy versions of DTM for all the clients that still uses it until its sunset last 2018."
      ],
      technologyUsed: ['PHP', 'MySQL', 'AWS Aurora', 'Smarty', 'jQuery']
    },
    "Philweb Corporation": {
      duration: "April 2013 - January 2016", 
      jobTitle: "Developer", 
      companyIntro: "PhilWeb is the leading gaming technology provider in the Philippines. They are listed on the Philippine Stock Exchange (PSE:WEB)",
      description: [
        "Built and maintained tools required to operate the casino such as its own POS System, Rewards Management, Membership, etc.",
        "Developed APIs for Genesis Terminal Machines with collaboration with R&D Team in order the machine to communicate with the POS System.",
        "Created a small framework to automate unit testing using Watir or Web Application Testing in Ruby."
      ],
      technologyUsed: ['PHP', 'Yii', 'MySQL', 'jQuery', 'Ruby']
    }
  }

  return (
    <div id="experience">
      <div className="section-header">
        <div className="section-title">// Experience</div>
      </div>
      <Tab.Container id="left-tabs-example" defaultActiveKey={"0"}>
        <Row>
          <Col sm={12} md={12} lg={4} xl={4}>
            <Nav variant="pills" className="flex-column" id="company-list">
              {
                Object.keys(jobExperienceList).map((key, i) => {
                  return (
                    <Nav.Item key={i}>
                      <Nav.Link eventKey={i}> { key } </Nav.Link>
                    </Nav.Item>
                  )
                })
              }
            </Nav>
          </Col>
          <Col sm={12} md={12} lg={8} xl={8}>
            <Tab.Content>
              {
                Object.keys(jobExperienceList).map((job, i) => {
                  return (
                    <Tab.Pane key={i} eventKey={i}>
                      <div className="job-experience-content">
                        <Row>
                          <Col>
                            <div className="job-experience-header">
                              { jobExperienceList[job]['jobTitle'] } |  
                              <span className="job-experience-company"> { job }</span>
                            </div>
                            <div className="job-experience-duration">
                              { jobExperienceList[job]['duration'] }
                            </div>
                          </Col>
                        </Row>
                        <Row className="mt-3">
                          <Col>
                            <small><em>{ jobExperienceList[job]['companyIntro'] }</em></small>
                          </Col>
                        </Row>
                        <Row className="mt-3">
                          <Col>
                            <ul className="job-experience-desc">
                            { 
                              jobExperienceList[job]['description'].map((desc, i) => {
                                return (
                                  <li key={i}>{ desc }</li>
                                )
                              })
                            }
                            </ul>
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            {
                              jobExperienceList[job]['technologyUsed'].map((tech, i) => {
                                return (
                                  <Badge bg="secondary" key={i}>{ tech }</Badge>
                                )
                              })
                            }
                          </Col>
                        </Row>
                      </div>
                    </Tab.Pane>
                  )
                })
              }
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  )
}