import React from 'react';
import Head from 'next/head';
import Layout from 'components/Layout';
import styled from 'styled-components';
import union from '/public/images/union.png';
import ammonite from '/public/images/ammonite.png'
import level from '/public/images/level.png'
import Image from 'next/image';
import { useState,useEffect } from 'react';


interface Props{
  positionY:number;
  innerWidth:number;
}

const about = () => {
  const [position,setPosition]=useState(0);
  const [innerWidth, setInnerWidth]=useState(0);
  const onScroll=()=>{
    setPosition(window.scrollY);
    // console.log(window.scrollY);
  }
  useEffect(()=>{
    window.addEventListener("scroll",onScroll);
    setInnerWidth(window.innerWidth);
    // console.log(innerWidth)
    //메모리 누수 방지
    return ()=>{
      window.removeEventListener("scroll",onScroll);
    }
  },[])
  const [count,setCount]=useState(0);

  let counting=setInterval(()=>{
    if (count > 5884){
      clearInterval(counting);
      return false;
    } 
    setCount(count+10) 
  },500)

  return (
    <>
      <Head>
        <title>한국외대 메이플스토리 동아리 소개</title>
        <meta name="description" content="Hufs Maplestory club" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <ContentsWrapper>
          <StatusWrapper positionY={position} innerWidth={innerWidth}>
            <Image
              src={union}
              alt='background:union.png'
              width="100%"
              height="100%"
              objectFit='cover'
              priority= {true} 
            />  
            {/* <p>{count}</p> */}
          </StatusWrapper>
        </ContentsWrapper>
      </Layout>  
    </>
  );
};

export default about;

const StatusWrapper=styled.div<Props>`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1vh 3vh;
  margin: 3vh 0;
  width: ${props=>props.innerWidth > 800 ? '40vw' : '80vw'};
  p{
    font-family: NEXON_Lv2_Gothic_OTF;
    font-size: ${props=>props.innerWidth > 800 ? '4vw' : '8vw'};;
  }
  
  background-color: #94949452;
  /* border: 1px solid red; */

`


const ContentsWrapper=styled.div`
  z-index: -1;
  position: relative;
  height: 200vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 10vh;
  /* justify-content: center; */
  /* background-color: green; */
`
