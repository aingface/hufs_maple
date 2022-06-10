import { ApexOptions } from "apexcharts";

export interface DonutDataProps{
  series:number[],
  options:ApexOptions,
}


//도넛 차트 데이터 및 옵션
export const donutData :DonutDataProps = {
  series: [29,38],
  
  options: {
    chart: {
      type: 'donut',
    },
    legend: {
      position: 'bottom'
    },
    responsive: [{
      breakpoint: 1000,
    }],
    plotOptions: {
      pie: {
        expandOnClick: true,
        donut: {
          size:'60%',
          labels: {
            show: true,
            total: {
              showAlways: true,
              show: true,
              label: '총인원',
              fontSize: '2vw',
              fontFamily:'Maplestory_OTF_Light',
            },
            value: {
              fontSize: '22px',
              show: true,
              fontFamily:'Maplestory_OTF_Light',
            },
          },
        }
      }
    },
    labels: ["글로벌캠", "서울캠"],
    title: {
      text: '캠퍼스 별 학생 수',
      align: 'center',
      style:{
        fontFamily:'Maplestory_OTF_Light',
        fontSize:'30', 
      }
    },
     dataLabels: {
      enabled: true,
    },
    colors: ['rgb(251,63,33)', 'rgb(241,200,71)'],

    stroke: {
      show: false,
    },
  },
}