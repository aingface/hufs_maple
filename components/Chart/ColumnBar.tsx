import React from 'react';
import dynamic from 'next/dynamic'
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });
// import {donutData} from 'public/data/DonutData'
import { ApexOptions } from "apexcharts";
import styled from 'styled-components';


export interface ColumnProps{
  series: [{
    data:number[]
  }],
  options:ApexOptions,
}



const ColumnBarData:ColumnProps={
  series:[{
    data:[20,17,10,10,9,5,3,3,5]  
  }]
  ,
  options: {
    chart: {
      type: 'bar',
      height: 350,
    },
    plotOptions: {
      bar: {
          columnWidth:'45%',
          distributed: true,
      },
        
    },
    dataLabels: {
      enabled: false
    },

    title: {
      text: '서버 분포',
      align: 'center',
      // margin: 50,
      style:{
        fontFamily:'Maplestory_OTF_Light',
        fontSize:'30', 
      },
    },
    legend: {
      show: false,
    },
    xaxis: {
      categories: ['루나','엘리시움','스카니아','크로아','베라','오로라','이노시스','리부트2',['아케인','노바','리부트1','레드','제니스'] ],
      labels: {
        style: {
          fontSize: '12px'
        }
      }
    }
  },

};
const ColumnBar = () => {
  return (
    <ChartWrapper>
      <ApexChart 
        options={ColumnBarData.options} 
        series={ColumnBarData.series} 
        type="bar"
        width={600}
        height={600}
      />
    </ChartWrapper>
  );
};




export default ColumnBar;

const ChartWrapper=styled.div`
  width: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20vh 0;
  /* background-color: #7a7a7a; */
`