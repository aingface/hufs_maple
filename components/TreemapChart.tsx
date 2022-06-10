import React from 'react';
import dynamic from 'next/dynamic'
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });
// import {donutData} from 'public/data/DonutData'
import { ApexOptions } from "apexcharts";
import styled from 'styled-components';


export interface TreeMapDataProps{
  series: any,
  options:ApexOptions,
}


const treemapData:TreeMapDataProps={
  series: [
    {
      data: [
        {
          x: '루나',
          y: 20
        },
        {
          x: '엘리시움',
          y: 17
        },
        {
          x: '스카니아',
          y: 10
        },
        {
          x: '크로아',
          y: 10
        },
        {
          x: '베라',
          y: 9
        },
        {
          x: '오로라',
          y: 5
        },
        {
          x: '이노시스',
          y: 3
        },
        {
          x: '리부트2',
          y: 3
        },
        {
          x: '아케인',
          y: 1
        },
        {
          x: '노바',
          y: 1
        },
        {
          x: '리부트',
          y: 1
        },
        
        {
          x: '레드',
          y: 1
        },
        {
          x: '제니스',
          y: 1
        }
      ]
    }
  ],
  
  options: {
    chart: {
      type: 'treemap'
    },
    legend: {
      show: false
    },
    
    title: {
      text: 'Distibuted Treemap (different color for each cell)',
      align: 'center'
    },
    colors: [
      '#f7c30f',
      '#d5cdc9',
      '#175eb8',
      '#b0840a',
      '#870406',
      '#6b92c9',
      '#242424',
      '#1c6573',
      '#41b7df',
      '#294d63',
      '#cc0068',
      '#112946'
    ],
    plotOptions: {
      treemap: {
        distributed: true,
        enableShades: false
      }
    },
  },


};







const TreemapChart = () => {
  return (
    <ChartWrapper>
      <ApexChart 
        options={treemapData.options} 
        series={treemapData.series} 
        type="treemap"
        width={500} 
      >

      </ApexChart>
    </ChartWrapper>
  );
};




export default TreemapChart;

const ChartWrapper=styled.div`
  width: 45vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1vh, 2vh;
  /* background-color: aqua; */
`