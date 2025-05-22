import clsx from 'clsx'
import { ReactNode } from 'react'
import type { Metadata } from 'next'
import Script from 'next/script'
import { MantineProvider, ColorSchemeScript } from '@mantine/core'
import { NavigationProgress } from '@mantine/nprogress'
import { Notifications } from '@mantine/notifications'
import { Roboto_Slab, Open_Sans } from 'next/font/google'

import '@mantine/core/styles.css'
import '@mantine/dates/styles.css'
import '@mantine/notifications/styles.css'
import '@mantine/nprogress/styles.css'
import '@mantine/carousel/styles.css'
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
      'Rupantor Force Security Services Ltd., founded in 2022, is a new and dynamic security service provider in Bangladesh, committed to setting high standards in safety, professionalism, and reliability.',
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
      <ColorSchemeScript defaultColorScheme="light" />
    </head>

    <body>
      <MantineProvider theme={theme} defaultColorScheme="light" classNamesPrefix="rfssl">
        <NavigationProgress />
        <Notifications />

        <Structure>{children}</Structure>
      </MantineProvider>

      {process.env.NODE_ENV === 'production' && (
        <>
          <Script
            async
            strategy="lazyOnload"
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_TRACKING_ID}`}
          />
          <Script strategy="lazyOnload" id="RFSSL-GA">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
          
              gtag('config', '${process.env.NEXT_PUBLIC_GA_TRACKING_ID}');
            `}
          </Script>
        </>
      )}
    </body>
  </html>
)

export default RootLayout
