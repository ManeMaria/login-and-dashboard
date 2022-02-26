import { Box, Text, Skeleton } from '@chakra-ui/react';
import { Props } from 'framer-motion/types/types';
import { useEffect, useState } from 'react';

import { PieGraphic } from '../graphics/Pie/Pie';

import configOptions from './configOptions';

import { usePromisses } from '@/hooks/usePromisses';

export interface Previus {
  labels: string[];
  series: unknown[];
}

export function CompliancesByPhase() {
  const { isloading, error, data, setPath } = usePromisses();
  const [optionsState, setOptionsState] = useState<Props>();

  useEffect(() => {
    setPath('https://621584abc9c6ebd3ce2a353c.mockapi.io/api/ps/rating');
  }, []);

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
        <Skeleton borderRadius="10px" bg="white.50" flex="1" m="5px" p="10px" />
      ) : (
        <Box borderRadius="10px" bg="white.50" p="10px" m="5px">
          <Text fontWeight="600">Total de não conformidades por fase</Text>
          <Box>
            {optionsState && (
              <PieGraphic options={optionsState?.options} series={optionsState?.series} w="100%" />
            )}
          </Box>
        </Box>
      )}
    </>
  );
}
