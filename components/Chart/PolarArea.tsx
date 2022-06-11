import React from 'react';
import dynamic from 'next/dynamic'
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });
import {PolarData} from 'public/data/PolarData'
import styled from 'styled-components';

const DonutChart = () => {
  return (
    <ChartWrapper>
      <ApexChart 
        options={PolarData.options}
        series={PolarData.series}
        type="polarArea" 
        width="450"
        height='450'
      />
    </ChartWrapper>
  );
};

export default DonutChart;

const ChartWrapper=styled.div`
  width: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20vh 0vh;
  /* background-color: aqua; */
`