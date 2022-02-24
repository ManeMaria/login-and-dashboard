import { Box, Flex } from '@chakra-ui/react';

import stl from './styles.module.css';
interface ITableInfo {
  values?: any[];
}
export default function TableInfo({ values }: ITableInfo) {
  return (
    <Box textAlign="left" mt="20px" fontWeight="600">
      <Flex bg="green.50" color="green.200" justifyContent="space-around" borderRadius="8px">
        {['TO CONVERT', 'INTO', 'MULTIPLY BY'].map((ele) => (
          <Box p="5px 20px" flex="1" key={ele}>
            {ele}
          </Box>
        ))}
      </Flex>

      <Box className={stl.table} mt="10px" color="gray.200">
        {[
          ['inches', 'millimetres (mm)', 25.4],
          ['feet', 'centimetres (cm)', 30.48],
          ['yards', 'metres (m)', 0.91444],
        ].map((tr, i) => (
          <Flex key={i} className={stl.tr} justifyContent="space-around">
            {tr.map((td, ind) => (
              <Box p="5px 20px" flex="1" key={ind}>
                {td}
              </Box>
            ))}
          </Flex>
        ))}
      </Box>
    </Box>
  );
}
