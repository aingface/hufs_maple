import React, {useEffect, useState } from 'react';
import styled from 'styled-components';
import PolarArea from 'components/Chart/PolarArea'
import Bar from 'components/Chart/Bar'
import ColumnBar from 'components/Chart/ColumnBar';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

interface Props{
  positionY:number;
  innerWidth:number;
}

interface btnProps{
  chartIdx:number;
  activatedIdx:number;
}

const charts=[<PolarArea/>,<ColumnBar/>,<Bar/>];

const Charts = () => {
  const [activatedIdx,setActivatedIdx]=useState(0);

  const handleOnClickBtn=(event:React.MouseEvent,btnNum:number)=>{
    setActivatedIdx(btnNum)
  }  

  return (
    <ChartBoardWrapper>
      <ToggleBtnWrapper>
        <ToggleBtn onClick={event=>handleOnClickBtn(event,0)} key={1} activatedIdx={activatedIdx}  chartIdx={0}>학생 수</ToggleBtn>
        <ToggleBtn onClick={event=>handleOnClickBtn(event,1)} key={2} activatedIdx={activatedIdx} chartIdx={1}>서버 분포</ToggleBtn>
        <ToggleBtn onClick={event=>handleOnClickBtn(event,2)} key={3} activatedIdx={activatedIdx} chartIdx={2}>진출 마을</ToggleBtn>
      </ToggleBtnWrapper>
      <ChartWrapper>    
        {charts[activatedIdx]}
      </ChartWrapper>
    </ChartBoardWrapper>
  );
};

export default Charts;

const ToggleBtn=styled.button<btnProps>`
  width: 100%;
  height: 2vh;
   padding-bottom: 2vh;
  :hover{
    background-color: #92929223;
  }

  border-bottom: ${props=> props.chartIdx===props.activatedIdx ? '2.5px solid #5792ff' :'' };
`
const ToggleBtnWrapper=styled.div`
  width: 100%;
  height: 5vh;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
 
`
const ChartWrapper=styled.div`
  width  : 100%;
  height: 50%;
  margin: 10vh 0;
  display: flex;
  align-items: flex-start;

  /* background-color: #94bde0; */

`
const ChartBoardWrapper=styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 350px;
  height: 100vh;
  width: 50vw;

  /* background-color: #8f69b5; */
`
