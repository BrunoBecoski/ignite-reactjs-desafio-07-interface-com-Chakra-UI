import { Box, Image, Text } from "@chakra-ui/react";

interface TypeBoxProps {
  src: string;
  alt: string;
  text: string
}

export function TypeBox({ src, alt,text }: TypeBoxProps) {
  return(
    <Box>
      <Image src={src} alt={alt} />
      <Text
        fontWeight="600"
        fontSize="1rem"
        mt="6"
        align="center"
      >
        {text}
      </Text>
    </Box>
  );
}