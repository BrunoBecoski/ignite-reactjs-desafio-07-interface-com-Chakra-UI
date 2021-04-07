import { Box, Divider, Flex, Image, Text } from '@chakra-ui/react';

import { Swiper } from '../components/Swiper';
import { Header } from '../components/Header';

export default function Home() {

  return (
    <Flex
      direction="column"
    >
      <Header />

      <Flex 
        bgImage="url('/images/background.png')"
        px="36"
        pt="20"
        h="335px"
        position="relative"
        mb="24"
      >
        <Flex
          color="light.headings_and_text"
          direction="column"
        >
          <Text
            maxW="430px"
            fontSize="2.25rem"
            mb="5"
          >
            5 Continentes, infinitas possibilidades.
          </Text>
          <Text
            maxW="530px"  
            fontSize="1.25rem"
          >
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </Flex>

        <Image
          src="/images/airplane.png" 
          alt="Avião"
          position="absolute"
          right="0"
          mx="36"
        />
      </Flex>

      <Flex 
        mx="36"
        justify="space-between" 
      >
        <Box>
          <Image src="/images/cocktail.svg" alt="Coquetel" />
          <Text
            fontWeight="600"
            fontSize="1rem"
            mt="6"
            align="center"
          >vida noturna</Text>
        </Box>
        <Box>
          <Image src="/images/surf.svg" alt="Surf" />
          <Text
            fontWeight="600"
            fontSize="1rem"
            mt="6"
            align="center"
          >praia</Text>
        </Box>
        <Box>
          <Image src="/images/building.svg" alt="Prédio" />
          <Text
            fontWeight="600"
            fontSize="1rem"
            mt="6"
            align="center"
          >moderno</Text>
        </Box>
        <Box>
          <Image src="/images/museum.svg" alt="Museu" />
          <Text
            fontWeight="600"
            fontSize="1rem"
            mt="6"
            align="center"
          >clássico</Text>
        </Box>
        <Box>
          <Image src="/images/earth.svg" alt="Terra" />
          <Text
            fontWeight="600"
            fontSize="1rem"
            mt="6"
            align="center"
          >e mais...</Text>
        </Box>

      </Flex>

      <Divider
        mt="20"
        mx="auto"
        bg="dark.headings_and_text"
        h="2px"
        w="90px"
        mb="12"
        
      />

      <Box
        fontSize="2.25rem"
        fontWeight="500"
        align="center"
        mb="14"
      >
        <Text>Vamos nessa?</Text>
        <Text>Então escolha seu continente</Text>
      </Box>

      <Box
        mb="10"
        mx="28"
      >
        <Swiper />
      </Box>
    </Flex>
  )
}
