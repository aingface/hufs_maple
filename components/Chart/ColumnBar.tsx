import React from 'react';
import dynamic from 'next/dynamic'
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });
import {ColumnBarData} from 'public/data/ChartData'
import { ApexOptions } from "apexcharts";
import styled from 'styled-components';

const ColumnBar = () => {
  return (
    <ChartWrapper>
      <p className='chart-title'>활동 서버 분포</p>
      <ApexChart 
        options={ColumnBarData.options} 
        series={ColumnBarData.series} 
        type="bar"
        style={{
          // border:'1px solid red',
          width:'90%',
        }}
      />
      <p className='chart-description'>많은 분들이 도시서버에서 플레이를 하고 있어요</p>
    </ChartWrapper>
  );
};

export default ColumnBar;

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
  /* border: 2px solid blue; */
`