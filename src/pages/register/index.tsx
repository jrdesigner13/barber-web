import { useState, useContext } from "react"
import Head from "next/head"
import { Button, Center, Flex, Input, Text } from "@chakra-ui/react"
import Image from "next/image"
import Link from "next/link"

import { AuthContext } from "@/context/AuthContext"
import logoImg from '../../../public/images/logo.svg'
import { canSSRGuest } from "@/utils/canSSRGuest"

export default function Register(){
  const { signUp } = useContext(AuthContext);
  const [barber, setBarber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleRegister(){
    if(barber === '' && email === '' && password === ''){
      return;
    }

    await signUp({
      name: barber,
      email,
      password
    })
  }

  return(
    <>
      <Head>
        <title>BarberPRO - Create new account</title>
      </Head>
      <Flex background="barber.900" height="100vh" alignItems="center" justifyContent="center">
        <Flex width={640} direction="column" p={14} rounded={8}>
          <Center p={4}>
            <Image 
              src={logoImg}
              quality={100}
              width={240}
              objectFit="fill"
              alt="Logo barberpro"
            />
          </Center>
          <Input 
            background="barber.400"
            variant="filled"
            size="lg"
            placeholder="name of Barber"
            type="text"
            mb={3}
            color="#FFF"
            value={barber}
            onChange={(e) => setBarber(e.target.value)}
          />
          <Input 
            background="barber.400"
            variant="filled"
            size="lg"
            placeholder="your@email.com"
            type="email"
            mb={3}
            color="#FFF"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input 
            background="barber.400"
            variant="filled"
            size="lg"
            placeholder="*******"
            type="text"
            mb={6}
            color="#FFF"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            background="button.cta"
            mb={6}
            color="gray.900"
            size="lg"
            _hover={{ bg: "#ffb13e" }}
            onClick={handleRegister}
          >
            Register
          </Button>
          <Center mt={2}>
            <Link href="/login">
             <Text cursor="pointer">Access your account <strong>Sign in</strong></Text>
            </Link>
          </Center>
        </Flex>
      </Flex>
    </>
  )
}

export const getServerSideProps = canSSRGuest(async (ctx) => {
  return{
    props: {}
  }
})