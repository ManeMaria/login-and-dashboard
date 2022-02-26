import { Box, Flex, Skeleton, Text } from '@chakra-ui/react';
import { Props } from 'framer-motion/types/types';
import { useEffect, useState } from 'react';

import { Previus } from '../../CompliancesByPhase/CompliancesByPhase';
import { PieGraphic } from '../../graphics/Pie/Pie';
import { IProductInformation } from '../../ProductInformation/ProductInformation';

import configOptions from './configOptions';

export function PieGraphicStatusDelivery({ isloading, error, data }: IProductInformation) {
  const [optionsState, setOptionsState] = useState<Props>();

  useEffect(() => {
    manipulateData(data);
  }, [data]);

  function manipulateData(data) {
    const arrayProps = Object.entries(data);

    const { labels, series }: Previus = { labels: [], series: [] };

    for (const [key, value] of arrayProps) {
      labels.push(key);
      series.push(value);
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
          <Text>Status das entregas</Text>
          <Box m="0 auto">
            {optionsState && (
              <PieGraphic options={optionsState.options} series={optionsState.series} />
            )}
          </Box>
        </Flex>
      )}
    </>
  );
}
