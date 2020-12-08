import Head from 'next/head'

type SEOProps = {
  title: string
  description?: string
  image?: string
  shouldExcludeTitleSufflix?: boolean
  shouldIndexPage?: boolean
}

const Seo = ({
  title,
  description,
  image,
  shouldExcludeTitleSufflix = false
}: SEOProps) => {
  const pageTitle = `${title} ${
    !shouldExcludeTitleSufflix ? '| MMV Advogados' : ''
  }`
  const pageImage = image ? `http://localhost:3000/${image}` : null

  return (
    <Head>
      <title>{pageTitle}</title>
      <link rel="shortcut icon" href="/img/favicon.png" />
      <link rel="apple-touch-icon" href="/img/favicon.png" />
      <link rel="manifest" href="/manifest.json" />
      {pageImage && <meta name="image" content={pageImage} />}
      <meta httpEquiv="x-ua-compatible" content="IE=edge,chrome=1" />
      <meta name="MobileOptimized" content="320" />
      <meta name="HandheldFriendly" content="True" />
      <meta name="theme-color" content="#6FA1F6"></meta>
      <meta name="msapplication-TileColor" content="#6FA1F6" />
      <meta name="referrer" content="no-referrer-when-downgrade" />
      <meta name="google" content="notranslate" />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={pageTitle} />
      {pageImage && <meta property="og:image" content={pageImage} />}
      {pageImage && <meta property="og:image:secure_url" content={pageImage} />}
      <meta property="og:image:alt" content="Thumbnail" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
    </Head>
  )
}
export default Seo
