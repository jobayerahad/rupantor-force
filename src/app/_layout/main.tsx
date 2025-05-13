'use client'

import { ReactNode } from 'react'
import { Box } from '@mantine/core'
import { ModalsProvider } from '@mantine/modals'

import Header from './Header'
import Footer from './Footer'

type Props = {
  children: ReactNode
}

const Structure = ({ children }: Props) => (
  <ModalsProvider>
    <Header />

    <Box component="main" mih="calc(100dvh - 32rem)">
      {children}
    </Box>

    <Footer />
  </ModalsProvider>
)

export default Structure
