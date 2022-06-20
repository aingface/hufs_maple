import React,{useState,useEffect} from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import {AVG_ITEMS} from 'public/data/AVGItems'
import useScrollCount from 'util/hooks/useScrollCount'

interface Props{
  innerWidth:number;
  innerHeight:number;
}

function MemberAVG() {
  const [innerWidth, setInnerWidth]=useState(0);
  const [innerHeight, setInnerHeight]=useState(0);
  
  useEffect(()=>{
    setInnerWidth(window.innerWidth);
    setInnerHeight(window.innerHeight);
  },[])

  const AVGItemList=AVG_ITEMS.map((item)=>(
    <AVGCard key={item.title} 
      innerWidth={innerWidth}
      innerHeight={innerHeight}
      >
      <Image
        src={item.src}
        alt={`background:${item.title}.png`}
        width="100vw"
        height="100vw"
        objectFit='cover'
        priority= {true} 
      />
      <p className='AVGListTitle'>{`${item.title}`}</p> 
      <p className='AVGValue'{...useScrollCount(item.value)}>
        0
      </p>  
    </AVGCard>
  ))  

  return (
    <AVGListWrapper>    
      <AVGListTitle 
        innerWidth={innerWidth}
        innerHeight={innerHeight}
        >
          외메동 평균은
      </AVGListTitle>
      <AVGCardsWrapper 
        innerWidth={innerWidth}
        innerHeight={innerHeight}
      >
        {AVGItemList}
      </AVGCardsWrapper>
    </AVGListWrapper>    
  );
}

export default MemberAVG

const AVGCard=styled.div<Props>`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin:${ props=>props.innerWidth*1.5 <= props.innerHeight ?  '2vh 0' : '0 2vw'};
  width: ${ props=>props.innerWidth*1.5 <= props.innerHeight ?  '45vw' : '17vw'};
  height: ${ props=>props.innerWidth*1.5 <= props.innerHeight ? '22vh' : '40vh'};
  padding: ${ props=>props.innerWidth*1.5 <= props.innerHeight ? '0 7vh;' : '2vh 5vh;'}; 

  .AVGListTitle{
    font-size: ${ props=>props.innerWidth*1.5 <= props.innerHeight ? '2.5vw' : '1.5vw' };
    color:#000000e8;
    margin-top: 2vh;
  }
  .AVGValue{
    font-size: ${ props=>props.innerWidth*1.5 <= props.innerHeight ? '7vw' : '5vw'};
    color:#000000;
    font-weight: bold;
  }
  background-color : #ffffff77;
  border-radius: 10px;
  /* border: 1px solid red; */
`

const AVGListTitle=styled.p<Props>`  
  z-index: 10;
  font-size: ${ props=>props.innerWidth*1.5 <= props.innerHeight ? '8vw' : '3vw' };
  margin: 7vh;
  color: #ffffff;

`
const AVGCardsWrapper=styled.div<Props>`
  z-index: 1;
  display: flex;
  flex-direction: ${props=>props.innerWidth*1.5 <= props.innerHeight ? 'column' : 'row' };
  justify-content: center;
  align-items: center;
  width: 90vw;
  font-family: Maplestory_OTF_Light;
  margin: ${ props=>props.innerWidth*1.5 <= props.innerHeight ? '0vh': '10vh 0 24.5vh 0' };
  
  // background-color: #00eeffa1; 
`

const AVGListWrapper=styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; 
  width: 100vw;
`