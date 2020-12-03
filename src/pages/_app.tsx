import { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'

import GlobalStyles from 'styles/global'
import theme from 'styles/theme'

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Monaco, Mirando & Vedana</title>
        <link rel="shortcut icon" href="/img/favicon.png" />
        <link rel="apple-touch-icon" href="/img/favicon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#6FA1F6"></meta>
        <meta
          name="description"
          content="Competência técnica na área Jurídica e no atendimento aos clientes. Clique Aqui e escloha a Monaco, Miranda & Vedana Advogados Associados"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
