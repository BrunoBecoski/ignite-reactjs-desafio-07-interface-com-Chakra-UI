import { extendTheme } from '@chakra-ui/react'; 

export const theme = extendTheme({
  colors: {
    highlight: "#FFBA08",
    dark: {
      black: "#000000",
      headings_and_text: "#47585B",
      info: "#999999",
    },
    light: {
      white: "#FFFFFF",
      headings_and_text: "#F5F8FA",
      info: "#DADADA",
    }
  },
  fonts: {
    heading: 'Poppins', 
    body: 'Poppins',
  }, 
  styles: {
    global: {
      body: {
        bg: 'light.headings_and_text',
        color: 'dark.headings_and_text',
      }
    }
  }
});


// font-family: 'Barlow', sans-serif;
