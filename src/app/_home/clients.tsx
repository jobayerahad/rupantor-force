import { Badge, Box, Container, Flex, SimpleGrid, Text, Title } from '@mantine/core'

const HomeClients = () => (
  <Box
    style={{
      backgroundImage: 'url(/clients-bg.jpg)',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    }}
    className="section"
  >
    <Container size="lg">
      <SimpleGrid cols={{ base: 1, md: 2 }}>
        <Box>
          <Title order={2} mb="sm" className="heading" c="white">
            Trusted by
            <br /> Satisfied Clients
            <br /> Across Bangladesh
          </Title>

          <Text className="text" mb="sm" ta="justify" c="#C2C2C2">
            Their trust is a reflection of our unwavering commitment to excellence.
          </Text>
        </Box>

        <Flex wrap="wrap" gap="xs" justify="center" align="center" h="fit-content">
          {[
            'Keranigonj Garments Bebosayee & Dokan Malik Samabai Somity Ltd.',
            'Afrah Bags (Blanket Factory), Nishan Bari, Keranigonj',
            'Aybedi Medicine Factory, Nishanbari, Keraniganj',
            'Steel Mill, Madanpur, Narayangonj',
            'Nahar Garden, Sipahibagh'
          ].map((client, index) => (
            <Badge variant="default" tt="capitalize" size="lg" key={index}>
              {client}
            </Badge>
          ))}
        </Flex>
      </SimpleGrid>
    </Container>
  </Box>
)

export default HomeClients
