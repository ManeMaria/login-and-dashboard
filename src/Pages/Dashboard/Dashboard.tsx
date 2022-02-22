import { Flex } from '@chakra-ui/react';

import { Products } from '@/components/Products/Products';

export function Dashboard() {
  return (
    <Flex w="100%" alignItems="center" bg="red" m="auto">
      <Products />
    </Flex>
  );
}
