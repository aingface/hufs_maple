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

const projectNameStyle={
  margin:'1.5rem auto 0 auto',
  color:'#464ea3'
}

const HeaderWrapper=styled.div`
  z-index: 999;
  position: fixed;
  display: flex;
  justify-content: center;
  width:100%;
  height: 10vh;
  background-color: #ffffff;
`
