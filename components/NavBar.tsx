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
          <a className='logo-title'>
            <Image
              src={aing_boo}
              alt={`background:aing_boo.png`}
              width= '56vw'
              height='40vh'
              objectFit='cover'
            />
            <p>외메동</p>
          </a> 
        </Link>
      </LogoItem>
      <MenuList>
        <MenuItem className='menu-item'><Link href={'/info'}>정보</Link></MenuItem>
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
  justify-content: flex-end;
  margin-right: 15vw;
  /* position: absolute; */
`
const MenuItem=styled.div`
  margin-right:2vw;
  font-family: NEXON_Lv2_Gothic_OTF;
  display: flex;
  justify-content: center;
  cursor: pointer;
`
const LogoItem=styled.div`
  font-family: NEXON_Lv2_Gothic_OTF;
  cursor: pointer;
  width: 20vw;
  height: 100%;
  left: 1vw;
  .logo-title{
    display: flex;
    flex-direction: row;  
    font-size: 2vw;
    justify-content: center;
    align-items: center;
    padding: 20px 0;
    height: 100%;
    font-family: Maplestory_OTF_Light;
    p{margin-left:1vw}
  }
`