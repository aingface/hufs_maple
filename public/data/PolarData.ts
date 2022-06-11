import { ApexOptions } from "apexcharts";

export interface PolarDataProps{
  series:number[],
  options:ApexOptions,
}

export const PolarData :PolarDataProps = {
  series: [29,38],
  options: {
    chart: {
      type: 'polarArea',
    },
    stroke: {
      show:false,
      // colors: ['#fff']
    },
    fill: {
      opacity: 0.9
    },
    // responsive: [{
    //   breakpoint: 480,
    //   options: {
    //     chart: {
    //       width: 500
    //     },
    //     legend: {
    //       position: 'bottom'
    //     }
    //   }
    // }],
    legend:{
      position: "left",
    }
    ,
    plotOptions: {
      polarArea: {
        rings: {
          strokeWidth: 0,
        },
        spokes: {
          strokeWidth: 0,
        }
      }
    },
    yaxis: {
      show: false
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
    dataLabels:{
      enabled:true,
      formatter: function(val, opt) {
        return opt.w.config.series[opt.seriesIndex]+'명' 
      },
      style:{
        fontFamily:'Maplestory_OTF_Light',
        fontSize:'20', 
      },
      background: {
        enabled:true,
        borderWidth:0,
        dropShadow:{
          enabled:false,
        },
      }
    },
    colors: ['rgb(251,63,33)', 'rgb(241,200,71)'],

  },
}


//도넛 차트 데이터 및 옵션
// export const donutData :DonutDataProps = {
//   series: [29,38],
  
//   options: {
//     chart: {
//       type: 'donut',
//     },
//     legend: {
//       position: 'bottom'
//     },
//     responsive: [{
//       breakpoint: 1000,
//     }],
//     plotOptions: {
//       pie: {
//         expandOnClick: true,
//         donut: {
//           size:'60%',
//           labels: {
//             show: true,
//             total: {
//               showAlways: true,
//               show: true,
//               label: 'Total',
//               fontSize: '1.2vw',
//               fontFamily:'Maplestory_OTF_Light',
//             },
//             value: {
//               fontSize: '22px',
//               show: true,
//               fontFamily:'Maplestory_OTF_Light',
//             },
//           },
//         }
//       }
//     },
//     labels: ["글로벌캠", "서울캠"],
//     title: {
//       text: '캠퍼스 별 학생 수',
//       align: 'center',
//       style:{
//         fontFamily:'Maplestory_OTF_Light',
//         fontSize:'30', 
//       }
//     },
//      dataLabels: {
//       enabled: true,
//     },
//     colors: ['rgb(251,63,33)', 'rgb(241,200,71)'],

//     stroke: {
//       show: false,
//     },
//     yaxis:{
//       show:false
//     }
//   },
// }