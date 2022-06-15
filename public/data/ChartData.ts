import { ApexOptions } from "apexcharts";

export interface PolarDataProps{
  series:number[],
  options:ApexOptions,
}
export interface BarDataProps{
  series: [{
    data:number[]
  }],
  options:ApexOptions,
}

export const PolarData :PolarDataProps = {
  series: [29,38],
  options: {
    chart: {
      width: '100%',
      // height: '100%',
      type: 'polarArea',
    },
    stroke: {
      show:false,
    },
    fill: {
      opacity: 1
    },
    legend:{
      position: "left",
    }
    ,
    responsive: [{
      breakpoint: 400,
      options: {},
    }],
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
    colors: ['#7D02EB', '#00B1F2'],
  },
}

export const ColumnBarData:BarDataProps={
  series:[{
    data:[20,17,10,10,9,5,3,3,5]  
  }],
  options: {
    chart: {
      type: 'bar',
      width: '100%',
      toolbar:{
        show:false
      },
    },
    theme: {
      palette: 'palette10', 
    },
    plotOptions: {
      bar: {
        borderRadius: 2,
        columnWidth: '45%',
        distributed: true,
        horizontal: false,

      },  
    },
    labels: ['루나','엘리시움','스카니아','크로아','베라','오로라','이노시스','리부트2','test' ],
    dataLabels: {
      enabled: false
    },
    legend: {
      show: false,
    },
    xaxis: {
      categories: ['루나','엘리시움','스카니아','크로아','베라','오로라','이노시스','리부트2',['아케인','노바','리부트1','레드','제니스'] ],
      labels: {
        style: {
          fontSize: '10px'
        }
      }
    },
  },

};

//마을 별 분포
//바차트 데이터 및 옵션
export const BarData :BarDataProps = {
  series:[{
      data:[1,2,13,10,9,13,9,2,6],
  }], 
  options: {
    chart: {
      type: 'bar',
      width: '100%',
      // height: '100%',
      toolbar:{
        show:false
      },
    },
    theme: {
      palette: 'palette10', 
    },
    plotOptions: {
      bar:{
        borderRadius:2,
        columnWidth:'45%',
        distributed: true,
        horizontal:true,
      },
    },
    dataLabels: {
      enabled:false,
    },
    legend: {
      show: false,
    },
    xaxis:{
      type: 'category',
      categories:['아르카나','모라스','에스페라','셀라스','문브릿지','미궁','리멘','세르니움','후르니움','호텔'],
      labels:{
        style: {
          fontSize: '12px'
        }
      }
    },
  },
}

