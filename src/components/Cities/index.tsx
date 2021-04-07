import { SimpleGrid, Text } from "@chakra-ui/react";
import { CityCard } from "./CityCard";

export function Cities() {
  return (
    <>
      <Text
        fontWeight="500"
        fontSize="2.25rem"
        mb="2.5rem"
      >
        Cidades +100
      </Text>

      <SimpleGrid columns={4} spacing={12} >

        <CityCard
          image="https://images.unsplash.com/photo-1533929736458-ca588d08c8be?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw=&ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
          city="Londres"
          country="Reino Unido"
          flag="https://www.flaticon.com/svg/vstatic/svg/197/197374.svg?token=exp=1617747234~hmac=5641a6cada8b7297e593903643cc56ad"
        />

        <CityCard
          image="https://images.unsplash.com/photo-1533929736458-ca588d08c8be?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw=&ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
          city="Londres"
          country="Reino Unido"
          flag="https://www.flaticon.com/svg/vstatic/svg/197/197374.svg?token=exp=1617747234~hmac=5641a6cada8b7297e593903643cc56ad"
        />

        <CityCard
          image="https://images.unsplash.com/photo-1533929736458-ca588d08c8be?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw=&ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
          city="Londres"
          country="Reino Unido"
          flag="https://www.flaticon.com/svg/vstatic/svg/197/197374.svg?token=exp=1617747234~hmac=5641a6cada8b7297e593903643cc56ad"
        />

        <CityCard
          image="https://images.unsplash.com/photo-1533929736458-ca588d08c8be?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw=&ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
          city="Londres"
          country="Reino Unido"
          flag="https://www.flaticon.com/svg/vstatic/svg/197/197374.svg?token=exp=1617747234~hmac=5641a6cada8b7297e593903643cc56ad"
        />

        <CityCard
          image="https://images.unsplash.com/photo-1533929736458-ca588d08c8be?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw=&ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
          city="Londres"
          country="Reino Unido"
          flag="https://www.flaticon.com/svg/vstatic/svg/197/197374.svg?token=exp=1617747234~hmac=5641a6cada8b7297e593903643cc56ad"
        />

      </SimpleGrid>
    </>
  );
}