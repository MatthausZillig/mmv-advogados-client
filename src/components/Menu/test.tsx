import { render, screen } from '@testing-library/react'

import Menu from '.'

describe('<Menu />', () => {
  it('should render the heading', () => {
    const { container } = render(<Menu />)

    expect(screen.getByTestId('menu')).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
