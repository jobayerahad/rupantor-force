import { Button, Container, Paper, SimpleGrid, Text, Title } from '@mantine/core'
import { FaArrowRightLong as ArrowIcon } from 'react-icons/fa6'

const HomeServices = () => (
  <section className="section section-clean">
    <Container size="lg">
      <Title order={2} mb="sm" className="heading">
        Areas we serve
      </Title>

      <SimpleGrid cols={{ base: 1, md: 2 }}>
        <Text className="text" mb="sm" ta="justify">
          Our dedicated team strives to exceed customer expectations with every service we provide. In Bangladesh, we
          proudly operate across a range of specialized security sectors including:
        </Text>
      </SimpleGrid>

      <SimpleGrid cols={{ base: 1, md: 3 }}>
        {[
          { title: 'Residential Premises Security', image: '/area-3.jpg' },
          { title: 'Financial Premises Security', image: '/area-1.jpg' },
          { title: 'Public Premises Security', image: '/area-2.jpg' }
        ].map(({ title, image }, index) => (
          <Paper
            p="md"
            pos="relative"
            key={index}
            style={{
              background: `linear-gradient(to bottom, rgba(84, 46, 46, 0.6),rgba(50, 30, 30, 0.6) 50%,rgba(34, 21, 21, 0.6) 75%,rgba(18, 12, 12, 0.6) 100%), url(${image})`,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end'
            }}
            mih={400}
          >
            <Text mb="xs" className="title" maw="70%" lh={1.4} c="white">
              {title}
            </Text>

            <Button
              variant="outline"
              rightSection={<ArrowIcon />}
              c="white"
              w="fit-content"
              style={{ borderColor: '#A55052' }}
            >
              Learn More
            </Button>
          </Paper>
        ))}
      </SimpleGrid>
    </Container>
  </section>
)

export default HomeServices
