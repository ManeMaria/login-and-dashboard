import { Flex, Grid } from '@chakra-ui/react';
import { useEffect } from 'react';

import { CompliancesByPhase } from './components/CompliancesByPhase/CompliancesByPhase';
import { DataAvarage } from './components/DataAvarage/DataAvarage';
import { DeliveryProblemsGraphicBar } from './components/DeliveryProblems/DeliveryProblemsGraphicBar/GraphicBar';
import { DeliveryProblemsGraphicPie } from './components/DeliveryProblems/DeliveryProblemsGraphicPie/GraphicPie';
import DeliveryStatus from './components/DeliveryStatus/DeliveryStatus';
import { PieGraphicStatusDelivery } from './components/DeliveryStatus/PieGraphicStatusDelivery/PieGraphicStatusDelivery';
import { ProductInformation } from './components/ProductInformation/ProductInformation';

import { usePromisses } from '@/hooks/usePromisses';

export function Products() {
  const { isloading, error, data, setPath } = usePromisses();

  useEffect(() => {
    setPath('https://621584abc9c6ebd3ce2a353c.mockapi.io/api/ps/products-by-status');
  }, []);

  return (
    <Flex pt="20px" flexWrap={['wrap', 'nowrap']} justify="center" w="min(90em, 100%)" m="0 auto">
      <Grid flex="1" flexDir="column">
        <ProductInformation isloading={isloading} error={error} data={data} />
        <Grid flexDir="column">
          <Flex flex="1">
            <Grid flex="1" flexDir="column">
              <PieGraphicStatusDelivery isloading={isloading} error={error} data={data} />
              <DeliveryProblemsGraphicPie />
            </Grid>
            <CompliancesByPhase />
          </Flex>
          <DeliveryProblemsGraphicBar />
        </Grid>
      </Grid>
      <Flex flexDir="column" flex="1">
        <DataAvarage />
        <DeliveryStatus />
      </Flex>
    </Flex>
  );
}
