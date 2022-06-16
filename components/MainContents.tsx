import React, {useState,useEffect} from 'react';
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link';
import styled from 'styled-components';
import mushmom from '/public/images/mushmom.png'
import lucid from '/public/images/lucid.png'
import crew from '/public/images/crew.png'
import Layout from 'components/Layout';
import BackgroundImg from 'components/BackgroundImg'
import {requirements} from 'public/data/MainPageData'


interface TitleProps{
  positionY:number;
  innerWidth:number;
}

interface reqProps{
  positionY:number;
  innerWidth:number;
}

// const requirements:{
//   title:string,
//   description:(string|JSX.IntrinsicAttributes)[],
//   image:StaticImageData}[]=[
//   {
//     title:'가입대상',
//     description:['외대인이라면 누구나','가입할 수 있어요'],
//     image :crew,
//   },
//   {
//     title:'가입레벨',
//     description:['레벨은 200이상', '이어야해요'],
//     image :mushmom,
//   },
//   {
//     title:'가입연락',
//     description:['오픈카톡으로 연락주세요',
//       <span>
//         <Link href={'https://open.kakao.com/me/hufsmaple'}>
//           엘리시움 외대경제 김규범
//         </Link>
//       </span>],
//     image :lucid,
//   },
// ]

const MainContents = () => {
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
  
  //메인페이지 하단 설명 개별 항목  
  const requirementsList=requirements.map((req)=>{
    return(
      <JoinReq key={req.title} positionY={position} innerWidth={innerWidth}>
        <JoinReqText>
          <span className='join_req_title'>{req.title}</span>
          <br />
          {req.description
            .map((line,idx)=>{
              if(line==='엘리시움 외대경제 김규범'){
                return(
                  <span  key={Date.now()} className='openkatok'>
                    <Link href={'https://open.kakao.com/me/hufsmaple'}>
                      {'엘리시움 외대경제 김규범'}
                    </Link>
                  </span>
                )
              }
              return(
                <span  key={Date.now()+Math.random()}>
                  <>
                    {line}<br/>
                  </>
                </span>
              ) 
            }
          )}
        </JoinReqText>
        <Image
          src={req.image}
          alt={`background:${req.image}.png`}
          width="75%"
          height="75%"
          objectFit='cover'
        >
        </Image>
      </JoinReq>
    )
  })


  return (
    <Layout>
      <MainContentsWrapper>
        <BackgroundImg imgUrl={'/images/maple_island.jpeg'}/>
        <MainTitle positionY={position} innerWidth={innerWidth}>
          HUFS 그리고 메이플<br /> 
          외메동에서 더 즐겁게
        </MainTitle>
        <JoinButton positionY={position} innerWidth={innerWidth} className='btn-primary'>
          <Link href={'https://open.kakao.com/me/hufsmaple'}>
          가입하기
          </Link>
        </JoinButton>
        <JoinReqWrapper>
          {requirementsList}
        </JoinReqWrapper>  
      </MainContentsWrapper>
    </Layout>
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
const JoinReq=styled.div<reqProps>`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: ${props=>props.innerWidth > 800 ? '35vw' : '90vw'};
  padding: 1vh 3vh;
  margin: 3vh 0;
  @keyframes req-ani{
    0%{
      opacity: 0;
      transform: translateY(3vh);}
    100%{transform: translateY(0);}
  }
  animation: ${props=>props.positionY >400 && 'req-ani 0.6s linear'};
  .openkatok:hover{
    color : #1154ff;
    cursor: pointer;
  }

  /* background-color: #ff7b00; */
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

const JoinButton=styled.div<reqProps>`
  margin: 20vh 0 25vh 0;
  padding: 1% 3%;
  font-family: NEXON_Lv2_Gothic_OTF;
  z-index: 3;
  cursor: pointer;
  width: clamp(8rem,30vw,12rem);
  height: 7vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: clamp(1rem,1vw,2rem);
`

const MainTitle=styled.p<TitleProps>`
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