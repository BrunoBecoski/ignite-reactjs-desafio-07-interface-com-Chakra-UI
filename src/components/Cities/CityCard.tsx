import { Box, Flex, Image, Text } from "@chakra-ui/react";

interface CityCardProps{
  image: string;
  city: string;
  country: string;
  flag: string;
}

export function CityCard({ image, city, country, flag}: CityCardProps) {
  return (
    <Box
      borderRadius="4px"
      fontFamily="Barlow"
      h="72"
      w="64"
    >
      <Image 
        src={image} 
        borderTopRadius="4px"
        h="40"
        w="64"
        objectFit="cover"
      />
      <Flex
        bg="light.white"
        p="6"
        borderLeft="1px solid #FFBA08"
        borderBottom="1px solid #FFBA08"
        borderRight="1px solid #FFBA08"
        
        borderBottomRadius="4px"
        justifyContent="space-between"
      >
        <Box>
          <Text
            fontWeight="semibold"
            fontSize="1.25rem"
          >
            {city}
          </Text>
          <Text
            color="dark.info"
            fontSize="1rem"
          >{country}</Text>
        </Box>
        <Image 
          boxSize="30px"
          src={flag}
        />
      </Flex>
    </Box>

  );
}