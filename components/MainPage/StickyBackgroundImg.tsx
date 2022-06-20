import React, {useState,useEffect} from 'react';
import Image from 'next/image'
import Link from 'next/link';
import styled from 'styled-components';
interface bgImgProps{
  imgUrl:string;
}
interface Props{
  scrollY:number;
  innerHeight:number;
}

const  StickyBackgroundImg= ({imgUrl}:bgImgProps)=> {
  const [scrollY,setscrollY]=useState(0);
  const [innerHeight,setInnerHeight]=useState(0);

  const onScroll=()=>{
    setscrollY(window.scrollY);
    // console.log( (window.innerHeight*3-window.scrollY)/5000 );
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
      <BgImg innerHeight={innerHeight} scrollY={scrollY}>
        <ImgWrapper>
          <Image
            src={imgUrl}
            alt={`background:BackgroundImage.jpeg`}
            layout='fill'
            objectFit='cover'
            objectPosition='center'
            priority= {true}
          />
        </ImgWrapper>    
      </BgImg>
      
      <MainTitle innerHeight={innerHeight} scrollY={scrollY}>
        <div className='slide1'>
          메이플 좋아하는 외대사람,<br/>
          외메동에 다 모였다 !!
        </div> 
        <div className='slide2'>
          메린이부터 메고수까지<br/> 
          신입생도 졸업생도 환영!!<br/>
        </div>
        <div className='slide3'>
          HUFS 그리고 메이플<br/> 
          외메동에서 더 알차게  
          <JoinButton>
            <Link href={'https://open.kakao.com/me/hufsmaple'}>
            가입하기
            </Link>
          </JoinButton>
        </div>
      </MainTitle>
    </>
);
}

export default StickyBackgroundImg;

const JoinButton=styled.button`
  margin: 20vh 0 0 0;
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

const MainTitle=styled.div<Props>`
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
    z-index:10;
    opacity: ${
       props=>(props.innerHeight-props.scrollY)/(props.innerHeight/2)
    };
  }

  .slide2{
    position:absolute;
    z-index:10;
    opacity: ${
      props=> props.innerHeight<props.scrollY ?
    (props.innerHeight*2-props.scrollY)/ (props.innerHeight/2) : 0
    };
    transform: translateY( ${props=>-props.scrollY/100} );
  }

  .slide3{
    position:absolute;
    display: flex;
    flex-direction: column;
    align-items:center;
    z-index:10;
    opacity: ${
      props=> props.innerHeight*2<props.scrollY ?
      (props.innerHeight*3-props.scrollY)/(props.innerHeight/2) : 0
    };
    color:#000000;
  }
`

const ImgWrapper=styled.div`
  position:relative;
  width:100vw;
  height: 100vh;
`

const BgImg=styled.div<Props>`
  z-index: 0;
  width: 100vw;
  height: 100vh;
  opacity: ${props=>(props.innerHeight*3.5-props.scrollY)/1000 };
  top:0;
  position: sticky;
`
