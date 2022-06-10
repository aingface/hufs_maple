import React from 'react';
import dynamic from 'next/dynamic'
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });
// import {donutData} from 'public/data/DonutData'
import { ApexOptions } from "apexcharts";
import styled from 'styled-components';


export interface BarDataProps{
  series: any,
  options:ApexOptions,
}

//마을 별 분포
//바차트 데이터 및 옵션
export const barData :BarDataProps = {
  series:[
    {
      name:'test name',
      data:[4,1,2,13,10,9,13,9,2,6],
    }
  ], 
  options: {
    chart: {
      type: 'bar',
    },
    theme: {
      monochrome: {
        enabled: true,
        color: '#abd520',
        shadeTo: 'light',
        shadeIntensity: 0.65
      }
    },

    xaxis:{
      type: 'category',
      categories:['신원미상','아르카나','모라스','에스페라','셀라스','문브릿지','미궁','리멘','세르니움','후르니움','호텔'],
      
      labels:{
        style:{
          fontFamily:'Maplestory_OTF_Light',
        }
      }
    
    },
    plotOptions: {
      bar:{
        borderRadius:3,
        horizontal:true,
      },
    },
    title: {
      text: '마을 별 분포',
      align: 'center',
      style:{
        fontFamily:'Maplestory_OTF_Light',
        fontSize:'30',
      }
    },
    dataLabels: {
      style: {
        fontFamily:'Maplestory_OTF_Light',
        colors: ['#000000']
      }
    }
  },
}



const BarChart = () => {
  return (
    <ChartWrapper>
      <ApexChart 
        options={barData.options}
        series={barData.series}
        type="bar" 
        // width='400'
        height='500'
      />
    </ChartWrapper>
  );
};

const ChartWrapper=styled.div`
  width: 45vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 3vh;
`

export default BarChart;