'use client';

import { Container } from 'react-bootstrap';
import { ReactElement, useState } from 'react';
import { Close, Menu } from '@mui/icons-material'; 
import '../styles/sidenav.css';

const SideNav = ({ navs, navBrand, contactNav } : {navs: any, navBrand: ReactElement, contactNav: ReactElement}) => {

  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <Container id="nav-container-mobile">
        <div id="menu-icon">
          <Menu style={{ fontSize: 28 }} onClick={() => {
            setShowMenu(true);
          }}></Menu>
        </div>
        { navBrand }
      </Container>
      <div className={"side-menu-container" + (showMenu ? " show-menu" : "")}>
        <div className="close-btn">
          <Close style={{ fontSize: 40 }} onClick={() => {
            setShowMenu(false);
          }}></Close>
        </div>
        <div className="side-menu">
          {
            Object.keys(navs).map((nav, i) => {
              return (
                <a href={ navs[nav]['path'] } key={i}> { nav } </a>
              )
            })
          }
        </div>
        <div className="side-nav-contacts">
          { contactNav }
        </div>
      </div>
      
    </>
   
  )
}

export default SideNav