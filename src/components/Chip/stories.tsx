import { Story, Meta } from '@storybook/react/types-6-0'
import Chip, { ChipProps } from '.'

export default {
  title: 'Chip',
  component: Chip
} as Meta

export const Default: Story<ChipProps> = () => (
  <div style={{ display: 'flex', width: '20rem' }}>
    <Chip>Chip</Chip>
  </div>
)
