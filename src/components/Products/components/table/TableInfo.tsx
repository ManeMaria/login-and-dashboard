import { Box, Fade, Flex, Grid } from '@chakra-ui/react';

import stl from './styles.module.css';

export interface IInfos {
  id: number;
  address: 'string';
  distance: number;
  status: 'string';
}

interface ITableInfo {
  data: IInfos[];
}

export default function TableInfo({ data }: ITableInfo) {
  return (
    <Fade in={true}>
      <Flex
        flexDir="column"
        textAlign="left"
        mt="20px"
        fontWeight="600"
        w="100%"
        h="100%"
        fontSize="0.8em"
      >
        <Flex bg="green.50" color="green.200" justifyContent="space-around" borderRadius="8px">
          {['N', 'DESTINO', 'Distância', 'Status'].map((ele, i) => (
            <Box p="5px 10px" flexBasis={i > 0 ? '100%' : '50px'} key={ele}>
              {ele}
            </Box>
          ))}
        </Flex>

        <Box className={stl.table} mt="10px" color="gray.200" overflowY="auto" maxH="60vh">
          <Grid>
            {data?.map((values: IInfos) => (
              <Flex key={values.id} className={stl.tr} justifyContent="space-around">
                {[values.id, values.address, `${values.distance} km`, values.status].map(
                  (td, i) => (
                    <Box p="5px 10px" w={i > 0 ? '100%' : '50px'} key={`${values.id}_${i}`}>
                      {td}
                    </Box>
                  ),
                )}
              </Flex>
            ))}
          </Grid>
        </Box>
      </Flex>
    </Fade>
  );
}
