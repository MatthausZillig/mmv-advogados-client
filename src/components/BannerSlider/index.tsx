import * as S from './styles'

import Banner from 'components/Banner'
import { Document } from 'prismic-javascript/types/documents'
import Slider, { SliderSettings } from 'components/Slider'

export type BannerSliderProps = {
  items: Document[]
}

const settings: SliderSettings = {
  dots: true,
  arrows: false,
  vertical: true,
  verticalSwiping: true,
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

const BannerSlider = ({ items }: BannerSliderProps) => {
  return (
    <S.Wrapper>
      <Slider settings={settings}>
        {items.map((item) => (
          <Banner
            key={item.data.title}
            item={items}
            itemHome={item}
            type="home"
          ></Banner>
        ))}
      </Slider>
    </S.Wrapper>
  )
}

export default BannerSlider
