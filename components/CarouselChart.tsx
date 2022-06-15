import React, {useEffect, useState } from 'react';
import Image from 'next/image';
import reverse_city from '/public/images/reverse_city.jpeg'
import eurel from '/public/images/eurel.jpeg'
import florida_beach from '/public/images/florida_beach.jpeg'
import styled from 'styled-components';
import styles from '/styles/Home.module.css'
import PolarArea from 'components/Chart/PolarArea'
import Bar from 'components/Chart/Bar'
import ColumnBar from 'components/Chart/ColumnBar';



interface Props{
  positionY:number;
  innerWidth:number;
}

const images=[ reverse_city, eurel, florida_beach ];
const charts=[<PolarArea/>,<ColumnBar/>,<Bar/>];
const charts1=Bar;

const CarouselChart = () => {
  const [index,setIndex]=useState(0)
  const [index1,setIndex1]=useState(1)

  const [transPrev,setTransPrev]=useState(false)
  const [transNext,setTransNext]=useState(false)

  useEffect(()=>{
    if(transNext){
      setTimeout(()=>{
        setTransNext(false)
      },800)
    }
    if(transPrev){
      setTimeout(()=>{
        setTransPrev(false)
        setIndex((index+1)%images.length)
        setIndex1((index1+1)%images.length)
      },800)
    }
  },[transPrev,transNext])

  const handlePrev=()=>{
    console.log('prev')
    setTransNext(true)
    setTransPrev(false)
    
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
    console.log('next')
    setTransPrev(true)
    setTransNext(false)
  } 

  return (
    <ChartWrapper>
      <div className='chart-slider-wrapper bg-black flex justify-center items-center space-x-4 mt-24'>
        <button  className="h-auto w-10 bg-yellow-800 font-extrabold text-3xl cursor-pointer"
          onClick={handlePrev}
        >
          {'<'}
        </button>
        <div
          style={{
            width: '50vw',
            height: '50vh',
            display: 'flex',
            justifyContent:'center',
            alignItems:'center'
            // backgroundColor: '#23a858bc',
          }}
        >      
          <div className={styles.overlapGrid}
            style={{
              width: '100%',
              // height: '30vh',
              overflow:'hidden',
              // backgroundColor: '#8740e9b8',
            }}
          >
            {/* 현재 차트 */}
            <div className={ `
              object-contain 
              z-20 
              w-full h-full 
                ${ transPrev ? 'transition duration-500 ease-linear transform -translate-x-full' :
                (transNext ? 'animate-slideToR' : '')}`
            }>
              {charts[index]}
            </div>
            {/* 이전 or 다음 차트 */}
            <div className={`
                object-contain 
                z-0 
                w-full h-full
                ${transPrev ? 'animate-slideToL' : 
                (transNext ? 'transition duration-500 ease-linear transform translate-x-full': '')}`} >
              { charts[index1]}
            </div>  
          </div>
        </div>
        <button  className="h-auto w-10 bg-yellow-800 font-extrabold text-3xl cursor-pointer" 
            onClick={handleNext}
            >
            {'>'}
          </button>
      </div>
    </ChartWrapper>
  );
};

export default CarouselChart;

const ChartWrapper=styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 350px;
  height: 100vh;
  width: 50vw;
`
