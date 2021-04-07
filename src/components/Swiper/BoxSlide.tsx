import { Box, Text } from '@chakra-ui/layout';
import Link from 'next/link'

interface BoxSlideProps {
  url: string;
  title: string;
}

export function BoxSlide({ url, title }: BoxSlideProps) {
  const urlFormat = `url(${url})`

  return (

    <Link href="title">
      <Box
      cursor="pointer"
        bgImage={urlFormat}
        bgPosition="center"
        w="1240px"
        h="450px"     
        
      >
        <Text
          d="flex"
          alignItems="center"
          justifyContent="center"
          w="100%"
          h="100%"
          color="light.headings_and_text"
          fontWeight="700"
          fontSize="3rem"
          position="absolute"
          _hover={{
            color: "highlight"
          }}  
        >
          {title}
        </Text>
        <div  
          style={{ 
            width: "1240px", 
            height: "450px", 
            backgroundColor: "#1c140175"
          }}
        />
      </Box>
    </Link>
  )
}