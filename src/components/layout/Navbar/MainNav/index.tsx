import Link from 'next/link'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { Box, Burger, Center, Container, Group, Image, Menu, Text, useComputedColorScheme } from '@mantine/core'
import { useDisclosure, useMediaQuery } from '@mantine/hooks'
import { FaChevronDown as DownIcon } from 'react-icons/fa'

import classes from './styles.module.css'

const MainNavbar = () => {
  const [opened, { toggle }] = useDisclosure(false)
  const lgScreen = useMediaQuery('(min-width: 900px)')

  return (
    <Container className={classes.inner} size="lg">
      <Group gap={8}>
        <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />

        <Link href="/">
          <Image
            src="/logo.png"
            alt="Rupantor Force Security Services Ltd."
            width="auto"
            height={lgScreen ? 65 : 48}
            fit="contain"
          />
        </Link>
      </Group>

      <Group className={classes.navbar} visibleFrom="sm">
        <Link href="/" className={classes.link}>
          Home
        </Link>
        <Link href="/about" className={classes.link}>
          About Us
        </Link>
        <Link href="/services" className={classes.link}>
          Services
        </Link>
        <Link href="/contact" className={classes.link}>
          Contact
        </Link>
      </Group>
    </Container>
  )
}

export default MainNavbar
