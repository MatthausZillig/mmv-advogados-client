import { BannerProps } from 'components/Banner'
import BannerGrid from 'components/BannerGrid'
import { ImagesProps } from 'components/BannerGrid/ImagesTypes'
import FeaturesArticles, {
  FeaturesArticlesProps
} from 'components/FeaturesArticles'
import { HighlightProps } from 'components/Highlight'
import MediaMatch from 'components/MediaMatch'

import { Container } from 'components/Container'
import Hightlight from 'components/Highlight'
import BannerSlider from 'components/BannerSlider'
import Footer from 'components/Footer'
import Heading from 'components/Heading'
import Menu from 'components/Menu'
import Slider, { SliderSettings } from 'components/Slider'

import * as S from './styles'

export type HomeTemplateProps = {
  banners: BannerProps[]
  bannerGrid: ImagesProps[]
  featureArticles: FeaturesArticlesProps[]
  monacoHightlight: HighlightProps
  mirandaHightlight: HighlightProps
  vedanaHightlight: HighlightProps
  zillig: HighlightProps
  ligia: HighlightProps
}

const settings: SliderSettings = {
  dots: true,
  arrows: false,
  infinite: false,

  responsive: [
    {
      breakpoint: 1170,
      settings: {
        vertical: false,
        verticalSwiping: false
      }
    }
  ]
}

const Home = ({
  banners,
  bannerGrid,
  featureArticles,
  monacoHightlight,
  zillig,
  ligia
}: HomeTemplateProps) => (
  <section>
    <Menu />
    <Container>
      <S.SectionBanner>
        <BannerSlider items={banners} />
      </S.SectionBanner>
    </Container>

    <S.SectionNews>
      <Container>
        <MediaMatch lessThan="medium">
          <S.SectionHeadings>
            <Heading lineLeft lineColor="heading" color="white">
              Novos Artigos
            </Heading>
          </S.SectionHeadings>
        </MediaMatch>
        <FeaturesArticles items={featureArticles} />
      </Container>
    </S.SectionNews>

    <Container>
      <S.SectionHeadings>
        <Heading lineLeft lineColor="heading" color="white">
          Sócios
        </Heading>
      </S.SectionHeadings>
      <S.SectionSocios>
        <Slider settings={settings}>
          <Hightlight {...monacoHightlight} />
          <Hightlight {...zillig} />
          <Hightlight {...ligia} />
          <Hightlight {...zillig} />
        </Slider>
      </S.SectionSocios>
    </Container>

    <Container>
      <S.SectionHeadings>
        <Heading color="white" lineColor="heading" lineLeft>
          O que oferecemos
        </Heading>
      </S.SectionHeadings>
      <BannerGrid items={bannerGrid} />
    </Container>
    <S.SectionFooter>
      <Container>
        <Footer />
      </Container>
    </S.SectionFooter>
  </section>
)

export default Home
