import { Box, Flex, Skeleton, Text } from '@chakra-ui/react';
import { Props } from 'framer-motion/types/types';
import { useEffect, useState } from 'react';

import { Previus } from '../../CompliancesByPhase/CompliancesByPhase';
import { PieGraphic } from '../../graphics/Pie/Pie';

import configOptions from './configOptions';

import { usePromisses } from '@/hooks/usePromisses';

export function DeliveryProblemsGraphicPie(): JSX.Element {
  const { isloading, error, data, setPath } = usePromisses();
  const [optionsState, setOptionsState] = useState<Props>();

  useEffect(() => {
    setPath('https://621584abc9c6ebd3ce2a353c.mockapi.io/api/ps/delivery-problems');
  }, []);

  useEffect(() => {
    manipulateData(data);
  }, [data]);

  function manipulateData(data) {
    const { labels, series }: Previus = { labels: [], series: [] };

    for (const { problem, quantity } of data) {
      labels.push(problem);
      series.push(quantity);
    }

    setOptionsState({
      ...configOptions,
      series,
      options: {
        ...configOptions.options,
        labels,
      },
    });
  }

  if (error) {
    <Box>Error</Box>;
  }
  return (
    <>
      {isloading ? (
        <Skeleton borderRadius="10px" m="5px" flex="1" h="250px" />
      ) : (
        <Flex
          flexDir="column"
          borderRadius="10px"
          bg="white.50"
          m="5px"
          p="10px"
          flex="1"
          fontWeight="600"
        >
          <Text>Problemas da entrega</Text>
          <Box m="0 auto">
            {optionsState && (
              <PieGraphic options={optionsState?.options} series={optionsState?.series} w="100%" />
            )}
          </Box>
        </Flex>
      )}
    </>
  );
}
