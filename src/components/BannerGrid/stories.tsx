import { Story, Meta } from '@storybook/react/types-6-0'
import BannerGrid, { BannerGridProps } from '.'

import items from './mock'

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
