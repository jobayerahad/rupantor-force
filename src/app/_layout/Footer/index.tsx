import Link from 'next/link'
import {
  ActionIcon,
  Affix,
  Box,
  Container,
  Flex,
  Group,
  Image,
  SimpleGrid,
  Text,
  Title,
  Transition
} from '@mantine/core'
import { useWindowScroll } from '@mantine/hooks'

import { FaChevronUp as TopIcon, FaFacebookF as FbIcon } from 'react-icons/fa'
import { GrMail as MailIcon } from 'react-icons/gr'
import { MdPhone as PhoneIcon, MdLocationOn as LocationIcon } from 'react-icons/md'

import classes from './styles.module.css'

const Footer = () => {
  const [scroll, scrollTo] = useWindowScroll()

  return (
    <Box component="footer" pos="relative">
      <Box className={classes.background} />

      <Container size="lg" className={classes.container}>
        <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="xs" className={classes.topBar}>
          <div className={classes.text}>
            <Link href="/">
              <Image
                src="/logo.png"
                alt="Rupantor Force Security Services Ltd."
                w="auto"
                h={120}
                fit="contain"
                mb="xs"
                mx="auto"
              />

              <Title order={2} c="gray.3" size={22} ta="center" mb={8}>
                Rupantor Force
                <br />
                Security Services Ltd.
              </Title>

              <Text color="#B1B1B1" ta="center" size="sm">
                (A New Standard in Security Services)
              </Text>
            </Link>
          </div>

          <div>
            <Title order={6} className={classes.title}>
              Information On
            </Title>

            <Flex direction="column" className={classes.content}>
              {[
                { title: 'About Us', url: '/about-us' },
                { title: 'Our Services', url: '/services' },
                { title: 'Contact Us', url: '/contact-us' },
                { title: 'Blogs', url: '/blogs' },
                { title: 'Career', url: '/career' },
                { title: 'Privacy Policy', url: '/privacy-policy' },
                { title: 'Terms & Conditions', url: '/terms-conditions' }
              ].map(({ url, title }, index) => (
                <Text component={Link} href={url} key={index}>
                  {title}
                </Text>
              ))}
            </Flex>
          </div>

          <div>
            <Title order={6} className={classes.title}>
              Find Us On
            </Title>

            <Group gap="xs" mb={8}>
              <LocationIcon size={18} color="#B1B1B1" />

              <Text
                component={Link}
                href="https://maps.app.goo.gl/qN9fFkSJRm71HEiJ6"
                target="_blank"
                className={classes.link}
              >
                House No. 02 (3<sup>rd</sup> Floor),
                <br /> Road No. 12, Rajuk R/A, <br />
                Merul Badda, Dhaka-1212
              </Text>
            </Group>

            <Group gap="xs" mb={4}>
              <PhoneIcon size={18} color="#B1B1B1" />

              <div>
                <Text component={Link} className={classes.link} href="tel:+8801721871675">
                  +880 1721-871675
                </Text>
                <br />
                <Text component={Link} className={classes.link} href="tel:+8801911625295">
                  +880 1911-625295
                </Text>
              </div>
            </Group>

            <Group gap="xs" mb={4}>
              <FbIcon size={18} color="#B1B1B1" />

              <Text component={Link} className={classes.link} href="https://www.facebook.com/rupantorforce">
                fb.com/rupantorforce
              </Text>
            </Group>

            <Group gap="xs" mb={4}>
              <MailIcon size={18} color="#B1B1B1" />

              <div>
                <Text component={Link} className={classes.link} href="mailto:contact@rupantorforce.com">
                  contact@rupantorforce.com
                </Text>
                {/* <br />
                <Text component={Link} className={classes.link} href="mailto:rupantorforce@gmail.com">
                  rupantorforce@gmail.com
                </Text> */}
              </div>
            </Group>
          </div>
        </SimpleGrid>

        <Box className={classes.copyright}>
          <Text size="sm" c="gray.5" ta="center">
            &copy; 2021 - {new Date().getFullYear()}&nbsp;
            <Text component={Link} href="/" className={classes.link}>
              Rupantor Force Security Services Ltd.
            </Text>
            &nbsp; All rights reserved.
          </Text>
        </Box>
      </Container>

      <Affix position={{ bottom: 20, right: 20 }}>
        <Transition transition="slide-up" mounted={scroll.y > 250}>
          {(transitionStyles) => (
            <ActionIcon style={transitionStyles} onClick={() => scrollTo({ y: 0 })}>
              <TopIcon />
            </ActionIcon>
          )}
        </Transition>
      </Affix>
    </Box>
  )
}

export default Footer
