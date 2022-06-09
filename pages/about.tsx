import React from 'react';
import Head from 'next/head';
import Layout from 'components/Layout';
import styled from 'styled-components';
import union from '/public/images/union.png';
import ammonite from '/public/images/ammonite.png'
import level from '/public/images/level.png'
import Image from 'next/image';
import {useState,useEffect } from 'react';
import useScrollCount from 'util/hooks/useScrollCount'

interface Props{
  positionY:number;
  innerWidth:number;
}

const FIGURE_ITEMS=[
  {
    title:'레벨',
    src:level,
    number:252,
  },
  {
    title:'유니온',
    src:union,
    number:5884,
  },
  {
    title:'학번',
    src:ammonite,
    number:18,
  },
]

const about = () => {
  const [position,setPosition]=useState(0);
  const [innerWidth, setInnerWidth]=useState(0);

  const animatedItem=useScrollCount(5884);

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

  const FigureItemList=FIGURE_ITEMS.map((item)=>(
    <StatusItem key={item.title} positionY={position} innerWidth={innerWidth}>
      <Image
        src={item.src}
        alt={`background:${item.title}.png`}
        width="100%"
        height="100%"
        objectFit='cover'
        priority= {true} 
      />
      <p style={{fontSize:'3vh',margin:'1.5vh 0',}}>{`평균${item.title}`}</p> 
      <TestPTag {...useScrollCount(item.number)}>
        0
      </TestPTag>  
    </StatusItem>
  ))  
  
  return (
    <>
      <Head>
        <title>한국외대 메이플스토리 동아리 소개</title>
        <meta name="description" content="Hufs Maplestory club" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
      
        <ContentsWrapper >
          <StatusList positionY={position} innerWidth={innerWidth}>
            
            {FigureItemList}
          </StatusList>
        </ContentsWrapper>
      </Layout>  
    </>
  );
};

export default about;

const TestPTag=styled.p`
  z-index: 999;
  width: 110px;
  height: 110px;
  display: flex;
  justify-content: center;
`

const StatusList=styled.div<Props>`
  display: flex;
  flex-direction: ${props=>props.innerWidth< 800 && 'column'};
  align-items: center;
  padding: 1vh 3vh;
  margin: 3vh 0;
  width: ${props=>props.innerWidth > 800 ? '50vw' : '90vw'};
  
  
  background-color: #f46df2a2;
  /* border: 1px solid red; */

`

const StatusItem=styled.div<Props>`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 1vh 3vh;
  margin: 3vh 0;
  width: ${props=>props.innerWidth > 800 ? '13vw' : '27vw'};
  p{
    font-family: NEXON_Lv2_Gothic_OTF;
    font-size: ${props=>props.innerWidth > 800 ? '3vw' : '4vw'};;
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
