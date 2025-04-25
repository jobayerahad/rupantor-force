'use client'

import { ReactNode } from 'react'
import { Box } from '@mantine/core'
import { ModalsProvider } from '@mantine/modals'

import Footer from './Footer'
import Navbar from './Navbar'

type Props = {
  children: ReactNode
}

const Structure = ({ children }: Props) => (
  <ModalsProvider>
    <Navbar />

    <Box component="main" mih="calc(100dvh - 32rem)">
      {children}
    </Box>

    <Footer />
  </ModalsProvider>
)

export default Structure
