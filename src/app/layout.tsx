import clsx from 'clsx'
import { ReactNode } from 'react'
import type { Metadata } from 'next'
import { MantineProvider, ColorSchemeScript } from '@mantine/core'
import { NavigationProgress } from '@mantine/nprogress'
import { Notifications } from '@mantine/notifications'
import { Roboto_Slab, Open_Sans } from 'next/font/google'

import '@mantine/core/styles.css'
import '@mantine/dates/styles.css'
import '@mantine/notifications/styles.css'
import '@mantine/nprogress/styles.css'
import './globals.css'
import Structure from './_layout/main'
import { theme } from '@config/theme'
import { sharedMetadata } from '@config/meta'

const lato = Open_Sans({
  subsets: ['latin'],
  variable: '--font-lato',
  weight: ['300', '400', '700']
})

const poppins = Roboto_Slab({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['400', '500', '700']
})

export const metadata: Metadata = {
  ...sharedMetadata({
    title: 'Rupantor Force Security Services Limited',
    description:
      'Rupantor Force Security Services Limited is a private commercial bank in Bangladesh. We provide banking products and services to individuals, businesses, and corporate clients.',
    path: ''
  }),
  title: {
    default: 'Rupantor Force Security Services Limited',
    template: `%s - Rupantor Force Security Services Limited`
  },
  authors: { name: 'Jobayer Al Mahmud Ahad', url: 'https://www.jobayerahad.com' },
  creator: 'Rupantor Force Security Services Limited'
}

type Props = {
  children: ReactNode
}

const RootLayout = ({ children }: Props) => (
  <html lang="en" className={clsx(lato.variable, poppins.variable)} suppressHydrationWarning>
    <head>
      <ColorSchemeScript defaultColorScheme="auto" />
    </head>

    <body>
      <MantineProvider theme={theme} defaultColorScheme="auto" classNamesPrefix="sbac">
        <NavigationProgress />
        <Notifications />

        <Structure>{children}</Structure>
      </MantineProvider>
    </body>
  </html>
)

export default RootLayout
