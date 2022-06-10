export const pieChartData = {
  labels: ['글로벌캠퍼스','서울캠퍼스'],
  datasets: [
    {
      label: '# of Votes',
      data: [29,38],
      backgroundColor: [
        'rgb(96,83,173)',
        'rgb(221, 94, 65)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(221, 94, 65 )',
      ],
      borderWidth: 0,
      spacing: 2,
      hoverBackgroundColor: [
        "#FF6384",
        "#36A2EB",
      ],
    },
  ],
};


export const options= {
  elements: {
    center: {
      text: 'Red is 2/3 of the total numbers',
      color: '#FF6384', // Default is #000000
      fontStyle: 'Arial', // Default is Arial
      sidePadding: 20, // Default is 20 (as a percentage)
      minFontSize: 25, // Default is 20 (in px), set to false and text will not wrap.
      lineHeight: 25 // Default is 25 (in px), used for when text wraps
    }
  }
};