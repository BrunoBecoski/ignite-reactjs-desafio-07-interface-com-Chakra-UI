import { Box, Image, Text } from "@chakra-ui/react";

interface BannerProps {
  banner: string;
  title: string;
}

export function Banner({ banner, title }: BannerProps) {

  return (
    <Box
      bgPosition="center"
      w="100%"
      h={["150px", "300px", "500px"]}
      position="relative"
    >
      <Image
        src={banner}
        bgPosition="center"
        w="100%"
        h={["150px", "300px", "500px"]}
        objectFit="cover"
        position="absolute"
      />
      <Text
        fontWeight="600"
        color="light.headings_and_text"
        fontSize={["1.75rem", "3rem"]}
        align={["center", "center", "left"]}
        pl={["0", "0", "36"]}
        pt={["14", "36" ,"96"]}
        position="absolute"
        bg="#1c1C1459"
        w="100%"
        h={["150px", "300px", "500px"]}
      >
        {title} 
      </Text>
    </Box>
  );
}