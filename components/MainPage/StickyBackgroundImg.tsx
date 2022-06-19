import React, {useState,useEffect} from 'react';
import Image from 'next/image'
import Link from 'next/link';
import styled from 'styled-components';
import BackgroundImg from 'components/BackgroundImg'
import {requirements} from 'public/data/MainPageData'
import useScrollFadeIn from 'util/hooks/useScrollFadeIn'
interface bgImgProps{
  imgUrl:string;
}

interface Props{
  scrollY:number;
  innerHeight:number;
}

const  StickyBackgroundImg= ({imgUrl}:bgImgProps)=> {
  const animatedItem = useScrollFadeIn();

  const [scrollY,setscrollY]=useState(0);
  const [innerHeight,setInnerHeight]=useState(0);

  const onScroll=()=>{
    setscrollY(window.scrollY);
    console.log( (window.innerHeight*3-window.scrollY)/5000 );
  }
  useEffect(()=>{
    window.addEventListener("scroll",onScroll);
    setInnerHeight(window.innerHeight);
    //메모리 누수 방지
    return ()=>{
      window.removeEventListener("scroll",onScroll);
    }
  },[])

  return (
  <>
    <BgImgWrapper innerHeight={innerHeight} scrollY={scrollY}>
      <Image
        src={imgUrl}
        alt={`background:Background Image.jpeg`}
        layout='fill'
        objectFit='cover'
        objectPosition='center'
        priority= {true}
        />
    </BgImgWrapper>
    <MainTitle innerHeight={innerHeight} scrollY={scrollY}>
      {/* <div className='slide11' {...animatedItem}>
        @@@@@@@@@@@<br/>
        @@@@@@@@@@@ 
      </div> */}
      {/* <div className='slide2'>
        메린이부터 메고수까지<br/> 
        신입생부터 졸업생까지
      </div> */}
      {/* <div className='slide3'>
        HUFS 그리고 메이플<br/> 
        외메동에서 더 즐겁게  
      </div> */}
    </MainTitle>
    {/* <JoinButton>
      <Link href={'https://open.kakao.com/me/hufsmaple'}>
      가입하기
      </Link>
    </JoinButton> */}
  </>
);
}

export default StickyBackgroundImg;

const JoinButton=styled.button`
  margin: 200vh 0 0 0;
  padding: 1% 3%;
  z-index: 5;
  cursor: pointer;
  width: clamp(8rem,30vw,12rem);
  height: 3vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: clamp(1rem,1vw,2rem);
  font-family: NEXON_Lv2_Gothic_OTF;
  color:white;
  background-color: rgb(229,72,82);
  border-radius:5px;
  :hover{
    background-color: rgb(211,57,51);
  }
  
  position: absolute;
`

const MainTitle=styled.p<Props>`
  z-index: 10;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: -60vh 0 0 0;
  width: 100vw;
  font-size: clamp(1.5rem,8vw,3rem); 
  font-weight: bold;
  top: 40vh;
  position: sticky;

  // background-color: #2f3d14;
  
  .slide1{
    position:absolute;
    opacity: ${props=>
      (props.innerHeight/10)/(props.scrollY+1)
    };
    
  }

  .slide2{
    position:absolute;
    opacity: ${props=>
      (props.scrollY*0.5)/(props.innerHeight)
    };
    // margin: 10vh 0 0 0;
    color:#000000;
  }

  .slide3{
    position:absolute;
    opacity: ${props=>
      (props.scrollY*0.5)/(props.innerHeight)
    };
    // margin: 10vh 0 0 0;
    color:#000000;
  }
`

const BgImgWrapper=styled.div<Props>`
  z-index: 0;
  width: 100vw;
  height: 100vh;
  
  opacity: ${props=>(props.innerHeight*3-props.scrollY)/1000 };
  
  top:0;
  position: sticky;
`

// opacity: ${props=> props.scrollY> props.innerHeight*2 && 
  // Number((props.innerHeight/(props.scrollY*4+1)).toFixed(2)) };