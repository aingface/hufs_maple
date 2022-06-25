import React, { ReactNode } from 'react';
import dynamic from 'next/dynamic'
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });
import {BarData} from 'public/data/ChartData'
import styled from 'styled-components';

const Bar= () => {
  return (
    <ChartWrapper>
      <p className='chart-title'>마을 별 분포</p>
      <ApexChart 
        options={BarData.options}
        series={BarData.series}
        type="bar" 
        style={{
          // border:'1px solid red',
          width:'90%',
        }}
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
  /* margin-top: 12vh; */
  .chart-description{
    font-family: NEXON_Lv2_Gothic_OTF;
    margin: 5vh 0 0 0;
  }
  .chart-title{
    font-size: clamp(1rem,3vw,1.5rem);
    font-family: Maplestory_OTF_Light;
    margin: 5vh 0;
  }
  p{
    font-size: 1.5vw;
    font-weight: bold;
  }

  @keyframes chart-ani{
    0%{
      opacity: 0;
      transform: translateY(3vh);
    }
    100%{
      transform: translateY(0);
    }
  }

  animation: chart-ani 0.4s linear;
  /* background-color: #f9f7f6; */
  /* border: 2px solid green; */
`

export default Bar;