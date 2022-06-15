import React from 'react';
import dynamic from 'next/dynamic'
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });
import {PolarData} from 'public/data/ChartData'
import styled from 'styled-components';

const PolarArea = () => {
  return (
    <ChartWrapper>
      <p className='chart-title'>캠퍼스 별 학생 수</p>
      <ApexChart 
        options={PolarData.options}
        series={PolarData.series}
        type="polarArea" 
        width="500"
        // height='500'
        style={{
          // backgroundColor:'red'
        }}
      />
      <p className='chart-description'>모두 67명이 외메동과 함께 메이플을 즐기고 있어요</p>
    </ChartWrapper>
  );
};

export default PolarArea;

const ChartWrapper=styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  /* margin-top: 12vh; */
  .chart-description{
    font-family: NEXON_Lv2_Gothic_OTF;
    margin: 5vh 0 0 0;
  }
  .chart-title{
    font-size: 3vw;
    font-family: Maplestory_OTF_Light;
    margin: 0 0 5vh 0;
  }
  p{
    font-size: 1.5vw;
    font-weight: bold;
  }
  background-color: #f9f7f6;
  /* border: 2px solid red; */
`