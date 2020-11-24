import { Story, Meta } from '@storybook/react/types-6-0'
import FeaturesArticles, { FeatureProps } from '.'

const items = [
  {
    img:
      'https://thefront.maccarianagency.com/assets/images/photos/blog/cover3.jpg',
    title: 'NIKE Online Store launches the website',
    subtitle: 'Jack Smith - 04 Aug',
    description:
      'Be Your Best Every Time With Nike Shoes And Clothing. Shop Online. The Official Website. Home Of Everything Nike. Shop The Latest Releases Today! Types: Shoes, Tops.',
    chips: ['chip', 'chipado']
  },
  {
    img:
      'https://thefront.maccarianagency.com/assets/images/photos/blog/cover3.jpg',
    title: 'NIKE Online Store launches the website',
    subtitle: 'Jack Smith - 04 Aug',
    description:
      'Be Your Best Every Time With Nike Shoes And Clothing. Shop Online. The Official Website. Home Of Everything Nike. Shop The Latest Releases Today! Types: Shoes, Tops.',
    chips: ['chip', 'chipado']
  }
]

export default {
  title: 'FeaturesArticles',
  component: FeaturesArticles,
  args: { items },
  parameters: {
    layout: 'fullscreen'
  }
} as Meta

export const Default: Story<FeatureProps> = (args) => (
  <div style={{ maxWidth: '120rem', margin: '0 auto' }}>
    <FeaturesArticles {...args} />
  </div>
)
