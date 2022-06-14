import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import reverse_city from '/public/images/reverse_city.jpeg'
import eurel from '/public/images/eurel.jpeg'
import florida_beach from '/public/images/florida_beach.jpeg'
import styled from 'styled-components';
import styles from '/styles/Home.module.css'

const images=[ reverse_city, eurel, florida_beach ]
// const images=[ 
//   '/images/reverse_city.jpeg', 
//   '/images/eurel.jpeg',
//   '/images/florida_beach.jpeg'
// ]


const CarouselChart = () => {
  const [index,setIndex]=useState(0)
  const [index1,setIndex1]=useState(1)

  const [transToL,setTransToL]=useState(false)
  const [transToR,setTransToR]=useState(false)

  useEffect(()=>{
    if(transToR){
      setTimeout(()=>{
        setTransToR(false)
      },800)
    }
    if(transToL){
      setTimeout(()=>{
        setTransToL(false)
        setIndex((index+1)%images.length)
        setIndex1((index1+1)%images.length)
      },800)
    }
  },[transToL,transToR])

  const handlePrev=()=>{
    setTransToR(true)
    setTransToL(false)
    
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
    setTransToL(true)
    setTransToR(false)
  } 

  return (
    <>
    <div className='flex justify-center space-x-4 mt-16'>
      <button className='h-auto w-10 bg-red-300 font-extrabold text-3xl' onClick={handlePrev}>{'<'}</button>
        <div className={styles.overlapGrid}
        style={{
          width: '50vw',
          height: '30vh',
        }}
        >
          {/* 현재 이미지 */}
          <Image 
            className={ `
            object-contain 
            z-20 
            w-full h-full 
            border-solid border-4 border-red-500
              ${ transToL ? 'transition duration-500 ease-linear transform -translate-x-full' :
              (transToR ? 'animate-slideFromL' : '')}`}
            src={images[index]} 
            layout='responsive'
            objectFit='cover'
            alt=""
          />  
          {/* 이전 or 이후 이미지 */}
          <Image 
            className={`
            object-contain 
            z-0 
            w-full 
            h-full
            layout='responsive'
            
            ${transToL ? 'animate-slideFromR' : 
            (transToR ? 'transition duration-500 ease-linear transform translate-x-full': '')}`} 
            src={images[index1]}
            layout='responsive'
            objectFit='cover'
            alt=""
          />  
        </div>
      <button className='h-100 w-10 bg-red-300 font-extrabold text-3xl' onClick={handleNext}>{'>'}</button>
    </div>
    </>
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

