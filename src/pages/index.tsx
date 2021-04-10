import { Box, Divider, Flex, Image, Text, useBreakpointValue } from '@chakra-ui/react';
import Heade from 'next/head';

import { Header } from '../components/Header';
import { Types } from '../components/Types';
import { Swiper } from '../components/Swiper';

export default function Home() {
  const isWideVersion = useBreakpointValue({
    base: false,
    xl: true,
  })

  return (
    <>
      <Heade>
        <title>Home | worldtrip</title>
      </Heade>

      <Flex
        direction="column"
      >
        <Header />

        <Flex 
          bgImage="url('/images/background.png')"
          bgRepeat="no-repeat"
          w="100%"
          maxW="1440px"
          mx="auto"
          px={["4", "12" ,"36"]}
          pt={["7", "10", "20"]}
          h={["163px", "253px", "335px"]}
          position="relative"
          mb={["9", "24"]}
        >
          <Flex
            color="light.headings_and_text"
            direction="column"
          >
            <Text
              maxW="430px"
              fontSize={["1.25rem", "1.75rem", "2.25rem"]}
              mb={["2", "4", "5"]}
            >
              5 Continentes, infinitas possibilidades.
            </Text>
            <Text
              maxW="530px"  
              fontSize={["0.75rem", "1rem", "1.25rem"]}
            >
              Chegou a hora de tirar do papel a viagem que você sempre sonhou.
            </Text>
          </Flex>

          { isWideVersion &&  
            <Image
              src="/images/airplane.png" 
              alt="Avião"
              position="absolute"
              right="0"
              mx="36"
            />
          }
        </Flex>
        
        <Box 
          align="center"
        >
          <Types />
        </Box>
        
        <Divider
          mt={["9", "14", "20"]}
          mx="auto"
          bg="dark.headings_and_text"
          h="2px"
          w={["60px", "75px", "90px"]}
          mb={["6", "9", "12"]}
          
        />

        <Box
          fontSize={["1.25rem", "1.75rem", "2.25rem"]}
          fontWeight="500"
          align="center"
          mb={["5", "9", "14"]}
        >
          <Text>Vamos nessa?</Text>
          <Text>Então escolha seu continente</Text>
        </Box>

        <Box
          mb={["9", "10"]}
          mx={["0", "0", "0", "28"]}
        >
          <Swiper />
        </Box>
      </Flex>
    </>
  )
}
