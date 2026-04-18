import Link from 'next/link'
import { Box, Button, Container, Group, Text, Title } from '@mantine/core'
import { FaArrowRightLong as ArrowIcon } from 'react-icons/fa6'

export const HomeCta = () => (
  <Box
    style={{
      backgroundImage: 'linear-gradient(to bottom, #F9F3F3,#ffe2e2)'
    }}
    className="section"
  >
    <Container size="lg">
      <Title order={2} mb="sm" ta="center" className="heading">
        Protect What Matters Most Reliable and advanced protection you can trust
      </Title>

      <Text className="text" mb="sm" ta="center">
        Let us safeguard your home, business, or institution with expert security services.
      </Text>

      <Group mx="auto" gap="xs" justify="center">
        <Button component={Link} href="tel:+8801911625295">
          Contact Us
        </Button>

        <Button variant="outline" rightSection={<ArrowIcon />}>
          learn more
        </Button>
      </Group>
    </Container>
  </Box>
)
