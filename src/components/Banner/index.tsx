import { Box, Text } from "@chakra-ui/react";

export function Banner() {
  return (
    <Box
      bgImage="url('https://images.unsplash.com/photo-1505761671935-60b3a7427bad?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw=&ixlib=rb-1.2.1&auto=format&fit=crop&w=1440&q=80')"
      bgPosition="center"
      w="100%"
      h="500px"
    >
      <Text
        fontWeight="600"
        color="light.headings_and_text"
        fontSize="3rem"
        ml="36"
        mt="96"
        position="absolute"
      >
        Europa 
      </Text>
      <div  
        style={{ 
          height: "500px", 
          backgroundColor: "#1c1C1459"
        }} 
      />
    </Box>
  );
}