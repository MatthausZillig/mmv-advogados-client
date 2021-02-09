import Home, { HomeTemplateProps } from 'templates/Home'
import { GetServerSideProps } from 'next'
import { client } from 'lib/prismic'
import Prismic from '@prismicio/client'
import highlightMock from 'components/Highlight/mock'
import highlightMock02 from 'components/Highlight/mock02'
import highlightMock03 from 'components/Highlight/mock03'

export default function index(props: HomeTemplateProps) {
  return <Home {...props} />
}

export const getServerSideProps: GetServerSideProps = async () => {
  const areas = await client().query(
    Prismic.Predicates.at('document.type', 'areas')
  )
  const banners = await client().query(
    Prismic.Predicates.at('document.type', 'bannerhero')
  )
  const articles = await client().query(
    Prismic.Predicates.at('document.type', 'articles'),
    { orderings: '[document.last_publication_date desc]' }
  )
  return {
    props: {
      banners: banners && banners.results,
      bannerGrid: areas && areas.results,
      featureArticles: articles && articles.results,
      monacoHightlight: highlightMock,
      mirandaHightlight: highlightMock,
      vedanaHightlight: highlightMock,
      zillig: highlightMock02,
      ligia: highlightMock03
    }
  }
}
