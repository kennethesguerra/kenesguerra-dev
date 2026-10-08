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
        "Developed and launched 15+ major production features for the Agent channel claim-filing application so far, including Product Redesigns, new feature development, translations, and client launches for telecommunications clients across the US and Latin America, supporting approximately ~550K claim calls per month.",
        "Translated 3,000+ labels and say scripts in Agent Channel to Spanish, improving the agent experience for Latin American users.",
        "Resolving 4–6 production incidents per month, restoring claim-processing workflows and minimizing downtime for customer-facing systems.",
        "Developed an internal support portal for the APAC region that automated operational data changes, reducing manual intervention and accelerating production issue resolution for support teams."
      ],
      technologyUsed: ['React', 'GraphQL', 'Node.js', 'Cursor', 'AI', 'AWS Lambda', 'Oracle']
    },
    "HCX Technology Partners Inc": {
      duration: "January 2020 - August 2021", 
      jobTitle: "Customer Applications Engineer",
      companyIntro: "HCX offers innovative solutions and services that enable organizations’ HR and other Core units to leverage on leading edge platforms, systems and tools to improve productivity, enhance user experience and reduce costs.",
      description: [
        "Contributed to ₱6.9M in revenue by delivering work across a diverse set of revenue-generating and core business projects.",
        "Led frontend development for Ayala Data Analytics (ADA) and Time Tracking Tool (T3), translating business requirements into reliable, user-focused React applications.",
        "Enhanced and maintained the ARC (Ayala Rewards Circle) API (Node.js, PHP, Laravel) supporting Zing, Globe, and BPI rewards experiences"
      ],
      technologyUsed: ['React', 'Node.js', 'PHP', 'Laravel', 'Heroku', 'MySQL', 'PostgreSQL', 'Docker']
    },
    "Deltek": {
      duration: "January 2016 - January 2020", 
      jobTitle: "Software Engineer", 
      companyIntro: "Deltek is the leading global provider of software and solutions for projectbased businesses.",
      description: [
        "Developed and maintained the Deltek Talent Management (DTM) system, supporting organizations in streamlining talent management processes for employees and HR teams.",
        "Contributed to the CoreHR module used by 100+ clients, including Effective Dating that automated employee status changes based on predefined dates and reduced manual HR updates.",
        "Maintained legacy platform versions through the 2018 sunset, ensuring stability for clients transitioning to newer releases."
      ],
      technologyUsed: ['PHP', 'MySQL', 'AWS Aurora', 'Smarty', 'jQuery']
    },
    "Philweb Corporation": {
      duration: "April 2013 - January 2016", 
      jobTitle: "Developer", 
      companyIntro: "PhilWeb is the leading gaming technology provider in the Philippines. They are listed on the Philippine Stock Exchange (PSE:WEB)",
      description: [
        "Built and maintained POS systems supporting operations across 150+ eGames cafes serving 40,000 customers a day.",
        "Built and maintained Rewards Management and Membership platforms that delivered personalized loyalty and membership experiences.",
        "Developed a lightweight framework to automate unit testing utilizing Watir or Web Application Testing in Ruby."
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