import { Flex, useBreakpointValue } from "@chakra-ui/react";

import { TypeBox } from './TypeBox';
import { TypeFlex } from './TypeFlex';

export function Types() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  if(!isWideVersion) {

    return (
      <Flex
        mx="12"
        wrap={["wrap", "nowrap"]}
        justifyContent="space-between"
      >
        <Flex
          w={["50%", "auto"]}
          mb={["12", "0"]}
        >
          <TypeFlex>
            vida noturna
          </TypeFlex>
        </Flex>

        <Flex
          w={["50%", "auto"]}
          mb={["12", "0"]}
          justifyContent="flex-end"
        >
          <TypeFlex>
            praia
          </TypeFlex>
        </Flex>

        <Flex
          w={["50%", "auto"]}
          mb={["12", "0"]}
        >
          <TypeFlex>
            moderno
          </TypeFlex>
        </Flex>

        <Flex
          w={["50%", "auto"]}
          mb={["12", "0"]}
          justifyContent="flex-end"
        >
          <TypeFlex>
            clássico
          </TypeFlex>
        </Flex>

        <Flex
          w={["100%", "auto"]}
          justifyContent="center"
        >
          <TypeFlex>
            e mais...
          </TypeFlex>
        </Flex>
          
      </Flex>
    );
  }

  return(
    <Flex
      maxW="1160px"
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