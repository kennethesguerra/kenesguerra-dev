'use client';

import { Container, Navbar, Nav } from "react-bootstrap";
import { GitHub, LinkedIn, Email, Instagram } from "@mui/icons-material";

import SideNav from "./sidenav";

import '../styles/navbar.css';

export default function NavBar() {
  interface NavLink {
    path: string
    external?: boolean
  }

  const navLinks: { [key: string]: NavLink } = {
    "About": {
      path: "#about"
    }, 
    "Experience": {
      path: "#experience"
    }, 
    "Projects": {
      path: "#projects"
    },
    "Resume": {
      path: "http://docs.google.com/document/d/1OPwQM0j3OV-DP_muPd6PBxTRdHboVkJE/edit",
      external: true
    }
  }

  const navBrand = <Navbar.Brand> <Nav.Link href="#intro">Ken Esguerra</Nav.Link> </Navbar.Brand>
  const contactNav = <>
      <Nav.Link href="mailto:esguerrakenneth@gmail.com">
        <Email style={{ fontSize: 28 }}></Email>
      </Nav.Link>
      <Nav.Link href="https://github.com/kennethesguerra" target="_blank">
        <GitHub style={{ fontSize: 28 }}></GitHub>
      </Nav.Link>
      <Nav.Link href="https://www.linkedin.com/in/mkgesguerra/" target="_blank">
        <LinkedIn style={{ fontSize: 28 }}></LinkedIn>
      </Nav.Link>
      <Nav.Link href="https://www.instagram.com/kengotoxy" target="_blank">
        <Instagram style={{ fontSize: 28 }}></Instagram>
      </Nav.Link>
    </>
  return (
    <>
      <Navbar fixed="top" expand="lg" className="site-navbar">
        <Container id="nav-container">
          { navBrand }
          <Nav className="ms-auto align-items-center">
            {
              Object.keys(navLinks).map((nav, i) => {
                return (
                  <Nav.Link
                    href={ navLinks[nav]['path']}
                    key={i}
                    target={ navLinks[nav].external ? "_blank" : undefined }
                    rel={ navLinks[nav].external ? "noopener noreferrer" : undefined }
                  > { nav } </Nav.Link>
                )
              })
            }
            <span className="nav-divider" aria-hidden="true">|</span>
            <div className="nav-contacts">{ contactNav }</div>
          </Nav>
        </Container>
        <SideNav navs={navLinks} navBrand={navBrand} contactNav={contactNav} />
      </Navbar>
    </>
  )
}
