export default {
  options: {
    chart: {
      type: 'pie',
    },

    colors: ['#004C6D', '#9CC5DF'],
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
