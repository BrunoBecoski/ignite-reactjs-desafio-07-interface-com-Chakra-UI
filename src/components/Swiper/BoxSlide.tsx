import { Box, Text } from '@chakra-ui/layout';
import Link from 'next/link'

interface BoxSlideProps {
  url: string;
  href: string;
  title: string;
}

export function BoxSlide({ url, href, title }: BoxSlideProps) {
  const urlFormat = `url(${url})`

  return (

    <Link href={href}>
      <Box
      cursor="pointer"
        bgImage={urlFormat}
        bgPosition="center"
        maxW="1240px"
        w={["100%", "1240px"]}
        h={["250px", "450px"]}     
        
      >
        <Text
          d="flex"
          alignItems="center"
          justifyContent="center"
          maxW="1240px"
          w="100%"
          h="100%"
          color="light.headings_and_text"
          fontWeight="700"
          fontSize={["1.5rem", "2.25rem", "3rem"]}
          position="absolute"
          bg="#1c1C1459"
          _hover={{
            color: "highlight"
          }}  
        >
          {title}
        </Text>
      </Box>
    </Link>
  )
}