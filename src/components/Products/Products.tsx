import { Box, Flex, Text } from '@chakra-ui/react';
import { Props } from 'framer-motion/types/types';
import { useEffect } from 'react';

import { DataAvarage } from './components/DataAvarage/DataAvarage';
import DeliveryStatus from './components/DeliveryStatus/DeliveryStatus';
import BarGraphic from './components/graphics/Bar/Bar';
import PieGraphic from './components/graphics/Pie/Pie';
import { ProductInformation } from './components/ProductInformation/ProductInformation';

import { usePromisses } from '@/hooks/usePromisses';

// const Chart = ({})=>
export function Products() {
  const { isloading, error, data, setPath } = usePromisses();

  const gap = '5px';

  const state3: Props = {
    series: [44, 55, 13],

    options: {
      chart: {
        type: 'pie',
      },
      labels: ['Team A', 'Team B', 'Team C'],
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
              position: 'bottom',
            },
          },
        },
      ],
    },
  };

  const state4: Props = {
    series: [44, 55],

    options: {
      chart: {
        height: '100%',
        type: 'pie',
      },
      labels: ['Team A', 'Team B'],
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
              width: '80%',
              type: 'pie',
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

  const state: Props = {
    series: [44, 55, 57, 18, 36],
    options: {
      chart: {
        type: 'pie',
        offsetY: 10,
      },
      labels: ['Team A', 'Team B', ' Team C', ' Team D', 'Team E'],
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

  const state2: Props = {
    series: [
      {
        data: [
          {
            y: 19,
            x: 'Falta de dados de remetente',
            fillColor: '#004C6D',
          },
          {
            y: 10,
            x: 'Emabalagem violada',
            fillColor: '#5886A5',
          },
          {
            y: 5,
            x: 'Produto errado',
            fillColor: '#9CC5DF',
          },
        ],
      },
    ],

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
            fontSize: '0.6em',
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

  useEffect(() => {
    setPath('https://621584abc9c6ebd3ce2a353c.mockapi.io/api/ps/products-by-status');
  }, []);

  return (
    <Flex pt="20px" flexWrap={['wrap', 'nowrap']} justify="center" maxW={'90em'} m="0 auto">
      <Flex flex={'1'} flexDir="column">
        <ProductInformation isloading={isloading} error={error} data={data} />
        <Flex flexDir="column">
          <Flex flex="1">
            <Flex flex="1" minH="200px" flexDir="column">
              <Flex
                flexDir="column"
                borderRadius="10px"
                bg="white.50"
                m={`${gap}`}
                padding="10px"
                flex="1"
                fontWeight="600"
              >
                <Text>Status das entregas</Text>
                <Box m="0 auto">
                  <PieGraphic
                    options={state3.options}
                    series={state3.series}
                    width="100%"
                    key="1"
                  />
                </Box>
              </Flex>
              <Flex
                flexDir="column"
                borderRadius="10px"
                bg="white.50"
                m={`${gap}`}
                p="10px"
                flex="1"
                fontWeight="600"
              >
                <Text>Problemas da entrega</Text>
                <Box m="0 auto">
                  <PieGraphic options={state4.options} series={state4.series} />
                </Box>
              </Flex>
            </Flex>
            <Box borderRadius="10px" bg="white.50" flex="1" m={`${gap}`} p="10px">
              <Text fontWeight="600">Total de não conformidades por fase</Text>
              <Box h="100%">
                <PieGraphic options={state.options} series={state.series} />
              </Box>
            </Box>
          </Flex>
          <Box borderRadius="10px" bg="white.50" m={`${gap}`} p="10px">
            <Text fontWeight="600">Motivo de bloqueio nas entregas</Text>
            <Box>
              <BarGraphic options={state2.options} series={state2.series} width="90%" />
            </Box>
          </Box>
        </Flex>
      </Flex>
      <Flex flexDir="column" flex={'1'}>
        <DataAvarage />
        <DeliveryStatus />
      </Flex>
    </Flex>
  );
}
