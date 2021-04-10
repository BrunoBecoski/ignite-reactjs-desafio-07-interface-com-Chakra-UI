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
      direction={["column", "column", "column", "row"]}
      justify="space-between"
      alignItems={["unset", "unset", "unset", "center"]}
      fontSize={["0.75rem", "1rem", "1.5rem"]}
      mb={["8", "14", "20"]}
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
        ml={["0", "0", "0", "16"]}
        maxWidth= {["100%", "100%", "100%", "450px"]}
        mt={["4", "3", "2", "1", "0"]}
      >
        <Box
          align={["left", "left", "left", "center"]}
        >
          <Text
            color="highlight"
            fontSize={["1.5rem", "2.25rem", "3rem"]}
            lineHeight={["2.25rem", "3rem", "5rem"]}
            align={["left", "left", "left", "center"]}
          >
            {info.countries}
          </Text>
          <Text
            align={["left", "left", "left", "center"]}
          >países</Text>
        </Box>
        <Box>
          <Text 
            color="highlight"
            fontSize={["1.5rem", "2.25rem", "3rem"]}
            lineHeight={["2.25rem", "3rem", "5rem"]}
            align={["left", "left", "left", "center"]}
          >
            {info.languages}
          </Text>
          <Text
            align={["left", "left", "left", "center"]}
          >línguas</Text>
        </Box>
        <Box>
          <Text
            color="highlight"
            fontSize={["1.5rem", "2.25rem", "3rem"]}
            lineHeight={["2.25rem", "3rem", "5rem"]}
            align={["left", "left", "left", "center"]}
          >
            {allCities}
          </Text>
          <Text
            display="flex"
            align={["left", "left", "left", "center"]}
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
