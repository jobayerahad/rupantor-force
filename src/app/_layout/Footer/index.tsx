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
  Tooltip,
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
    <Box component="footer" bg="#252525">
      <Container size="lg">
        <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="xs" className={classes.root}>
          <div className={classes.text}>
            <Link href="/">
              <Image
                src="/logo.png"
                alt="Rupantor Force Security Services Ltd."
                w="auto"
                h={100}
                fit="contain"
                mb={8}
              />

              <Title order={2} c="gray.3" size={22}>
                Rupantor Force
                <br />
                Security Services Ltd.
              </Title>
            </Link>

            <Group mt="xs" gap={8} justify="space-between">
              <Tooltip label="Facebook" position="bottom" withArrow>
                <ActionIcon
                  component={Link}
                  href="https://www.facebook.com/rupantorforce"
                  target="_blank"
                  size="lg"
                  radius="xl"
                >
                  <FbIcon />
                </ActionIcon>
              </Tooltip>
            </Group>
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
              <LocationIcon size={18} />
              <Text component={Link} href="https://maps.app.goo.gl/vEnypDzwCSoFzdfH6">
                House No. 02 (3<sup>rd</sup> Floor),
                <br /> Road No. 12, Rajuk R/A, <br />
                Merul Badda, Dhaka-1212
              </Text>
            </Group>

            <Group gap="xs" mb={4}>
              <PhoneIcon size={18} />

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
              <MailIcon size={18} />

              <div>
                <Text component={Link} className={classes.link} href="mailto:contact@rupantorforce.com">
                  contact@rupantorforce.com
                </Text>
                <br />
                <Text component={Link} className={classes.link} href="mailto:rupantorforce@gmail.com">
                  rupantorforce@gmail.com
                </Text>
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
