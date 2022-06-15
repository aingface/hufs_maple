import React from 'react';
import Layout from 'components/Layout';
import styled from 'styled-components';
import Image from 'next/image';
import reverse_city from '/public/images/reverse_city.jpeg'
import {useState,useEffect } from 'react';
import useScrollCount from 'util/hooks/useScrollCount'
import {AVG_ITEMS} from 'public/data/AVGItems'
import Charts from 'components/Charts'


interface Props{
  positionY:number;
  innerWidth:number;
}

const info = () => {
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

  const AVGItemList=AVG_ITEMS.map((item)=>(
    <AVGCard key={item.title} positionY={position} innerWidth={innerWidth}>
      <Image
        src={item.src}
        alt={`background:${item.title}.png`}
        width="100vw"
        height="100vw"
        objectFit='cover'
        priority= {true} 
      />
      <p className='AVGListTitle'>{`${item.title}`}</p> 
      <p className='AVGValue'{...useScrollCount(item.number)}>
        0
      </p>  
    </AVGCard>
  ))  
  
  return (
      <Layout>
        <ContentsWrapper >
          <BgImgWrapper>
            <Image
              src={reverse_city}
              alt={`background:${reverse_city}.jpeg`}
              layout='fill'
              objectFit='cover'
              objectPosition='center'
              priority= {true}
            />
          </BgImgWrapper>
          <AVGListWrapper>    
            <AVGListTitle positionY={position} innerWidth={innerWidth}>
                외메동 평균은
            </AVGListTitle>
            <AVGCardsWrapper positionY={position} innerWidth={innerWidth}>
              {AVGItemList}
            </AVGCardsWrapper>
          </AVGListWrapper>    
          <Charts/>
        </ContentsWrapper>
      </Layout>  
  );
};

export default info;

const AVGCard=styled.div<Props>`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: ${props=>props.innerWidth > 400 ? '2vh 3vw;' : '2vh 2vw;'};
  width: ${props=>props.innerWidth > 400 ? '17vw' : '50vw'};
  height: ${props=>props.innerWidth > 820 ? '40vh' : '22vh'};
  /* padding: ${props=>props.innerWidth > 400 ? '0 7vh;' : '2vh 5vh;'}; */

  .AVGListTitle{
    font-size: ${props=>props.innerWidth > 400 ? '1.5vw' : '2.5vw'};
    color:#000000e8;
    margin-top: 2vh;
  }
  .AVGValue{
    font-size: ${props=>props.innerWidth > 400 ? '5vw' : '7vw'};
    color:#000000;
    font-weight: bold;
  }
  background-color : #ffffff77;
  border-radius: 10px;
  /* border: 1px solid red; */
`

const AVGListTitle=styled.p<Props>`  
  font-size: ${props=>props.innerWidth > 400 ? '3vw' : '8vw'};
  margin: 7vh;
  color: #ffffff;

`
const AVGCardsWrapper=styled.div<Props>`
  z-index: 1;
  display: flex;
  flex-direction: ${props=>props.innerWidth> 400 ? 'row' : 'column' };
  justify-content: center;
  align-items: center;
  width: ${props=>props.innerWidth > 400 ? '80vw' : '90vw'};
  font-family: Maplestory_OTF_Light;
  margin: ${props=>props.innerWidth> 400 ? '10vh 0 24.5vh 0' : '0vh' };
  
  /* background-color: #00eeffa1; */
`

const AVGListWrapper=styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; 
  width: 100vw;
`

const BgImgWrapper=styled.div`
  z-index: 0;
  position: absolute;
  width: 100vw;
  height: 100vh;
`

const ContentsWrapper=styled.div`
  position: relative;
  height: 200vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Maplestory_OTF_Light;
  min-width: 350px;
  width: 100vw;
  /* background:linear-gradient( #60f4fffc, 15%,#862cbaf9 25%, #f6f7f9ce 5%); */
`