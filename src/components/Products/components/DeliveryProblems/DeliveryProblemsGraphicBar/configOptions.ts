export default {
  options: {
    chart: {
      type: 'bar',
      toolbar: {
        show: false,
      },
    },

    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        borderRadius: 3,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent'],
    },
    xaxis: {
      labels: {
        rotate: 0,
        style: {
          fontSize: '0.9em',
        },
      },
    },
    yaxis: {
      decimalsInFloat: 0,
      title: {
        text: 'Frequência',
      },
    },
    fill: {
      opacity: 1,
    },

    responsive: [
      {
        breakpoint: 1280,
        options: {
          legend: {
            fontsize: '10px',
            position: 'bottom',
          },
        },
      },
    ],
  },
};
