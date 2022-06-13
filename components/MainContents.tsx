import React, {useState,useEffect} from 'react';
import Image, { StaticImageData } from 'next/image'
import styled, { keyframes } from 'styled-components';
import Link from 'next/link';
import mushmom from '/public/images/mushmom.png'
import lucid from '/public/images/lucid.png'
import crew from '/public/images/crew.png'
import maple_island from '/public/images/maple_island.jpeg'
import Layout from 'components/Layout';


interface TitleProps{
  positionY:number;
  innerWidth:number;
}

interface DescProps{
  positionY:number;
  innerWidth:number;
}

const descriptions:{
  title:string,
  description:(string|JSX.IntrinsicAttributes)[],
  image:StaticImageData}[]=[
  {
    title:'가입자격',
    description:['외대인이라면 누구나','가입할 수 있어요'],
    image :crew,
  },
  {
    title:'가입조건',
    description:['레벨은 200이상', '이어야해요'],
    image :mushmom,
  },
  {
    title:'가입자격',
    description:['오픈카톡으로 연락주세요',
      <span>
        <Link href={'https://open.kakao.com/me/hufsmaple'}>
          엘리시움 외대경제 김규범
        </Link>
      </span>],
    image :lucid,
  },
]

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

  const descriptionsTags=descriptions.map(desc=>{
    return(
      <DescItem positionY={position} innerWidth={innerWidth}>
        <SecondaryDesc positionY={position} innerWidth={innerWidth}>
          <span className='sub_title'>{desc.title}</span>
          <br />
          {desc.description
            .map(line=><>
                  {line}<br/>
                </>
            
          )}
        </SecondaryDesc>
        <Image
          src={desc.image}
          alt={`background:${desc.image}.png`}
          width="75%"
          height="75%"
          objectFit='cover'
        >
        </Image>
      </DescItem>
    )
  })


  return (
    <Layout>
      <MainContentsWrapper>
        <BgImgWrapper>
          <Image
            src={maple_island}
            alt='background: maple_island.jpeg'
            width='100vw'
            height='100vh'
            layout='fill'
            objectFit='cover'
            objectPosition='center'
            priority= {true}
            style={{
              zIndex:-1, 
            }}
          />
        </BgImgWrapper>  
        <MainTitle positionY={position} innerWidth={innerWidth}>
          HUFS 그리고 메이플<br /> 
          외메동에서 더 즐겁게
        </MainTitle>
        <JoinButton positionY={position} innerWidth={innerWidth} className='btn-primary'>
          <Link href={'https://open.kakao.com/me/hufsmaple'}>
          가입하기
          </Link>
        </JoinButton>
        <DescWrapper>
          { descriptionsTags}
        </DescWrapper>  
      </MainContentsWrapper>
    </Layout>
  );
} ;

export default MainContents;



const SecondaryDesc=styled.p<DescProps>`
  z-index: 1;
  padding: 1% 5%;
  color: #000000;
  line-height: 4vh;
  font-family: NEXON_Lv2_Gothic_OTF;
  font-size: ${props=>props.innerWidth > 800 ? '3.5vh' : '1.9vh'};
  .sub_title{
    font-size: ${props=>props.innerWidth > 800 ? '2.2vh' : '2vh'};
    color: #5684fa;
  }
`
const BgImgWrapper=styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
`

const DescItem=styled.div<DescProps>`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: ${props=>props.innerWidth > 800 ? '40vw' : '80vw'};
  padding: 1vh 3vh;
  margin: 3vh 0;
  @keyframes desc-ani{
    0%{
      opacity: 0;
      transform: translateY(3vh);}
    100%{transform: translateY(0);}
  }
  animation: ${props=>props.positionY >400 && 'desc-ani 0.6s linear'};
  span:hover{
    color : #1154ff;
    cursor: pointer;
  }
  
  /* background-color: #ff7b00; */
`

const DescWrapper=styled.div`
  display: flex;
  flex-direction: column;
  margin: 25vh;
  justify-content: center;
  align-items: center;

  /* background-color: #1aa861; */
  
`

const JoinButton=styled.div<DescProps>`
  margin: 20vh 0 25vh 0;
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

const MainTitle=styled.p<TitleProps>`
  z-index: 10;
  color: #ffffff;
  display: flex;
  justify-content: center;
  margin: 15vh 0;
  width: 100vw;
  /* height: 100vh; */
  font-size: ${props=>props.innerWidth > 800 ? '6vh' : '4vh'};
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