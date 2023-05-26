import Link from "next/link";
import Head from "next/head";
import { 
  Button, 
  Flex, 
  Heading, 
  Stack, 
  Switch, 
  Text, 
  useMediaQuery 
} from "@chakra-ui/react";
import { IoMdPricetag } from 'react-icons/io';
import { Sidebar } from "@/components/sidebar";

export default function Haircuts(){
  const [isMobile] = useMediaQuery("(max-width: 500px)")
  return(
    <>
      <Head>
        <title>Services catalog - My barbershop</title>
      </Head>
      <Sidebar>
        <Flex direction="column" alignItems="flex-start" justifyContent="flex-start">
          <Flex
            direction={isMobile ? 'column' : "row"}
            w="100%"
            alignItems={isMobile ? 'flex-start' : "center"}
            justifyContent="flex-start"
            mb={0}
          >
            <Heading
              fontSize={isMobile ? '26px' : "3xl"}
              mt={4}
              mb={4}
              mr={4}
              color="orange.900"
            >
              Services Menu
            </Heading>
            <Link href="/haircuts/new">
              <Button>
                New service
              </Button>
            </Link>
            <Stack ml="auto" align="center" direction="row">
              <Text fontWeight="bold" color="white">Actives</Text>
              <Switch 
                colorScheme="green"
                size="lg"
              />
            </Stack>
          </Flex>

          <Link href="/haircuts/123">
            <Flex
              cursor="pointer"
              w="100%"
              p={4}
              bg="barber.400"
              direction="row"
              rounded="4"
              mb={2}
              justifyContent="space-between"
            >
              <Flex direction="row" alignItems="center" justifyContent="center">
                <IoMdPricetag size={28} color="#fba931" />
                <Text fontWeight="bold" color="white" ml={4} noOfLines={2}>Barba</Text>
              </Flex>
              <Text fontWeight="bold" color="white">
                Price: £13.90
              </Text>

            </Flex>
          </Link>
        </Flex>
      </Sidebar>
    </>
  )
}