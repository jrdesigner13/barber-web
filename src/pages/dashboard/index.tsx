import Head from "next/head";
import { Flex, Text } from "@chakra-ui/react";
import { canSSRAuth } from "@/utils/canSSRAuth";
import { Sidebar } from "@/components/sidebar";

export default function Dashboard(){
  return(
    <>
      <Head>
        <title>BarberPro - My Barber shop</title>
      </Head>
      <Sidebar>
        <Flex>
          <Text>Barber</Text>
        </Flex>
      </Sidebar>
    </>
  )
}

export const getServerSideProps = canSSRAuth(async (ctx) => {
  return {
    props: {

    }
  }
})