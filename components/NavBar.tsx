import React from 'react';
import Link from 'next/link'
import styled from 'styled-components'

const NavBar = () => {
  return (
    <Nav>     
      <MenuList className='menu-list'>
        <MenuItem className='menu-item'><Link href={'/about'}>소개</Link></MenuItem>
        <MenuItem><Link href={'/'}>소식</Link></MenuItem>
      </MenuList>
    </Nav>
  );
};

export default NavBar;

const Nav=styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
`

const MenuList=styled.ul`
  display: flex;
  list-style:none;
  cursor: pointer;
  width: 100%;

`
const MenuItem=styled.li`
  margin:0 1.5rem;
  font-family: NEXON_Lv2_Gothic_OTF;
  font-weight: bold;
  font-size: 1.5rem;
`