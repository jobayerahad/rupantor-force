'use client'

import { Container, Flex, Image, Title } from '@mantine/core'

const Home = () => {
  return (
    <Container mb="xl">
      <Flex direction="column" align="center" justify="center">
        <Image src="/under-development.png" alt="Under Development" h={500} w="auto" />
        <Title ta="center" c="gray.7">
          This website is under development
        </Title>
      </Flex>
    </Container>
  )
}

export default Home
