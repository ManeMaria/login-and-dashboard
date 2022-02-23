import { Box, Flex, Text } from '@chakra-ui/react';
import { ApexOptions } from 'apexcharts';
import ReactApexChart from 'react-apexcharts';

import { Select } from '../Select/Select';

import { infoProducts } from './fakeValues';
interface IApexOptions extends ApexOptions {
  endingShape?: string;
}
interface Props {
  type?:
    | 'line'
    | 'area'
    | 'bar'
    | 'histogram'
    | 'pie'
    | 'donut'
    | 'radialBar'
    | 'scatter'
    | 'bubble'
    | 'heatmap'
    | 'treemap'
    | 'boxPlot'
    | 'candlestick'
    | 'radar'
    | 'polarArea'
    | 'rangeBar';
  series?: Array<any>;
  width?: string | number;
  height?: string | number;
  options?: IApexOptions;
  [key: string]: any;
}

// const Chart = ({})=>
export function Products() {
  const gap = '5px';
  // infoProducts
  const state: Props = {
    series: [44, 55, 13, 43, 22],
    options: {
      chart: {
        // width: '50%',
        height: '100%',
        type: 'pie',
      },
      labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
      responsive: [
        {
          breakpoint: 500,
          options: {
            chart: {
              width: 200,
            },
            legend: {
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
        name: 'ocorrência',
        data: [7, 6.5, 4.5],
      },
    ],
    options: {
      chart: {
        type: 'bar',
        height: 'auto',
        width: 'auto',
        toolbar: {
          show: false,
        },
      },

      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
          borderRadius: 5,
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
        categories: ['Falta de dados de remetente', 'Emabalagem violada', 'Produto errado'],
        labels: {
          rotate: 0,
          style: {
            fontSize: '0.5em',
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
      // tooltip: {
      //   y: {
      //     formatter: function (val) {
      //       return '$ ' + val + ' thousands';
      //     },
      //   },
      // },
    },
  };
  return (
    <Flex p="10px" flexWrap={['wrap', 'nowrap']} justify="center" alignItem="center" w={'100%'}>
      <Box>
        <Flex>
          {infoProducts.map((info, i) => (
            <Box
              flexBasis="180px"
              minH="100px"
              borderRadius="10px"
              key={i}
              bg="white.50"
              m={`${gap}`}
            >
              <Text>{info.title}</Text>
            </Box>
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
                p="5px"
                flex="1"
              >
                <Text>Status das entregas</Text>
                <Box m="0 auto">
                  <ReactApexChart
                    options={state.options}
                    series={state.series}
                    type="pie"
                    width="80%"
                  />
                </Box>
              </Flex>
              <Flex
                flexDir="column"
                borderRadius="10px"
                bg="white.50"
                m={`${gap}`}
                p="5px"
                flex="1"
              >
                <Text>Problemas da entrega</Text>
                <Box m="0 auto">
                  <ReactApexChart
                    options={state.options}
                    series={state.series}
                    type="pie"
                    width="80%"
                  />
                </Box>
              </Flex>
            </Flex>
            <Box borderRadius="10px" bg="white.50" flex="1" m={`${gap}`}>
              <Text>Total de não conformidades por fase</Text>
              <ReactApexChart
                options={state.options}
                series={state.series}
                type="pie"
                height={'auto'}
              />
            </Box>
          </Flex>
          <Box borderRadius="10px" bg="white.50" m={`${gap}`}>
            <Text>Motivo de bloqueio nas entregas</Text>
            <Box w="75%" m="auto">
              <ReactApexChart options={state2.options} series={state2.series} type="bar" />
            </Box>
          </Box>
        </Flex>
      </Box>
      <Flex flexDir="column">
        <Flex>
          {infoProducts.map((info, i) => (
            <Box
              flexBasis="180px"
              minH="100px"
              borderRadius="10px"
              key={i}
              bg="white.50"
              m={`${gap}`}
            >
              <Text>{info.title}</Text>
            </Box>
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
          </Box>
        </Box>
      </Flex>
    </Flex>
  );
}
