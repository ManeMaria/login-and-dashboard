import { Box, Flex, Text } from '@chakra-ui/react';

export function Header() {
  return (
    <Flex borderBottom="1px solid" borderColor="gray.100" height="70px" alignItems="center">
      <Text textTransform="uppercase" fontWeight="900" fontSize="1.5em" color="balck">
        dashboard
      </Text>
      <Box w="1px" h="40%" bg="gray.100" margin="0 20px"></Box>
      <Flex>
        <Text fontWeight="600" color="green.200" fontSize="1.5em" alignSelf="flex-end">
          97
        </Text>
        <Text fontWeight="700" fontSize="0.9em" alignSelf="center" p="7px 0 0 0" ml="5px">
          produtos
        </Text>
      </Flex>
    </Flex>
  );
}
