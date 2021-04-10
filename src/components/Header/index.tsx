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
          ml={["16", "20", "36"]}
          mt={["6", "7", "10"]}
          w={["4px", "6px", "8px"]}
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
        h={["20px", "30px", "45px"]}
        my={["4", "5", "7"]}
        />
    </>
  );
}