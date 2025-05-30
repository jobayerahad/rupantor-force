import { createTheme } from '@mantine/core'

export const theme = createTheme({
  defaultGradient: { from: '#A55052', to: '#542E2E', deg: 60 },
  defaultRadius: 'lg',
  cursorType: 'pointer',
  autoContrast: true,
  luminanceThreshold: 0.45,

  white: '#FDFDFD',
  black: '#28282B',

  colors: {
    brand: [
      '#F0E5F2',
      '#D9BFDE',
      '#C094C8',
      '#A769B1',
      '#9449A1',
      '#812990',
      '#792488',
      '#6E1F7D',
      '#641973',
      '#510F61'
    ]
  },

  primaryColor: 'brand',

  fontFamily: 'var(--font-lato)',

  headings: {
    fontFamily: 'var(--font-poppins)'
  },

  spacing: {
    xs: '0.9rem',
    sm: '1.2rem',
    md: '1.5rem',
    lg: '2rem',
    xl: '2.5rem'
  },

  components: {
    Anchor: {
      defaultProps: {
        c: 'blue',
        size: 'sm'
      }
    },
    ActionIcon: {
      defaultProps: {
        variant: 'gradient'
      }
    },
    Button: {
      defaultProps: {
        variant: 'gradient'
      }
    }
  }
})
