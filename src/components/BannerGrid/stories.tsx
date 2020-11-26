import { Story, Meta } from '@storybook/react/types-6-0'
import BannerGrid, { BannerGridProps } from '.'

const items = [
  {
    img: 'https://source.unsplash.com/user/willianjusten/1042x580',
    title: 'Title',
    subtitle: 'Subtitle',
    imgLabel: 'Leia mais'
  },
  {
    img: 'https://source.unsplash.com/user/willianjusten/1042x582',
    title: 'Title',
    subtitle: 'Subtitle',
    imgLabel: 'Leia mais'
  },
  {
    img: 'https://source.unsplash.com/user/willianjusten/1042x581',
    title: 'Title',
    subtitle: 'Subtitle',
    imgLabel: 'Leia mais'
  },
  {
    img: 'https://source.unsplash.com/user/willianjusten/1042x580',
    title: 'Title',
    subtitle: 'Subtitle',
    imgLabel: 'Leia mais'
  },
  {
    img: 'https://source.unsplash.com/user/willianjusten/1042x582',
    title: 'Title',
    subtitle: 'Subtitle',
    imgLabel: 'Leia mais'
  },
  {
    img: 'https://source.unsplash.com/user/willianjusten/1042x581',
    title: 'Title',
    subtitle: 'Subtitle',
    imgLabel: 'Leia mais'
  }
]

export default {
  title: 'BannerGrid',
  component: BannerGrid,
  args: { items },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'mmv-dark'
    }
  }
} as Meta

export const Default: Story<BannerGridProps> = (args) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <BannerGrid {...args} />
  </div>
)
