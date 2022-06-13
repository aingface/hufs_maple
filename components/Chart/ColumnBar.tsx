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
        width={600}
        height={600}
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
  width: 60vw;
  margin-top: 10vh;
  .chart-description{
    font-family: NEXON_Lv2_Gothic_OTF;
    margin: 1vh 0;
  }
  .chart-title{
    font-size: 3vw;
    font-family: Maplestory_OTF_Light;
    margin: 5vh 0;
  }
  /* background-color: aqua; */
`