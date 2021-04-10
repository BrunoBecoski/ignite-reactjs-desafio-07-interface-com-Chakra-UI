import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { CityCard } from "./CityCard";

interface CitieProps {
  cities: {
    id: number;
    image: string;
    city: string;
    country: string;
    flag: string;
  }[]
}

export function Cities({ cities }: CitieProps) {

  return (
    <>
      <Text
        fontWeight="500"
        fontSize={["1.5rem", "1.75rem", "2.25rem"]}
        mb={[ "5", "9"]}
      >
        Cidades +100
      </Text>

    <Flex
      alignContent="center"
      maxW="1160px"
      w="100%"
    >
      <SimpleGrid 
        columns={[1, 1, 2, 2, 3, 4]}
        spacing={[5, 7, 10, 12]} 
        mx="auto"
      >
        {cities.map((city) => (
          <CityCard 
            key={city.id}
            image={city.image}
            city={city.city}
            country={city.country}
            flag={city.flag}
          />
        )
      )}
       </SimpleGrid>
    </Flex>

    </>
  );
}