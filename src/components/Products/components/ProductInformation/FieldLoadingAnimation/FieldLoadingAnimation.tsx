import { HStack, Skeleton } from '@chakra-ui/react';
import React from 'react';

import { createArrays } from '@/utils/functions';

export default function FieldLoadingAnimation() {
  return (
    <HStack w="100%">
      {createArrays(4).map((_, i) => (
        <Skeleton
          key={i}
          flexBasis="180px"
          minH="100px"
          borderRadius="10px"
          bg="white.50"
          m={`5px`}
          fontSize="0.9em"
        />
      ))}
    </HStack>
  );
}
