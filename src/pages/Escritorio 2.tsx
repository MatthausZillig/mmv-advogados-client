import Escritorio, { EscritorioTemplateProps } from 'templates/Escritorio'
import bannerEscritorioMock from 'components/BannerEscritorio/mock'

export default function index(props: EscritorioTemplateProps) {
  return <Escritorio {...props} />
}

export function getStaticProps() {
  return {
    props: {
      banner: bannerEscritorioMock
    }
  }
}
