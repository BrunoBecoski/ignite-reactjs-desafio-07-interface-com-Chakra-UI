import { Box, Divider, Flex, Image, Text } from '@chakra-ui/react';

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper-bundle.css'

SwiperCore.use([ Navigation, Pagination, A11y]);

export default function Home() {

  return (
    <Flex
      direction="column"
    >
      <Image 
        src="/images/logo.svg" 
        alt="logo" 
        h="45px"
        my="7"
      />

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
        <Swiper
          navigation
          pagination={{ clickable: true }}
        >
          <SwiperSlide>
              <Box
                bgImage="url('https://images.unsplash.com/photo-1536599018102-9f803c140fc1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw=&ixlib=rb-1.2.1&auto=format&fit=crop&w=1240&q=80')" 
                bgPosition="center"
                w="1240px"
                h="450px"               
                
                >
                <Text
                w="100%"
                h="100%"

                  align="center"
                  position="relative"
                  color="light.headings_and_text"
                  fontWeight="700"
                  fontSize="3rem"
                  bg="#1C1401050"
                >
                  Ásia
                </Text>
              </Box>
          </SwiperSlide>



          <SwiperSlide>
            <Box
              bgImage="url('https://images.unsplash.com/photo-1550850839-8dc894ed385a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw=&ixlib=rb-1.2.1&auto=format&fit=crop&w=1240&q=80')"
              bgPosition="center"
              w="1240px"
              h="450px"
            >
              <Text
                color="whiteAlpha.900"
              >
                América
              </Text>
            </Box>
          </SwiperSlide>

          <SwiperSlide>
            <Box
              bgImage="url('https://images.unsplash.com/photo-1583248793469-0b3360f27876?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw=&auto=format&fit=crop&w=1240&q=80')" 
              bgPosition="center"
              w="1240px"
              h="450px"
            >
              <Text
                color="whiteAlpha.900"
              >
                África
              </Text>
            </Box>
          </SwiperSlide>

          <SwiperSlide>
            <Box
              bgImage="url('https://images.unsplash.com/photo-1490642914619-7955a3fd483c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw=&ixlib=rb-1.2.1&auto=format&fit=crop&w=1240&q=80')" 
              bgPosition="center"
              w="1240px"
              h="450px"
            >
              <Text
                color="whiteAlpha.900"
              >
                Europa
              </Text>
            </Box>
          </SwiperSlide>

          <SwiperSlide>
            <Box
              bgImage="url('https://images.unsplash.com/photo-1602030322629-07214130536e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw=&ixlib=rb-1.2.1&auto=format&fit=crop&w=1240&q=80')" 
              bgPosition="center"
              w="1240px"
              h="450px"
            >
              <Text
                color="whiteAlpha.900"
              >
                Oceania
              </Text>
            </Box>
          </SwiperSlide>
        </Swiper>

      </Box>


    </Flex>
  )
}
