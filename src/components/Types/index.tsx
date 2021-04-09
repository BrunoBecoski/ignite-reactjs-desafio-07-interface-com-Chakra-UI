import { Flex, Text, useBreakpointValue } from "@chakra-ui/react";

import { TypeBox } from './TypeBox';

export function Types() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

  if(!isWideVersion) {

    return (
      <Flex
        mx="12"
      >
        <Text>
            vida noturna

        </Text>
        
        <Text>
          praia

        </Text>
        
        <Text>
          moderno

        </Text>
        
        <Text>
          clássico

        </Text>
         
          e mais...
        <Text>

        </Text>
      </Flex>
    );
  }

  return(
    <Flex
      mx="36"
      justify="space-between" 
    >
      <TypeBox
        src="/images/cocktail.svg"
        alt="Coquetel"
        text="vida noturna"
      />      
      <TypeBox
        src="/images/surf.svg"
        alt="Surf"
        text="praia"
      />
      <TypeBox
        src="/images/building.svg"
        alt="Prédio"
        text="moderno"
      />
      <TypeBox
        src="/images/museum.svg"
        alt="Museu"
        text="clássico"
      />
      <TypeBox
        src="/images/earth.svg"
        alt="Terra"
        text="e mais..."
      />
    </Flex>

  );
}