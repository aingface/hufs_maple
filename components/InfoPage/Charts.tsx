import React, {useEffect, useState } from 'react';
import styled from 'styled-components';
import PolarArea from 'components/Chart/PolarArea'
import Bar from 'components/Chart/Bar'
import ColumnBar from 'components/Chart/ColumnBar';

import { useSelector } from 'react-redux';
import { IState } from 'store/modules';

interface Props{
  innerWidth:number;
  innerHeight:number;
}

interface btnProps{
  chartIdx:number;
  activatedIdx:number;
}

const charts=[<PolarArea/>,<ColumnBar/>,<Bar/>];

const Charts = () => {
  
  // const [innerWidth, setInnerWidth]=useState(0);
  // const [innerHeight, setInnerHeight]=useState(0);

  const innerWidth=useSelector((state:IState)=> state.windowSize.innerWidth );
  const innerHeight=useSelector((state:IState)=> state.windowSize.innerHeight );

  const [activatedIdx,setActivatedIdx]=useState(0);

  // useEffect(()=>{
  //   setInnerWidth(window.innerWidth);
  //   setInnerHeight(window.innerHeight);
  // },[])

  const handleOnClickBtn=(event:React.MouseEvent,btnNum:number)=>{
    setActivatedIdx(btnNum)
  }  
  const tabTitle=['인원','서버 분포', '진출 지역']
  const ToggleBtnList=tabTitle.map((item,idx)=>
    <ToggleBtn 
      onClick={event=>handleOnClickBtn(event,idx)} 
      key={idx} 
      activatedIdx={activatedIdx}  
      chartIdx={idx}>{item}
    </ToggleBtn>
  )

  return (
    <>
      <ToggleBtnWrapper>
        {ToggleBtnList}
      </ToggleBtnWrapper>
      <ChartBoardWrapper>
        <ChartWrapper
          innerWidth={innerWidth} 
          innerHeight={innerHeight}
        >    
          {charts[activatedIdx]}
        </ChartWrapper>
      </ChartBoardWrapper>
    </>
  );
};

export default Charts;

const ToggleBtn=styled.button<btnProps>`
  width: clamp(5rem,17vw,7rem);
  height: 100%;
  display :flex;
  justify-content: center;
  align-items: center;
  font-size: clamp(0.7rem,3vw,1rem);
  :hover{
    background-color: #92929223;
  }
  
  border-bottom: ${props=> props.chartIdx===props.activatedIdx ?
    '2.5px solid #5792ff' :'' };
  
  // background: red;
`
const ToggleBtnWrapper=styled.div`
  width: 100vw;
  height: clamp(2rem,15vh,2.5rem);
  display: flex;
  justify-content: flex-start;
  border-bottom: 2px solid #92929223;
  z-index:3;
  /* background: #1154ff; */
  /* border:2px solid red; */
  margin-top: 1.1rem;
`
const ChartWrapper=styled.div<Props>`
  width : ${props=>props.innerWidth*1.5<props.innerHeight ? '90vw':'35vw'};
  margin: 10vh 0;
  display: flex;
  align-items: center;

  /* background-color: #94bde0; */
`
const ChartBoardWrapper=styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 350px;
  height: 100vh;
  width: 100vw;
  
  /* background-color: #8f69b5; */
`
