import React from 'react';
import Link from 'next/link'
import styled from 'styled-components'

const NavBar = () => {
  return (
    <nav>
      <MenuList className='menu-list'>
        <MenuItem className='menu-item'><Link href={'/about'}>소개</Link></MenuItem>
        <MenuItem><Link href={'/'}>소식</Link></MenuItem>
      </MenuList>
    </nav>
  );
};

export default NavBar;

const MenuList=styled.ul`
  display: flex;
  list-style:none;
  font-size: 1.2rem;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 100%;
  padding:0;
`
const MenuItem=styled.li`
  margin-right: 1rem;
  font-weight:bold;
`