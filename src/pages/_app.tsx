import { AppProps } from 'next/app'
import SEO from 'components/Seo'
import { ThemeProvider } from 'styled-components'

import GlobalStyles from 'styles/global'
import theme from 'styles/theme'

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <SEO
        title="Monaco, Mirando & Vedana"
        image="/img/logo-transparent.png"
        description="Competência técnica na área Jurídica e no atendimento aos clientes. Clique Aqui e escloha a Monaco, Miranda & Vedana Advogados Associados"
      />

      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
