export default {
  options: {
    chart: {
      type: 'pie',
      offsetY: 10,
    },

    colors: ['#46CE8A', '#6A59E8', '#E8596C', '#A4BD8C', '#FFCA83'],
    legend: {
      height: 65,
      offsetY: 18,
      width: 300,
      position: 'bottom',
      horizontalAlign: 'left',
      markers: {
        width: 13,
        height: 6,
      },
    },
    dataLabels: {
      enabled: false,
    },

    responsive: [
      {
        breakpoint: 1360,
        options: {
          chart: {
            type: 'pie',
            offsetY: 20,
          },
          legend: {
            fontsize: '10px',
            position: 'bottom',
          },
        },
      },
    ],
  },
};
