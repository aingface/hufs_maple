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
        <MenuItem className='menu-item'>
            <Link href={'/info'}>
              정보
            </Link>
          </MenuItem>
        <DropdownContainer>
          <input id='dropdown' type="checkbox" />
          <label className='dropdownLabel' htmlFor='dropdown'>
            <div>소식</div>
          </label>
          
          <div className='dropdown-list'>
            <ul>
              <li className='dropdown-list-item'>
                  <Link href={'https://www.instagram.com/hufs_maple/'}>
                    instagram
                  </Link>
              </li>  
            </ul>    
          </div>
        </DropdownContainer>
      </MenuList>
    </NavWrapper>
  );
};

export default NavBar;

//메뉴 상단에 소식을 누르면 드롭다운 메뉴가 나옴
const DropdownContainer=styled.div`
  width: clamp(4rem,12vw,6rem);
  font-size: clamp(0.7rem,2vw,1.1rem);
  margin: 0 clamp(0.1rem,1vw,1.1rem);
  position: relative;
  

  .dropdown-list-item{
    display:flex;
    justify-content:center;
  }
  /* +는 바로 옆 요소 */
  #dropdown:checked + label + div {
    display: block;
    border-top: 1px solid #00000026;

    
    @keyframes dropdown {
      0%{
        opacity: 0;
        transformY(50%);
      }
      100%{
        transformY(100%);
      }
    }
    animation : dropdown 0.4s linear;
  }
  .dropdown-list {
    display: none;
    position: absolute;
    width: 100%;
    left: 0;
    background: white;
    box-shadow: 0 4px 5px 0 #00000026;
    background-color: transparent;
  }
  .dropdownLabel {
    display: flex;
    justify-content: center;
  }
  #dropdown{
    position:absolute;
    visibility:hidden;
  }

  :hover{
    background-color: #a7a7a84D;
    box-shadow: 0 4px 5px 0 #00000026;
    border-radius:3px;
  }
`

//상단 네비게이션 바 메뉴 개별 항목 == 정보 
const MenuItem=styled.div`
  display: flex;
  justify-content: center;
  align-items:center;
  cursor: pointer;
  width: clamp(4rem,12vw,6rem);
  font-size: clamp(0.7rem,2vw,1.1rem);
  margin: 0 clamp(0.1rem,1vw,1.1rem);
  
  :hover{
    background-color: #a7a7a84D;
    border-radius:3px;
    box-shadow: 0 4px 5px 0 #00000026;
  }
`

//상단 네비게이션 바 메뉴 전체
const MenuList=styled.ul`
  display: flex;
  list-style:none;
  padding: 0 clamp(2rem,3vh,3rem);
  width: 100%;
  align-items: center;
  justify-content: flex-end;
  
  /* background-color: #187e15; */
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
    }
  }
  /* background-color: #569d23; */
`
//상단 네비게이션 바 최상위
const NavWrapper=styled.nav`
  display: flex;
  width: 100vw;
  justify-content: center;
  position: relative;
  font-family: NEXON_Lv2_Gothic_OTF_Light;

`