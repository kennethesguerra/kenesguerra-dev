'use client';

import { useState } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { GitHub, LinkedIn, Email, Instagram } from "@mui/icons-material";

import SideNav from "./sidenav";

import '../styles/navbar.css';

export default function NavBar() {
  interface NavLink {
    path: string
  }

  const [openMenu, setOpenMenu] = useState(false);

  const navLinks: { [key: string]: NavLink } = {
    "About": {
      path: "#about"
    }, 
    "Experience": {
      path: "#experience"
    }, 
    "Projects": {
      path: "#projects"
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
      <Navbar fixed="top" className="bg-body-tertiary">
        <Container id="nav-container">
          { navBrand }
          <Nav className="me-auto">
            {
              Object.keys(navLinks).map((nav, i) => {
                return (
                  <Nav.Link href={ navLinks[nav]['path']} key={i}> { nav } </Nav.Link>
                )
              })
            }
            <Nav.Link href="Ken_Esguerra_Resume.pdf" target="_blank"> Resume </Nav.Link>
          </Nav>
        </Container>
        <SideNav navs={navLinks} navBrand={navBrand} contactNav={contactNav} />
      </Navbar>
    </>
  )
}
