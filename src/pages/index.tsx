import Home, { HomeTemplateProps } from 'templates/Home'
import bannersMock from 'components/BannerSlider/mock'
import bannersGridMock from 'components/BannerGrid/mock'
import featuresMock from 'components/FeaturesArticles/mock'
import highlightMock from 'components/Highlight/mock'

export default function index(props: HomeTemplateProps) {
  return <Home {...props} />
}

export function getStaticProps() {
  return {
    props: {
      banners: bannersMock,
      bannerGrid: bannersGridMock,
      featureArticles: featuresMock,
      monacoHightlight: highlightMock,
      mirandaHightlight: highlightMock,
      vedanaHightlight: highlightMock
    }
  }
}
