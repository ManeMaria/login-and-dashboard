/* eslint-disable @typescript-eslint/no-array-constructor */
import { Box, Flex, Grid, Text } from '@chakra-ui/react';

import FieldLoadingAnimation from './FieldLoadingAnimation/FieldLoadingAnimation';

interface IDataProps {
  delivered: number;
  lateRisk: number;
  late: number;
}
export interface IProductInformation {
  data: IDataProps;
  isloading: boolean;
  error: string | null;
}

export function ProductInformation({ data, isloading, error }: IProductInformation) {
  const gap = '5px';

  if (error) return <Box>error</Box>;
  return (
    <Flex>
      {isloading ? (
        <FieldLoadingAnimation />
      ) : (
        <>
          <Grid
            flexBasis="180px"
            minH="100px"
            borderRadius="10px"
            bg="white.50"
            m={`${gap}`}
            fontSize="0.9em"
            padding="10px"
            fontWeight="600"
            alignItems="cener"
          >
            <Text fontSize="0.8em">Total de produtos</Text>
            <Flex h="100%" m="auto" textAlign="end" alignItems="flex-end" w="100%">
              <Flex fontSize="1.7em">
                <Box>{data.delivered + data.lateRisk + data.late}</Box>
              </Flex>
              <Text fontSize="0.8em" m="0 5px 5px 5px">
                produtos
              </Text>
            </Flex>
          </Grid>
          <Grid
            flexBasis="180px"
            minH="100px"
            borderRadius="10px"
            bg="white.50"
            m={`${gap}`}
            fontSize="0.9em"
            padding="10px"
            fontWeight="600"
            alignItems="cener"
          >
            <Text fontSize="0.8em">Produtos com atraso na entrega</Text>
            <Flex h="100%" m="auto" textAlign="end" alignItems="flex-end">
              <Flex fontSize="1.7em" color="red.200">
                <Box>{data.late}</Box>
              </Flex>
              <Text color="red.200" fontSize="0.8em" m="0 5px 5px 5px">
                produtos
              </Text>
              <Text m="0 5px 4px 5px">{data.late}%</Text>
            </Flex>
          </Grid>
          <Grid
            flexBasis="180px"
            minH="100px"
            borderRadius="10px"
            bg="white.50"
            m={`${gap}`}
            fontSize="0.9em"
            padding="10px"
            fontWeight="600"
            alignItems="cener"
          >
            <Text fontSize="0.8em">Produtos com risco de atraso</Text>
            <Flex h="100%" m="auto" textAlign="end" alignItems="flex-end">
              <Flex color="orange" fontSize="1.7em">
                <Box>{data.lateRisk}</Box>
              </Flex>
              <Text color="orange" fontSize="0.8em" m="0 5px 5px 5px">
                produtos
              </Text>
              <Text m="0 5px 4px 5px">{data.lateRisk}%</Text>
            </Flex>
          </Grid>
          <Grid
            flexBasis="180px"
            minH="100px"
            borderRadius="10px"
            bg="white.50"
            m={`${gap}`}
            fontSize="0.9em"
            padding="10px"
            fontWeight="600"
            alignItems="cener"
          >
            <Text fontSize="0.8em">Total de produtos</Text>
            <Flex h="100%" m="auto" textAlign="end" alignItems="flex-end">
              <Flex color="green.100" fontSize="1.7em">
                <Box>{data.delivered}</Box>
              </Flex>
              <Text color="green.100" fontSize="0.8em" m="0 5px 5px 5px">
                produtos
              </Text>
              <Text m="0 5px 4px 5px">{data.delivered}%</Text>
            </Flex>
          </Grid>
        </>
      )}
    </Flex>
  );
}
