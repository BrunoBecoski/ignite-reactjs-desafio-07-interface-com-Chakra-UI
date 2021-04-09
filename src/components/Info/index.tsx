import { Box, Flex, Image, Text, Tooltip } from "@chakra-ui/react";

interface InfoProps {
  bio: string;
  allCities: number;
  info: {
    countries: number;
    languages: number;
    cities: number;
  }
}

export function Info({ bio,  allCities, info }: InfoProps) {
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
        {bio} 
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
            {info.countries}
          </Text>
          <Text
            align="center"
          >países</Text>
        </Box>
        <Box>
          <Text 
            color="highlight"
            fontSize="3rem"
            lineHeight="5rem"
            align="center"
          >
            {info.languages}
          </Text>
          <Text
            align="center"
          >línguas</Text>
        </Box>
        <Box>
          <Text
            color="highlight"
            fontSize="3rem"
            lineHeight="5rem"
            align="center"
          >
            {allCities}
          </Text>
          <Text
            display="flex"
            align="center"
          >
            + 100 cidades
            <Tooltip label={info.cities}>
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
