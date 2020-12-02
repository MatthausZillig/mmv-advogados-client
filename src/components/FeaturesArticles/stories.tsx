import { Story, Meta } from '@storybook/react/types-6-0'
import FeaturesArticles, { FeatureProps } from '.'
import items from './mock'

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
