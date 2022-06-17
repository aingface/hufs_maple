import React, {useState,useEffect} from 'react';
import Image from 'next/image'
import Link from 'next/link';
import styled from 'styled-components';
import Layout from 'components/Layout';
import BackgroundImg from 'components/BackgroundImg'
import {requirements} from 'public/data/MainPageData'

interface Props{
  positionY:number;
  innerWidth:number;
  innerHeight:number;
}

const MainContents = () => {
  const [position,setPosition]=useState(0);
  const [innerWidth, setInnerWidth]=useState(0);
  const [innerHeight, setInnerHeight]=useState(0);

  const onScroll=()=>{
    setPosition(window.scrollY);
    // console.log(window.scrollY);
  }
  useEffect(()=>{
    window.addEventListener("scroll",onScroll);
    setInnerWidth(window.innerWidth);
    setInnerHeight(window.innerHeight);
    // console.log(window.innerWidth, window.innerHeight)
    //메모리 누수 방지
    return ()=>{
      window.removeEventListener("scroll",onScroll);
    }
  },[])
  
  //메인페이지 하단 설명 개별 항목  
  const requirementsList=requirements.map((req)=>{
    return(
      <JoinReq key={req.title} 
        positionY={position} 
        innerWidth={innerWidth} 
        innerHeight={innerHeight}
      >
        <JoinReqText>
          <span className='join_req_title'>{req.title}</span>
          <br />
          {req.description
            .map((line,idx)=>{
              if(line==='엘리시움 외대경제 김규범'){
                return(
                  <span key={Date.now()} className='openkatok'>
                    <Link href={'https://open.kakao.com/me/hufsmaple'}>
                      {'엘리시움 외대경제 김규범'}
                    </Link>
                  </span>
                )
              }
              return(
                <span key={Date.now()*Math.random()+Math.random()}>
                  <>
                    {line}<br/>
                  </>
                </span>
              ) 
            }
          )}
        </JoinReqText>
        <Image
          className='req-img'
          src={req.image}
          alt={`background:${req.image}.png`}
          width="80%"
          height="80%"
          objectFit='cover'
        >
        </Image>
      </JoinReq>
    )
  })


  return (
      <MainContentsWrapper>
        <BackgroundImg imgUrl={'/images/maple_island.jpeg'}/>
        <MainTitle>
          HUFS 그리고 메이플<br /> 
          외메동에서 더 즐겁게
        </MainTitle>
        <JoinButton>
          <Link href={'https://open.kakao.com/me/hufsmaple'}>
          가입하기
          </Link>
        </JoinButton>
        <JoinReqWrapper>
          {requirementsList}
        </JoinReqWrapper>  
      </MainContentsWrapper>
  );
} ;

export default MainContents;


//메인페이지 하단 가입조건 텍스트
const JoinReqText=styled.div`
  z-index: 1;
  padding: 1% 5%;
  line-height: 4vh;
  font-family: NEXON_Lv2_Gothic_OTF;
  font-size: clamp(0.7rem,3.5vw,1.5rem);

  .join_req_title{
    font-size: clamp(0.7rem,2vw,1rem);
    color: #5684fa;
  }
`

//메인페이지 하단 가입 조건 개별 항목  
const JoinReq=styled.div<Props>`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: ${props=>props.innerWidth*1.78 <= props.innerHeight ?
  '95vw':'clamp(30rem,45vw,35rem)'};
  padding: 1vh 3vh;
  margin: 3vh 0;
  
  @keyframes req-ani{
    0%{
      opacity: 0;
      transform: translateY(3vh);}
    100%{transform: translateY(0);}
  }
  animation: ${props=>props.positionY >400 &&
  'req-ani 0.6s linear'};
  
  .openkatok:hover{
    color : #1154ff;
    cursor: pointer;
  }

  // background-color: #ff7b00;
`

//메인페이지 하단 가입 조건 항목 전체 wrapper 
const JoinReqWrapper=styled.div`
  display: flex;
  flex-direction: column;
  margin: 25vh;
  justify-content: center;
  align-items: center;

  /* background-color: #1aa861; */
  
`

const JoinButton=styled.button`
  margin: 20vh 0 25vh 0;
  padding: 1% 3%;
  font-family: NEXON_Lv2_Gothic_OTF;
  z-index: 3;
  cursor: pointer;
  width: clamp(8rem,30vw,12rem);
  height: 3vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: clamp(1rem,1vw,2rem);
  color:white;
  background-color: rgb(229,72,82);
  border-radius:5px;
  :hover{
    background-color: rgb(211,57,51);
  }
`

const MainTitle=styled.p`
  z-index: 10;
  color: #ffffff;
  display: flex;
  justify-content: center;
  margin: 15vh 0;
  width: 100vw;
  /* height: 100vh; */
  font-size: clamp(1.5rem,8vw,3rem); 
  font-weight: bold;

  /* background-color: red; */
`

const MainContentsWrapper=styled.div`
  position: relative;
  height: 200vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`