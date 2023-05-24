import Head from "next/head";
import { Flex, Text } from "@chakra-ui/react";
import { canSSRAuth } from "@/utils/canSSRAuth";

export default function Dashboard(){
  return(
    <>
      <Head>
        <title>BarberPro - My Barber shop</title>
      </Head>
      <Flex>
        <Text>Barber</Text>
      </Flex>
    </>
  )
}

export const getServerSideProps = canSSRAuth(async (ctx) => {
  return {
    props: {
      
    }
  }
})