import { SimpleGrid, Text } from "@chakra-ui/react";
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
        fontSize="2.25rem"
        mb="2.5rem"
      >
        Cidades +100
      </Text>

      <SimpleGrid columns={4} spacing={12} >
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
    </>
  );
}