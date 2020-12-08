import { Story, Meta } from '@storybook/react/types-6-0'
import OurStory from '.'

export default {
  title: 'OurStory',
  component: OurStory
} as Meta

export const Default: Story = () => <OurStory />
