import { Box, Flex, Image, Text, Tooltip } from "@chakra-ui/react";
import { GetServerSideProps } from 'next';
import Head from 'next/head';

import { Header } from '../components/Header';
import { Banner } from '../components/Banner';
import { Info } from '../components/Info';
import { Cities } from '../components/Cities';
import { info } from "node:console";

interface AbouProps {
  banner: string;
  title: string;
  bio: string;
  info: {
    countries: number;
    languages: number;
    cities: number;
  }
}

interface CitieProps {
  id: number;
  image: string;
  city: string;
  country: string;
  flag: string;
}

interface ContinentProps {
  about: AbouProps;
  cities: CitieProps[];
}

export default function Continent({ about, cities }: ContinentProps) {
  
  return (
    <>
      <Head>
        <title>{about.title} | worldtrip</title>
      </Head>
      <Flex
        direction="column"
      >
        <Header />

        <Banner 
          banner={about.banner}
          title={about.title}
        />

        <Box
          mx={["4", "16", "36"]}
          mt={["6", "14", "20"]}
          mb={["8", "9"]}
        >
          <Info 
            allCities={cities.length}
            bio= {about.bio}
            info= {about.info}
          />
          
          <Cities 
            cities={cities}
          />
        </Box>
        
      </Flex>
    </>
  )
}


export const getServerSideProps: GetServerSideProps = async ({req, params}) => {
  const { continent } = params;

  const response = await fetch(`http://localhost:3333/${continent}`);
  const { about, cities } = await response.json();

  return {
    props: {
      about,
      cities,
    }
  }
}