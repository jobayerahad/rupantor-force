import { useRef } from 'react'
import Autoplay from 'embla-carousel-autoplay'
import { Carousel } from '@mantine/carousel'
import { Box, Image, SimpleGrid, Text, Title } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'

import classes from '../page.module.css'

const HomeCarousel = () => {
  const autoplay = useRef(Autoplay({ delay: 2500 }))
  const isMobile = useMediaQuery('(max-width: 37.5rem)')

  return (
    <Carousel
      withIndicators
      height={isMobile ? 350 : 600}
      plugins={[autoplay.current]}
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={() => autoplay.current.play()}
      emblaOptions={{
        loop: true
      }}
    >
      {[...Array(3)].map((_, index) => (
        <Carousel.Slide key={index} pos="relative">
          <Image src={`/slider-${index + 1}.jpg`} alt="Rupantor Force SSL" />
          <Box className={classes.carousel}></Box>

          <SimpleGrid cols={{ base: 1, md: 2 }} className={classes['carousel-text']}>
            <Box>
              <Title mb="xs">
                Your Ultimate
                <br />
                <span>Security</span> Service Force
              </Title>

              <Text>
                Dedicated to protecting what matters most — with integrity, vigilance, and unmatched professionalism.
                <br />
                From homes to high-rise offices, we deliver security you can trust, every time.
              </Text>
            </Box>
          </SimpleGrid>
        </Carousel.Slide>
      ))}
    </Carousel>
  )
}

export default HomeCarousel
