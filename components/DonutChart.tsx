import React from 'react';
import dynamic from 'next/dynamic'
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });
import {donutData} from 'public/data/DonutData'
import styled from 'styled-components';

const DonutChart = () => {
  return (
    <ChartWrapper>
      <ApexChart 
        options={donutData.options}
        series={donutData.series}
        type="donut" 
        // width="500"
        height='500'

      />
    </ChartWrapper>
  );
};

export default DonutChart;

const ChartWrapper=styled.div`
  width: 45vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1vh, 2vh;
  /* background-color: aqua; */
`