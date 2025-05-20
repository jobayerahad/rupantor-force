import { Container, Grid, Image, Paper, SimpleGrid, Text, Title } from '@mantine/core'

const HomeAbout = () => (
  <Container size="lg" className="section">
    <Grid>
      <Grid.Col span={{ base: 12, md: 4 }} visibleFrom="md">
        <Image src="/home-about.jpg" alt="RFSSL about" radius="lg" />
      </Grid.Col>

      <Grid.Col span={{ base: 12, md: 8 }}>
        <Paper shadow="sm" p="md" bg="#F9F3F3">
          <Title order={2} mb="md" className="heading">
            <span>Rupantor Force</span> – A New Standard in Security Services
          </Title>

          <Text className="text" mb="sm" ta="justify">
            Rupantor Force Security Services Ltd., founded in 2022, is a new and dynamic security service provider in
            Bangladesh, committed to setting high standards in safety, professionalism, and reliability.
          </Text>

          <Text className="text" ta="justify" mb="md">
            We aim to quickly become a trusted name in security services by focusing on quality, responsiveness, and
            client satisfaction.
          </Text>

          <SimpleGrid cols={{ base: 1, md: 3 }}>
            {[
              { title: 'Fresh Approach', text: 'Modern & adaptive security', image: '/brainstorming.png' },
              { title: '25+', text: 'Trained Guards', image: '/arm.png' },
              { title: 'Commitment', text: 'Full Client Support', image: '/approved.png' }
            ].map(({ title, text, image }, index) => (
              <Paper p="sm" bg="#FFFBFB" key={index}>
                <Image src={image} alt="" h="4rem" w="auto" mb="xs" mx="auto" />

                <Title order={6} mb={8} className="title" ta="center">
                  {title}
                </Title>

                <Text className="text" ta="center">
                  {text}
                </Text>
              </Paper>
            ))}
          </SimpleGrid>
        </Paper>
      </Grid.Col>
    </Grid>
  </Container>
)

export default HomeAbout
