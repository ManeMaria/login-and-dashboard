import { Flex } from '@chakra-ui/react';

import { Products } from '@/components/Products/Products';

export function Dashboard() {
  return (
    <Flex overflow="scroll" h="100%">
      <Products />
    </Flex>
  );
}
