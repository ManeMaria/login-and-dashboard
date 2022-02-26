import { Box, Flex, Text, Skeleton } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import TableInfo, { IInfos } from '../table/TableInfo';

import { Select } from '@/components/Select/Select';
import { usePromisses } from '@/hooks/usePromisses';

export default function DeliveryStatus() {
  const [options, setOptions] = useState<IInfos[]>([]);
  const [optionsFilter, setOtionsFilter] = useState<string[]>([]);
  const {
    isloading,
    error,
    data: { deliveries },
    setPath,
  } = usePromisses();

  useEffect(() => {
    setPath('https://621584abc9c6ebd3ce2a353c.mockapi.io/api/ps/deliveries');
  }, []);

  useEffect(() => {
    setOptions(deliveries);
    getOptions(deliveries);
  }, [deliveries]);

  if (error) {
    <Box>Error</Box>;
  }

  function getOptions(deliveriesParams: IInfos[]) {
    const uniqueOptions = deliveriesParams?.reduce(
      (previousValue: string[], currentValue: IInfos) => {
        if (previousValue.every((status) => status !== currentValue.status)) {
          previousValue.push(currentValue.status);
        }

        return previousValue;
      },
      [],
    );

    setOtionsFilter(uniqueOptions);
  }

  function handleFilterOptions(value: string) {
    const searchResult = deliveries?.filter(
      (option) => option.status === value || Number(value) === 0,
    );

    setOptions(searchResult);
  }

  return (
    <>
      {isloading ? (
        <Skeleton flex="1" m="5px" p="10px" borderRadius="10px" h="700px" />
      ) : (
        <Flex borderRadius="10px" bg="white.50" flex="1" m="5px" p="10px">
          <Flex flexDir="column" w={'100%'}>
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
              <Select
                label="Status da entrega"
                onChange={({ target }) => handleFilterOptions(target.value)}
              >
                <option value={0} key={0}>
                  Seleciona um status
                </option>
                {optionsFilter?.map((op) => (
                  <option value={op} key={op}>
                    {op}
                  </option>
                ))}
              </Select>
            </Box>
            <TableInfo data={options} />
          </Flex>
        </Flex>
      )}
    </>
  );
}
