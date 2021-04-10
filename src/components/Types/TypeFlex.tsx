import { Box, Flex, Text } from "@chakra-ui/react";

interface TypeFlexProps {
  children: string;
}

export function TypeFlex({ children }: TypeFlexProps) {
  return (
    <Flex
      alignItems="center"
    >
      <Box
        w="8px"
        h="8px"
        bg="highlight"
        borderRadius="full"
        mr="8px"
      />
      <Text
        fontWeight="medium"
        fontSize="1rem"
        color="dark.headings_and_text"
      >
        {children}
      </Text>
    </Flex>
  );
}