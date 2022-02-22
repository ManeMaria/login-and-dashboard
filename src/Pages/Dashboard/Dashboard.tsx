import { Flex } from '@chakra-ui/react';

import { Products } from '@/components/Products/Products';

export function Dashboard() {
  return (
    <Flex justifyContent="center" w="80vw">
      <Products />
    </Flex>
  );
}
