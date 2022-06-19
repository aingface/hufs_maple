import React from 'react';
import styled from 'styled-components'
import NavBar from './NavBar'
import { useState,useEffect } from 'react';

interface Props{
  positionY:number;
  innerHeight:number;
}

const MainHeader = () => {
  const [position,setPosition]=useState(0);
  const [innerHeight, setInnerHeight]=useState(0);
  
  const onScroll=()=>{
    setPosition(window.scrollY);
    // console.log(window.scrollY);
  }

  useEffect(()=>{
    window.addEventListener("scroll",onScroll);
    setInnerHeight(window.innerHeight);
    // console.log(innerWidth)
    //메모리 누수 방지

    return ()=>{
      window.removeEventListener("scroll",onScroll);
    }
  },[])
  

  return (
    <>
      <HeaderWrapper 
        className='header-wrapper' 
        positionY={position} 
        innerHeight={innerHeight}
      >
        <NavBar/>
      </HeaderWrapper>      
    </>
  );
};

export default MainHeader;

const HeaderWrapper=styled.div<Props>`
  z-index: 999;
  position: fixed;
  display: flex;
  justify-content: center;
  width:100%;
  height: clamp(2rem,7vh,3rem);
  color: ${props=>props.positionY>props.innerHeight*3-30? '#000000' : '#FFFFFF' };
  background-color:${props=>props.positionY>props.innerHeight-30 && '#02020210' };
  font-family: NEXON_Lv2_Gothic_OTF_Light;
`
