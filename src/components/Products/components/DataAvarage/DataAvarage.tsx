/* eslint-disable @typescript-eslint/no-array-constructor */
import { Box, Flex, Grid, Image, Text } from '@chakra-ui/react';
import { useEffect } from 'react';

import FieldLoadingAnimation from '../ProductInformation/FieldLoadingAnimation/FieldLoadingAnimation';

import ifinishedDeliveriesAverage from '@/assets/icons/i-distance.svg';
import ilackOfCosturmers from '@/assets/icons/i-lack-of-costurmers.svg';
import iMeanDelivary from '@/assets/icons/i-mean-delivary.svg';
import iNotPerformed from '@/assets/icons/not-performed.svg';
import { usePromisses } from '@/hooks/usePromisses';

type props = {
  label: string;
  value: number;
  unity: string;
};

export function DataAvarage() {
  const { isloading, error, data, setPath } = usePromisses();
  const gap = '5px';
  const igms = [iMeanDelivary, ilackOfCosturmers, ifinishedDeliveriesAverage, iNotPerformed];
  useEffect(() => {
    setPath('https://621584abc9c6ebd3ce2a353c.mockapi.io/api/ps/delivery-avgs');
  }, []);

  function treatComma(number: number): string {
    return `${number}`.replace('.', ',');
  }

  if (error) return <Box>error</Box>;
  return (
    <>
      {isloading ? (
        <FieldLoadingAnimation />
      ) : (
        <Flex>
          {data.map((info: props, i) => (
            <Grid
              flexBasis="180px"
              minH="100px"
              borderRadius="10px"
              key={i}
              bg="white.50"
              m={`${gap}`}
              fontSize={['0.8em', '0.7.5em']}
              padding="10px"
              pos="relative"
              fontWeight="600"
              color="gray.200"
            >
              <Flex pos="absolute" top="-10px" left="0" justify="center" w={'100%'}>
                <Image src={igms[i]} w="20px" />
              </Flex>
              <Text fontSize="0.8em">{info.label}</Text>
              <Flex h="100%" w="100%" m="auto" alignItems="flex-end">
                <Text fontSize="1.7em">{treatComma(info.value)}</Text>
                <Text fontSize="0.8em" m="0 5px 5px 5px">
                  {info.unity}
                </Text>
              </Flex>
            </Grid>
          ))}
        </Flex>
      )}
    </>
  );
}
