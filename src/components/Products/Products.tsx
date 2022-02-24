import { Grid, Box, Flex, Image, Text } from '@chakra-ui/react';
import { Props } from 'framer-motion/types/types';
import ReactApexChart from 'react-apexcharts';

import { Select } from '../Select/Select';

import { infoProducts } from './fakeValues';
import TableInfo from './table/TableInfo';

import ifinishedDeliveriesAverage from '@/assets/icons/i-distance.svg';
import ilackOfCosturmers from '@/assets/icons/i-lack-of-costurmers.svg';
import iMeanDelivary from '@/assets/icons/i-mean-delivary.svg';
import iNotPerformed from '@/assets/icons/not-performed.svg';

// const Chart = ({})=>
export function Products() {
  const gap = '5px';

  const igms = [iMeanDelivary, ilackOfCosturmers, ifinishedDeliveriesAverage, iNotPerformed];

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
          customScale: 0.7,
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
          customScale: 0.7,
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

  return (
    <Flex pt="20px" flexWrap={['wrap', 'nowrap']} justify="center" w={'100%'}>
      <Box>
        <Flex>
          {infoProducts.map((info, i) => (
            <Grid
              flexDir="column"
              flexBasis="180px"
              minH="100px"
              borderRadius="10px"
              key={i}
              bg="white.50"
              m={`${gap}`}
              fontSize="0.9em"
              padding="10px"
              fontWeight="600"
              alignItems="cener"
            >
              <Text fontSize="0.8em">{info.title}</Text>
              <Flex h="100%" m="auto" textAlign="end" alignItems="flex-end">
                <Flex fontSize="1.7em">
                  <Box>97</Box>
                </Flex>
                <Text fontSize="0.8em" m="0 5px">
                  produtos
                </Text>
                <Text>15%</Text>
              </Flex>
            </Grid>
          ))}
        </Flex>
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
                  <ReactApexChart options={state3.options} series={state3.series} type="pie" />
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
                  <ReactApexChart options={state4.options} series={state4.series} type="pie" />
                </Box>
              </Flex>
            </Flex>
            <Box borderRadius="10px" bg="white.50" flex="1" m={`${gap}`} p="10px">
              <Text fontWeight="600">Total de não conformidades por fase</Text>
              <Box h="100%">
                <ReactApexChart
                  options={state.options}
                  series={state.series}
                  type="pie"
                  height={'auto'}
                />
              </Box>
            </Box>
          </Flex>
          <Box borderRadius="10px" bg="white.50" m={`${gap}`} p="10px">
            <Text fontWeight="600">Motivo de bloqueio nas entregas</Text>
            <Flex justifyContent="center" overflow="hidden">
              <ReactApexChart options={state2.options} series={state2.series} type="bar" />
            </Flex>
          </Box>
        </Flex>
      </Box>
      <Flex flexDir="column">
        <Flex>
          {infoProducts.map((info, i) => (
            <Grid
              flexBasis="180px"
              minH="100px"
              borderRadius="10px"
              key={i}
              bg="white.50"
              m={`${gap}`}
              fontSize="0.9em"
              padding="10px"
              pos="relative"
              fontWeight="600"
            >
              <Flex pos="absolute" top="-10px" left="0" justify="center" w={'100%'}>
                <Image src={igms[i]} w="20px" />
              </Flex>
              <Text fontSize="0.8em">{info.title}</Text>
              <Flex h="100%" m="auto" alignItems="flex-end">
                <Text fontSize="1.7em">97</Text>
                <Text fontSize="0.8em" m="0 5px">
                  produtos
                </Text>
              </Flex>
            </Grid>
          ))}
        </Flex>
        <Box borderRadius="10px" bg="white.50" flex="1" h="100%" m={`${gap}`} p="10px">
          <Box>
            <Flex h="30px">
              <Text
                h="100%"
                fontWeight="600"
                p=" 0 0  8px 0"
                borderBottom="3px solid"
                borderColor="green.200"
                w="20%"
              >
                Entregas
              </Text>
              <Box borderBottom="1px solid" borderColor="gray.100" w="100%" h="100%" p="5px" />
            </Flex>
            <Box w="50%">
              <Select label="Status da entrega">
                <option>Entregue</option>
              </Select>
            </Box>
            <TableInfo />
          </Box>
        </Box>
      </Flex>
    </Flex>
  );
}
