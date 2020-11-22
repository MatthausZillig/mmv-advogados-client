import { Story, Meta } from '@storybook/react/types-6-0'
import BannerGrid, { BannerGridProps } from '.'

const items = [
  {
    img: 'https://source.unsplash.com/user/willianjusten/1042x580'
  },
  {
    img: 'https://source.unsplash.com/user/willianjusten/1042x582'
  },
  {
    img: 'https://source.unsplash.com/user/willianjusten/1042x581'
  },
  {
    img: 'https://source.unsplash.com/user/willianjusten/1042x580'
  },
  {
    img: 'https://source.unsplash.com/user/willianjusten/1042x582'
  },
  {
    img: 'https://source.unsplash.com/user/willianjusten/1042x581'
  }
]

export default {
  title: 'BannerGrid',
  component: BannerGrid,
  args: { items },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Default: Story<BannerGridProps> = (args) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <BannerGrid {...args} />
  </div>
)
