import React from 'react';
import dynamic from 'next/dynamic'
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });
import {BarData} from 'public/data/ChartData'
import styled from 'styled-components';

const Bar = () => {
  return (
    <ChartWrapper>
      <p className='chart-title'>마을 별 분포</p>
      <ApexChart 
        options={BarData.options}
        series={BarData.series}
        type="bar" 
        width='350'
        // height='500'
      />
      <p className='chart-description'>에스페라 ~ 리멘 사이 유저가 가장 많아요</p>
    </ChartWrapper>
  );
};

const ChartWrapper=styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin-top: 12vh;
  .chart-description{
    font-family: NEXON_Lv2_Gothic_OTF;
    margin: 5vh 0;
  }
  .chart-title{
    font-size: 3vw;
    font-family: Maplestory_OTF_Light;
    margin: 5vh 0;
  }
  p{
    font-size: 1.5vw;
    font-weight: bold;
  }
  /* background-color: aqua; */
`

export default Bar;