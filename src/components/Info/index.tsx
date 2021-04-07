import { Box, Flex, Image, Text, Tooltip } from "@chakra-ui/react";

export function Info() {
  return (
    <Flex
      justify="space-between"
      alignItems="center"
      fontSize="1.5rem"
      mb="20"
    >
      <Text
        align="justify"
        maxWidth="35rem"
      >
        A Europa é, por convenção, um dos seis 
        continentes do mundo. Compreendendo a 
        península ocidental da Eurásia, a Europa
        geralmente divide-se da Ásia a leste pela 
        divisória de águas dos montes Urais, o rio Ural o,
        mar Cáspio, o Cáucaso, e o mar Negro a sudeste 
      </Text>

      <Flex
        fontWeight="600"
        justifyContent="space-between"
        flex="1"
        ml="16"
        maxWidth="450px"
      >
        <Box
          align="center"
        >
          <Text
            color="highlight"
            fontSize="3rem"
            lineHeight="5rem"
            align="center"
          >
            50
          </Text>
          <Text>países</Text>
        </Box>
        <Box>
          <Text 
            color="highlight"
            fontSize="3rem"
            lineHeight="5rem"
            align="center"
          >
            60
          </Text>
          <Text>línguas</Text>
        </Box>
        <Box>
          <Text
            color="highlight"
            fontSize="3rem"
            lineHeight="5rem"
            align="center"
          >
            27
          </Text>
          <Text
            display="flex"
          >
            cidades +100
            <Tooltip label="País pra caramba">
              <Image
                ml="1"
                display="inline"
                w="1rem"
                alt="Info"
                src="/images/info.svg"
              />
            </Tooltip>
          </Text>
        </Box>
      </Flex>
    </Flex>
  );
}