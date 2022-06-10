import React from 'react';
import dynamic from 'next/dynamic'
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });
import {donutData} from 'public/data/DonutData'

const DonutChart = () => {
  return (
    <div>
      <ApexChart 
        options={donutData.options}
        series={donutData.series}
        type="donut" 
        width="500"
      />
    </div>
  );
};

export default DonutChart;