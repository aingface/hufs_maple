import React, {useState,useEffect} from 'react';
import Image from 'next/image'
import styled, { keyframes } from 'styled-components';
import Link from 'next/link';
import mushmom from '/public/images/mushmom.png'
import lucid from '/public/images/lucid.png'
import crew from '/public/images/crew.png'


interface TitleProps{
  positionY:number;
  innerWidth:number;
}

interface DescProps{
  positionY:number;
  innerWidth:number;
}

const MainContents = () => {
  const [position,setPosition]=useState(0);
  const [innerWidth, setInnerWidth]=useState(0);
  const onScroll=()=>{
    setPosition(window.scrollY);
    console.log(window.scrollY);
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

  return (
    <MainContentsWrapper>
      <Image
        src='/images/rudibrium2.jpeg'
        alt='background: maple_island.jpeg'
        layout='fill'
        objectFit='cover'
        objectPosition='center'
        priority= {true}
        style={{
          opacity: 0.8,
          zIndex:-1, 
        }}
      />
      <MainTitle positionY={position} innerWidth={innerWidth}>
        HUFS 그리고 메이플<br /> 
        외메동에서 더 즐겁게
      </MainTitle>
      <JoinButton positionY={position} innerWidth={innerWidth} className='btn-primary'>
        <Link href={'https://open.kakao.com/me/hufsmaple'}>
        가입하기
        </Link>
      </JoinButton> 
      
      <TextWrapper positionY={position} innerWidth={innerWidth}>
         <SecondaryDesc positionY={position} innerWidth={innerWidth}>
          <span className='sub_title'>가입자격</span>
          <br />
          외대인이라면 누구나<br/>
          가입할 수 있어요<br/>
        </SecondaryDesc>
        <Image
          src={crew}
          alt='background: crew.png'
          width="80%"
          height="80%"
          objectFit='cover'
        >
        </Image>
      </TextWrapper>
      <TextWrapper positionY={position} innerWidth={innerWidth}>
        <SecondaryDesc positionY={position} innerWidth={innerWidth}>
          <span className='sub_title'>가입조건</span>
          <br />
          본캐 레벨이 200 이상 이어야해요
        </SecondaryDesc>
        <Image
          src={mushmom}
          alt='background: mushmom.png'
          width="80%"
          height="80%"
          objectFit='cover'
        >
        </Image>  
      </TextWrapper>
      <TextWrapper positionY={position} innerWidth={innerWidth}>
        <SecondaryDesc positionY={position} innerWidth={innerWidth}>
          <span className='sub_title'>가입문의</span>
          <br />
          아래 오픈카톡 닉네임을 검색해주세요<br />
          <span>
            <Link href={'https://open.kakao.com/me/hufsmaple'}>
            '엘리시움 외대경제 김규범'
            </Link>
          </span>
        </SecondaryDesc>
        <Image
          src={lucid}
          alt='background: lucid.png'
          width="80%"
          height="80%"
          objectFit='cover'
        >
        </Image>
      </TextWrapper>
        
    </MainContentsWrapper>
  );
} ;

export default MainContents;

const JoinButton=styled.div<DescProps>`
  margin: 20vh 0 50vh 0;
  padding: 1% 3%;
  font-family: NEXON_Lv2_Gothic_OTF;
  z-index: 3;
  cursor: pointer;
  width:${props=>props.innerWidth > 800 ? '20vh' : '25vh'};
  height: 7vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
`

const MainContentsWrapper=styled.div`
  position: relative;
  height: 200vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 10vh;
  justify-content: center;
`

const MainTitle=styled.p<TitleProps>`
  z-index: 1;
  /* padding: 10% 35%; */
  width: 100%;
  height: 50vh;
  color: #000000;
  background-color:#ffffff56;
  font-family: NEXON_Lv2_Gothic_OTF_Bold;
  font-size: ${props=>props.innerWidth > 800 ? '6vh' : '4vh'};
  font-weight: bold;
  top: 0;
  left: 0;  
  display: flex;
  align-items: center;
  position: absolute;
  justify-content: center;
`
const SecondaryDesc=styled.p<DescProps>`
  z-index: 1;
  padding: 1% 5%;
  color: #000000;
  line-height: 3vh;
  font-family: NEXON_Lv2_Gothic_OTF;
  font-size: ${props=>props.innerWidth > 800 ? '2.5vh' : '1.9vh'};
  .sub_title{
    font-size: 1.5vh;
    color: #5684fa;
  }
`
const TextWrapper=styled.div<DescProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1vh 3vh;
  margin-bottom: 3vh;
  width: ${props=>props.innerWidth > 800 ? '40vw' : '80vw'};
  @keyframes desc-ani{
    0%{
      opacity: 0;
      transform: translateY(3vh);}
    100%{transform: translateY(0);}
  }
  animation: ${props=>props.positionY >300 && 'desc-ani 0.5s linear'};
  animation-delay: 0.5s; 
  span:hover{
    color : #1154ff;
    cursor: pointer;
  }
  opacity: ${props=>props.positionY<600 ? 0:1};
  /* background-color: #94949452;
  /* border: 1px solid red; */

`