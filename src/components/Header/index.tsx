import { Image } from "@chakra-ui/react";
import { useRouter } from "next/router";
import Link from "next/link";

export function Header() {
  const router = useRouter();

  return (
    <>
    {router.asPath !== "/" 
    ? 
      <Link href="/">
        <Image
          cursor="pointer"
          alt="Voltar"
          src="/images/back.svg"
          ml="36"
          mt="10"
          w="8px"
          position="absolute"
        />
      </Link>
    :
      ''
    }
      <Image 
        align="center"
        src="/images/logo.svg" 
        alt="Logo" 
        h="45px"
        my="7"
        />
    </>
  );
}