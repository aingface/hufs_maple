import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend);
import styled from 'styled-components';
import { pieChartData } from 'public/data/pieChartData';
// import { options } from 'public/data/pieChartData';


export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom' as const,
    },
    title: {
      display: true,
      text: 'test',
    },
  },
};

const PieChart = () => {
  return (
    <Wrapper>
      <p>캠퍼스별 인원</p>      
      <Doughnut data={pieChartData} 
        options={options}
      />
    </Wrapper>
  )
}


const Wrapper=styled.div`
  background-color: #4747474f;
  /* z-index: 1000; */
  width: 50vw;
  /* height: 30vh; */
  p{
    font-size:5vh;
  }
`



export default PieChart;