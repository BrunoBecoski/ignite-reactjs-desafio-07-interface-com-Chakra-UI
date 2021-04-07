import { Box, Flex } from "@chakra-ui/react";

import { Header } from '../components/Header';
import { Banner } from '../components/Banner';
import { Info } from '../components/Info';
import { Cities } from '../components/Cities';

export default function Continent() {
  return (
    <Flex
      direction="column"
    >
      <Header />
      <Banner />

      <Box
        mx="36"
        mt="20"
        mb="9"
      >
        <Info />
        <Cities />
      </Box>
      
    </Flex>
  )
}