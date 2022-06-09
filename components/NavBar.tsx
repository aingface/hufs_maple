import React from 'react';
import Link from 'next/link'
import styled from 'styled-components'
import aing_boo from '/public/images/aing_boo.png'
import Image from 'next/image';
const NavBar = () => {
  return (
    <Nav>     
      <LogoItem>
        <Link href={'/'}>  
          <Image
            src={aing_boo}
            alt={`background:aing_boo.png`}
            width= '70%'
            height='70%'
            objectFit='cover'
          />  
        </Link>
      </LogoItem>
      <MenuList>
        <MenuItem className='menu-item'><Link href={'/about'}>정보</Link></MenuItem>
        <MenuItem><Link href={'/'}>소식</Link></MenuItem>
      </MenuList>
    </Nav>
  );
};

export default NavBar;

const Nav=styled.nav`
  display: flex;
  align-items: center;
  width: 100vw;
  justify-content: center;
  position: relative;
`

const MenuList=styled.ul`
  display: flex;
  list-style:none;
  width: 100%;
  /* background-color: red; */
  align-items: center;
  justify-content: center;
  position: absolute;
`
const MenuItem=styled.div`
  margin-right:2vw;
  font-family: NEXON_Lv2_Gothic_OTF;
  font-size: 3vh;
  display: flex;
  justify-content: center;
  cursor: pointer;

`
const LogoItem=styled.div`
  font-family: NEXON_Lv2_Gothic_OTF;
  display: flex;
  cursor: pointer;
  position: absolute;
  left: 3vw;
`