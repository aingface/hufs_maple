import React from 'react';
import Head from 'next/head';
import Layout from 'components/Layout';
import styled from 'styled-components';
import Image from 'next/image';
import {useState,useEffect } from 'react';
import useScrollCount from 'util/hooks/useScrollCount'
import PolarArea from 'components/Chart/PolarArea'
import Bar from 'components/Chart/Bar'
import ColumnBar from 'components/Chart/ColumnBar';
import {UserData} from 'public/data/UserData'
import {FIGURE_ITEMS} from 'public/data/FigureItems'

interface Props{
  positionY:number;
  innerWidth:number;
}

const info = () => {
  const [position,setPosition]=useState(0);
  const [innerWidth, setInnerWidth]=useState(0);
  const [userData,setUserData]=useState({
    labels:UserData.map(data=>data.year),
    datasets:[{
      label:"Users Gained",
      data: UserData.map(data=>data.userGain),
    }]
  })

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
    <FigureItem key={item.title} positionY={position} innerWidth={innerWidth}>
      <Image
        src={item.src}
        alt={`background:${item.title}.png`}
        width="150vw"
        height="150vw"
        objectFit='cover'
        priority= {true} 
      />
      <p className='figureName'>{`${item.title}`}</p> 
      <p className='figureValue'{...useScrollCount(item.number)}>
        0
      </p>  
    </FigureItem>
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
          <ListName positionY={position} innerWidth={innerWidth}>
            외메동 평균은
          </ListName>
          <FigureList positionY={position} innerWidth={innerWidth}>
            {FigureItemList}
          </FigureList>
          <PolarArea/>
          <ColumnBar/>
          <Bar/>
        </ContentsWrapper>
      </Layout>  
    </>
  );
};

export default info;

const FigureItem=styled.div<Props>`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: ${props=>props.innerWidth > 400 ? '30vh 7vh;' : '2vh 5vh;'};
  width: ${props=>props.innerWidth > 400 ? '17vw' : '20vw'};

  .figureName{
    font-size: ${props=>props.innerWidth > 400 ? '1.5vw' : '3.5vw'};
    color:#000000e8;
    margin-top: 2vh;
  }

  .figureValue{
    font-size: ${props=>props.innerWidth > 400 ? '5vw' : '7vw'};
    color:#000000;
    font-weight: bold;
    /* font-family: NEXON_Lv2_Gothic_OTF_Bold; */
    /* font-family: Maplestory_OTF_Light; */

  } 
  /* border: 1px solid red; */
`

const ListName=styled.p<Props>`  
  font-size: 7vh;
  position: absolute;
  top: ${props=>props.innerWidth> 400 ? '15vh' : '4vh'};
  /* font-family: NEXON_Lv2_Gothic_OTF; */
  /* font-weight: bold; */
  color: #ffffff;

`
const FigureList=styled.div<Props>`
  display: flex;
  flex-direction: ${props=>props.innerWidth> 400 ? 'row' : 'column' };
  justify-content: center;
  align-items: center;
  padding: 1vh 3vh;
  margin: ${props=>props.innerWidth> 400 ? '2vw' : '30vw'};
  width: ${props=>props.innerWidth > 800 ? '80vw' : '90vw'};
  /* background-color: #00eeffa1; */
  font-family: Maplestory_OTF_Light;
`

const ContentsWrapper=styled.div`
  z-index: -1;
  position: relative;
  height: 420vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* top: 7vh; */
  font-family: Maplestory_OTF_Light;
  background:linear-gradient( #5653fefd, 15%,#862cbaf9 25%, #f6f7f9 5%);
  min-width: 280px;
`