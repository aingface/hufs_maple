import React from 'react';
import styled from 'styled-components'
import NavBar from './NavBar'

const Header = () => {
  return (
    <>
      <HeaderWrapper className='header-wrapper'>
        <NavBar/>
      </HeaderWrapper>      
    </>
  );
};

export default Header;

const HeaderWrapper=styled.div`
  z-index: 999;
  position: fixed;
  display: flex;
  justify-content: center;
  width:100%;
  height: 7vh;
  color: #FFFFFF;
  background-color: #02020210;
  font-size: 1vw;
`
