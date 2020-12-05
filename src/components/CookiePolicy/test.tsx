import { render, screen } from '@testing-library/react'

import CookiePolicy from '.'

describe('<CookiePolicy />', () => {
  it('should render the heading', () => {
    const { container } = render(<CookiePolicy />)

    expect(screen.getByRole('heading', { name: /CookiePolicy/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
