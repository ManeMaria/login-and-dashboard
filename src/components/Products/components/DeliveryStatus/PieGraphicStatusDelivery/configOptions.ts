export default {
  options: {
    chart: {
      type: 'pie',
    },
    colors: ['#E8596C', '#FFCA83', '#47B27C'],
    legend: {
      markers: {
        width: 13,
        height: 6,
      },
    },
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      pie: {
        customScale: 0.9,
      },
    },
    responsive: [
      {
        breakpoint: 1360,
        options: {
          chart: {
            type: 'pie',
          },
          legend: {
            fontsize: '10px',
          },
        },
      },
    ],
  },
};
