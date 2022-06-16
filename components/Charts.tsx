import React, {useEffect, useState } from 'react';
import styled from 'styled-components';
import PolarArea from 'components/Chart/PolarArea'
import Bar from 'components/Chart/Bar'
import ColumnBar from 'components/Chart/ColumnBar';


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
  const tabTitle=['학생 수','서버 분포', '진출 지역']
  const ToggleBtnList=tabTitle.map((item,idx)=>
    <ToggleBtn onClick={event=>handleOnClickBtn(event,idx)} key={idx} activatedIdx={activatedIdx}  chartIdx={idx}>{item}</ToggleBtn>
  )

  return (
    <ChartBoardWrapper>
      <ToggleBtnWrapper>
        {ToggleBtnList}
      </ToggleBtnWrapper>
      <ChartWrapper>    
        {charts[activatedIdx]}
      </ChartWrapper>
    </ChartBoardWrapper>
  );
};

export default Charts;

const ToggleBtn=styled.button<btnProps>`
  width: 10%;
  height: 5vh;
  /* padding-bottom: 3vh; */
  display :flex;
  justify-content: center;
  align-items: center;
  :hover{
    background-color: #92929223;
  }
  
  border-bottom: ${props=> props.chartIdx===props.activatedIdx ? '2.5px solid #5792ff' :'' };
`
const ToggleBtnWrapper=styled.div`
  width: 100vw;
  height: 5vh;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  flex-direction: row;
  border-bottom: 2px solid #92929223;
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
