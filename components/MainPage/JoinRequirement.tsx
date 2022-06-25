import React from 'react';
import Image from 'next/image'
import Link from 'next/link';
import styled from 'styled-components';
import {joinRequirements} from 'public/data/MainPageData'
import useScrollFadeIn from 'util/hooks/useScrollFadeIn'

import { useSelector } from 'react-redux';
import { IState } from 'store/modules';
interface Props{
  innerWidth:number;
  innerHeight:number;
}

const JoinRequirement = () => {
  const innerWidth=useSelector((state:IState)=> state.windowSize.innerWidth );
  const innerHeight=useSelector((state:IState)=> state.windowSize.innerHeight );

   //메인페이지 하단 설명 개별 항목  
   const requirementsList=joinRequirements.map((req)=>{
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
        <ImgWrapper>
          <Image
            className='req-img'
            src={req.image}
            alt={`${req.imageTitle}.png`}
            width="80%"
            height="80%"
            objectFit='cover'
            priority= {true} 
          />
        </ImgWrapper>
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


const ImgWrapper=styled.div`
  position:relative;
`

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
  width: ${props=>props.innerWidth*1.3 < props.innerHeight ? '80vw':'45vw'};
  padding: 1vh 3vh;
  margin: 3vh 0;
  
  .openkatok:hover{
    color : #1154ff;
    cursor: pointer;
  }

  // background-color: #78ffc8;
`


//메인페이지 하단 가입 조건 항목 전체 wrapper 
const JoinReqWrapper=styled.div`
  z-index:3;
  display: flex;
  flex-direction: column;
  margin: 420vh 0 0 0;
  justify-content: center;
  align-items: center;
  /* background-color: #ca35d2; */

  position: absolute;
`