/* eslint-disable no-unused-vars */

import React, { useState } from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  return (
    <Navbar scrolled={scrolled}>
      <NavMenu>
        <Link href="/">
          <NavItem>Home</NavItem>
        </Link>
        <Link href="#about">
          <NavItem>About</NavItem>
        </Link>
        <Link href="#gallery">
          <NavItem>Gallery</NavItem>
        </Link>
      </NavMenu>
    </Navbar>
  );
};

export default Header;

const Navbar = styled.header`
  position: absolute;
  width: 100%;
  z-index: 1;
`;

const NavMenu = styled.nav`
  display: flex;
  justify-content: center;
  width: auto;

  padding: 0.5rem;
`;

const NavItem = styled.span`
  color: white;
  text-transform: uppercase;
  cursor: pointer;
  letter-spacing: 0.125rem;
  margin: 0.5rem 1rem;
  transition: border-color 0.5s ease-in-out;
  border-bottom: 1px solid transparent;

  &:hover {
    border-bottom: 1px solid #fff;
  }
`;
