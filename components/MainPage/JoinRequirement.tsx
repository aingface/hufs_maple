import React, {useState,useEffect} from 'react';
import Image from 'next/image'
import Link from 'next/link';
import styled from 'styled-components';
import BackgroundImg from 'components/BackgroundImg'
import {requirements} from 'public/data/MainPageData'
import useScrollFadeIn from 'util/hooks/useScrollFadeIn'


interface Props{
  innerWidth:number;
  innerHeight:number;
}

const JoinRequirement = () => {
  const [innerWidth, setInnerWidth]=useState(0);
  const [innerHeight, setInnerHeight]=useState(0);

  useEffect(()=>{
    setInnerWidth(window.innerWidth);
    setInnerHeight(window.innerHeight);
  },[])

   //메인페이지 하단 설명 개별 항목  
   const requirementsList=requirements.map((req)=>{
    const animatedItem = useScrollFadeIn();

    return(
      <JoinReq key={req.title} 
        innerWidth={innerWidth} 
        innerHeight={innerHeight}

        {...animatedItem}
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
    <JoinReqWrapper>
      {requirementsList}
    </JoinReqWrapper>  
  );
};

export default JoinRequirement;

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
  
  .openkatok:hover{
    color : #1154ff;
    cursor: pointer;
  }

  background-color: #78ffc8;
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
