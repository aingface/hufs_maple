import React, { useState } from 'react';
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
  const innerWidth=useSelector((state:IState)=> state.windowSize.innerWidth );
  const innerHeight=useSelector((state:IState)=> state.windowSize.innerHeight );

  const [activatedIdx,setActivatedIdx]=useState(0);

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
    <ChartContainer>
      <ToggleBtnWrapper>
        {ToggleBtnList}
      </ToggleBtnWrapper>
      <ChartWrapper
        innerWidth={innerWidth} 
        innerHeight={innerHeight}
      >    
        {charts[activatedIdx]}
      </ChartWrapper>
    </ChartContainer>
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
  position:absolute;
  width: 100vw;
  height: clamp(2rem,15vh,2.5rem);
  display: flex;
  justify-content: flex-start;
  border-bottom: 2px solid #92929223;
  z-index:3;
  /* background: #1154ff; */
  /* border:2px solid red; */
`
const ChartWrapper=styled.div<Props>`
  width : ${props=>props.innerWidth*1.5<props.innerHeight ? '90vw':'35vw'};
  margin: auto 0;
  display: flex;
  align-items: center;

  // background-color: #94bde0;
`
const ChartContainer=styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 350px;
  height: 100vh;
  width: 100vw;

  /* border:2px solid yellow; */
  /* background-color: #8f69b5; */
`
