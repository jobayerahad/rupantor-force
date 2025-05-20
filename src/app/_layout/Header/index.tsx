import Link from 'next/link'
import { Box, Burger, Container, Group, Image, Menu, Text, Title } from '@mantine/core'
import { useDisclosure, useMediaQuery } from '@mantine/hooks'

import classes from './styles.module.css'

const Header = () => {
  const [opened, { toggle }] = useDisclosure(false)
  const isMobile = useMediaQuery('(max-width: 37.5rem)')

  return (
    <Box className={classes.root} size="lg">
      <Container size="lg" className={classes.container}>
        <Group justify="space-between" align="center">
          <Link href="/">
            <Group justify="center" align="center" gap="xs">
              <Image
                src="/logo.png"
                alt="Rupantor Force Security Services Ltd."
                width="auto"
                height={48}
                fit="contain"
                flex={1}
              />

              <Box className={classes.text}>
                <Title order={2} size="xl">
                  Rupantor Force
                </Title>

                <Text size="sm">Security Services Ltd.</Text>
              </Box>
            </Group>
          </Link>

          {isMobile ? (
            <Burger opened={opened} onClick={toggle} size="sm" className={classes.text} />
          ) : (
            <Group className={classes.navbar} visibleFrom="sm">
              <Link href="/" className={classes.link}>
                Home
              </Link>

              <Menu trigger="hover" withArrow>
                <Menu.Target>
                  <Text className={classes.link}>About Us</Text>
                </Menu.Target>

                <Menu.Dropdown>
                  <Menu.Item component={Link} href="/overview">
                    Overview
                  </Menu.Item>

                  <Menu.Item component={Link} href="/board-of-directors">
                    Board of Directors
                  </Menu.Item>
                </Menu.Dropdown>
              </Menu>

              <Link href="/services" className={classes.link}>
                Services
              </Link>

              <Link href="/contact" className={classes.link}>
                Contact Us
              </Link>
            </Group>
          )}
        </Group>
      </Container>
    </Box>
  )
}

export default Header
