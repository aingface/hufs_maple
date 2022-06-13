import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import reverse_city from '/public/images/reverse_city.jpeg'
import eurel from '/public/images/eurel.jpeg'
import florida_beach from '/public/images/florida_beach.jpeg'
import styled from 'styled-components';


const images=[ reverse_city, eurel, florida_beach ]
// const images=[ 
//   '/images/reverse_city.jpeg', 
//   '/images/eurel.jpeg',
//   '/images/florida_beach.jpeg'
// ]


const CarouselChart = () => {
  const [index,setIndex]=useState(0)
  const [index1,setIndex1]=useState(1)

  const [transL,setTransL]=useState(false)
  const [transR,setTransR]=useState(false)

  useEffect(()=>{
    if(transR){
      setTimeout(()=>{
        setTransR(false)
      },800)
    }
    if(transL){
      setTimeout(()=>{
        setTransL(false)
        setIndex((index+1)%images.length)
        setIndex1((index1+1)%images.length)
      },800)
    }
  },[transL,transR])

  const handlePrev=()=>{
    setTransR(true)
    setTransL(false)
    
    const nextIndex=index - 1;
    const nextIndex1 = index1 -1;

    if(nextIndex1 < 0){
      setIndex1(images.length - 1)
    }else{
      setIndex1(nextIndex1)
    }

    if(nextIndex < 0){
      setIndex(images.length - 1)
    }else{
      setIndex(nextIndex)
    }
  }

  const handleNext=()=>{
    setTransL(true)
    setTransR(false)
  } 


  //Image 태그를 사용하면 이미지가 2개가 뜨는가? 이걸 해결해야함. 
  //슬라이드 원리는 현재,다음 이미지 2개를 연달아 붙여서 현재 이미지는 0->-100%,
  //다음 이미지는 100% -> 0 보여주는 것이다. 이를 잘 생각해보자. 
  return (
    <div className='flex justify-center space-x-5 mt-16'>
      <button className='h-auto w-10 bg-red-300 font-extrabold text-3xl' onClick={handlePrev}>{'<'}</button>
        <div className='relative w-96 border-2 h-56 overflow-hidden rounded-xl'>
          <Image 
            className={ `absolute object-contain z-20 w-full h-full p-1 
            ${ transL ? 'transition duration-500 ease-linear transform -translate-x-full' :
              (transR ? 'animate-slideR' : '')}`}
            src={images[index]} 
            alt=""
          />  
          <Image 
            className={`absolute object-contain z-0 w-full h-full p-1
            ${transL ? 'animate-slideR' : (transR ? 'transition duration-500 ease-linear transform translate-x-full': '')}`} 
            src={images[index1]} 
            alt=""
          />  
        </div>
      <button className='h-100 w-10 bg-red-300 font-extrabold text-3xl' onClick={handleNext}>{'>'}</button>
    </div>
  );
};

export default CarouselChart;

const Card1=styled.div`
  width: 100px;
  height: 100px;
  background-color: #2b6868;
`
const Card2=styled.div`
  width: 100px;
  height: 100px;
  background-color: #397c09;
`
const Card3=styled.div`
  width: 100px;
  height: 100px;
  background-color: #7c0939;
`

const Wrapper=styled.div`
  width: 100vw;
  height: 50vh;
  background-color: #203ec3;
  display: flex;
  justify-content: center;
  align-items: center;
`

