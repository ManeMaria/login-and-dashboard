import { Flex } from '@chakra-ui/react';

import { Products } from '@/components/Products/Products';

export function Dashboard() {
  return (
    <Flex boxSizing="border-box">
      <Products />
    </Flex>
  );
}
