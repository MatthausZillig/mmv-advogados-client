import { Story, Meta } from '@storybook/react/types-6-0'
import { ArrowRight } from '@styled-icons/bootstrap/ArrowRight'

import Button from '.'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string'
    },
    icon: {
      type: ''
    }
  }
} as Meta

export const Default: Story = (args) => <Button {...args} />
export const withIcon: Story = (args) => <Button {...args} />
export const withBorder: Story = (args) => <Button {...args} />

Default.args = {
  children: 'Veja mais'
}

withIcon.args = {
  size: 'small',
  children: 'Veja mais',
  icon: <ArrowRight />
}

withBorder.args = {
  size: 'medium',
  children: 'Veja mais',
  withBorder: true
}
