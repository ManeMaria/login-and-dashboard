import { Box, Grid, GridItem, Text } from '@chakra-ui/react';
import { ApexOptions } from 'apexcharts';
import ReactApexChart from 'react-apexcharts';

import { infoProducts } from './fakeValues';
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
  options?: ApexOptions;
  [key: string]: any;
}
export function Products() {
  // infoProducts
  const state: Props = {
    series: [44, 55, 13, 43, 22],
    options: {
      chart: {
        width: 380,
        type: 'pie',
      },
      labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
      responsive: [
        {
          breakpoint: 480,
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
  return (
    <Box w="95%">
      <Grid templateColumns="repeat(8, 1fr)" templateRows="repeat(4, 1fr)" gap={2}>
        {infoProducts.map((info, i) => (
          <GridItem key={i} bg="white.50">
            <Text>{info.title}</Text>
          </GridItem>
        ))}
        {infoProducts.map((info, i) => (
          <GridItem key={i} bg="white.50">
            <Text>{info.title}</Text>
          </GridItem>
        ))}
        <GridItem bg="white.50" colSpan={2}>
          <Text bg="white.50">Status das entregas</Text>
          <ReactApexChart options={state.options} series={state.series} type="pie" />
        </GridItem>
        <GridItem bg="white.50" colSpan={2} rowSpan={2}>
          <Text>Problemas da entrega</Text>
        </GridItem>
        <GridItem bg="red" colSpan={4} rowSpan={3}>
          <Text>Total de não conformidades por fase</Text>
        </GridItem>
        <GridItem bg="white.50" colSpan={2}>
          <Text>Motivo de bloqueio nas entregas</Text>
        </GridItem>
        <GridItem bg="white.50" colSpan={4}>
          <Text>Motivo de bloqueio nas entregas</Text>
        </GridItem>
      </Grid>
    </Box>
  );
}
