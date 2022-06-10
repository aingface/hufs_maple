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
          size:'80%',
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
              color: 'blue',
              fontFamily:'Maplestory_OTF_Light',
            },
          },
        }
      }
    },
    labels: ["글캠", "서울캠"],
    title: {
      text: '캠퍼스 별 학생 수',
      align: 'center'
    },
     dataLabels: {
      enabled: true,
      // formatter: function (val:number) {
      //   return val + "%"
      // },
      // dropShadow: {
      //   enabled:false,
      // }
    }
  },
}