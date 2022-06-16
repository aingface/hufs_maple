import React from 'react';
import Link from 'next/link'
import styled from 'styled-components'
import aing_boo from '/public/images/aing_boo.png'
import Image from 'next/image';
const NavBar = () => {
  return (
    <NavWrapper>     
      <LogoItem>
        <Link href={'/'}>  
          <a className='logo-title'>
            <p>외메동</p>
            <Image
              src={aing_boo}
              alt={`background:aing_boo.png`}
              width= '40%'
              height='25%'
              objectFit='cover'
            />
          </a> 
        </Link>
      </LogoItem>
      <MenuList>
        <MenuItem className='menu-item'><Link href={'/info'}>정보</Link></MenuItem>
        <MenuItem><Link href={'/'}>소식</Link></MenuItem>
      </MenuList>
    </NavWrapper>
  );
};

export default NavBar;

//상단 네비게이션 바 최상위
const NavWrapper=styled.nav`
  display: flex;
  width: 100vw;
  justify-content: center;
  position: relative;
`

//상단 네비게이션 바 전체
const MenuList=styled.ul`
  display: flex;
  list-style:none;
  padding: 0 clamp(2rem,3vh,3rem);
  width: 100%;
  align-items: center;
  justify-content: flex-end;
  
  /* background-color: #187e15; */
`
//상단 네비게이션 바 항목
const MenuItem=styled.div`
  display: flex;
  justify-content: center;
  cursor: pointer;
  width: 2rem;
  font-size: clamp(0.7rem,2vw,1.1rem);
  margin: 0 clamp(0.1rem,1vw,1.1rem);

  /* background-color: yellowgreen; */
`

//홈페이지로 텍스트+로고 이미지
const LogoItem=styled.div`
  cursor: pointer;
  width: 100%;
  height: 100%;
  font-size: clamp(0.7rem,5vw,1.5rem);
  .logo-title{
    display: flex;
    flex-direction: row;  
    justify-content: flex-start;
    align-items: center;
    margin: 0 clamp(2rem,2vh,1.1rem);
    height: 100%;
    font-family: Maplestory_OTF_Light;
    p{
      margin-right: clamp(0.1rem,0.1vw,0.2rem);
      width: clamp(3rem,50vw,4rem);
      /* background-color: blue; */
    }
  }
  /* background-color: #569d23; */
`