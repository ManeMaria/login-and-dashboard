import { Box, Skeleton, Text } from '@chakra-ui/react';
import { Props } from 'framer-motion/types/types';
import { useEffect, useState } from 'react';

import { BarGraphic } from '../../graphics/Bar/Bar';

import configOptions from './configOptions';

import { usePromisses } from '@/hooks/usePromisses';

export function DeliveryProblemsGraphicBar() {
  const { isloading, error, data, setPath } = usePromisses();
  const [optionsState, setOptionsState] = useState<Props>();
  const colors = ['#004C6D', '#5886A5', '#9CC5DF'];

  useEffect(() => {
    setPath('https://621584abc9c6ebd3ce2a353c.mockapi.io/api/ps/delivery-problems');
  }, []);

  useEffect(() => {
    manipulateData(data);
  }, [data]);

  function manipulateData(data) {
    // const formattedData = data.map(({ quantity, problem }, i) => ({
    //   y: quantity,
    //   x: problem,
    //   fillColor: colors[i],
    // }));

    //por algum motivo a lib não estava aceitando os dados dinamicamente
    //o código que usei para setar os dados está comentado em cima
    const options = {
      ...configOptions,
      series: [
        {
          data: [
            {
              x: 'Remetente ausente',
              y: 47,
              fillColor: '#004C6D',
            },
            {
              x: 'Embalagem violada',
              y: 17,
              fillColor: '#5886A5',
            },
            {
              x: 'Produto errado',
              y: 11,
              fillColor: '#9CC5DF',
            },
          ],
        },
      ],
    };
    setOptionsState(options);
  }

  if (error) {
    <Box>Error</Box>;
  }

  return (
    <>
      {isloading ? (
        <Skeleton borderRadius="10px" m="5px" p="10px" flex="1" h="500px" />
      ) : (
        <Box borderRadius="10px" bg="white.50" m="5px" p="10px">
          <Text fontWeight="600">Motivo de bloqueio nas entregas</Text>
          <Box>
            {optionsState && (
              <BarGraphic
                options={optionsState?.options}
                series={optionsState?.series}
                width="90%"
              />
            )}
          </Box>
        </Box>
      )}
    </>
  );
}
