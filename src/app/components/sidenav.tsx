'use client';

import { Container } from 'react-bootstrap';
import { ReactElement, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Close, Menu } from '@mui/icons-material'; 
import '../styles/sidenav.css';

const SideNav = ({ navs, navBrand, contactNav } : {navs: any, navBrand: ReactElement, contactNav: ReactElement}) => {

  const [showMenu, setShowMenu] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    document.body.style.overflow = showMenu ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [showMenu]);

  const menu = (
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
              <a
                href={ navs[nav]['path'] }
                key={i}
                target={ navs[nav].external ? "_blank" : undefined }
                rel={ navs[nav].external ? "noopener noreferrer" : undefined }
                onClick={() => {
                  setShowMenu(false);
                }}
              > { nav } </a>
            )
          })
        }
      </div>
      <div className="side-nav-contacts">
        { contactNav }
      </div>
    </div>
  );

  return (
    <>
      <Container id="nav-container-mobile">
        { navBrand }
        <button id="menu-icon" type="button" aria-label="Open menu" onClick={() => {
          setShowMenu(true);
        }}>
          <Menu style={{ fontSize: 28 }}></Menu>
        </button>
      </Container>
      { mounted ? createPortal(menu, document.body) : null }
    </>
  )
}

export default SideNav