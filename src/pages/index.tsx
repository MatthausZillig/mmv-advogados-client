import Home, { HomeTemplateProps } from 'templates/Home'
import { GetStaticProps } from 'next'
import { client } from 'lib/prismic'
import Prismic from '@prismicio/client'
import bannersMock from 'components/BannerSlider/mock'
import featuresMock from 'components/FeaturesArticles/mock'
import highlightMock from 'components/Highlight/mock'
import highlightMock02 from 'components/Highlight/mock02'
import highlightMock03 from 'components/Highlight/mock03'

export default function index(props: HomeTemplateProps) {
  return <Home {...props} />
}

export const getStaticProps: GetStaticProps = async () => {
  const areas = await client().query(
    Prismic.Predicates.at('document.type', 'areas')
  )
  console.log(areas.results)
  return {
    props: {
      banners: bannersMock,
      bannerGrid: areas && areas.results,
      featureArticles: featuresMock,
      monacoHightlight: highlightMock,
      mirandaHightlight: highlightMock,
      vedanaHightlight: highlightMock,
      zillig: highlightMock02,
      ligia: highlightMock03
    }
  }
}
