import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Footer from '.'

describe('<Footer />', () => {
  it('should render 4 column topics', () => {
    renderWithTheme(<Footer />)

    expect(
      screen.getByRole('heading', { name: /contato/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /redes sociais/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: /links/i })).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /localização/i })
    ).toBeInTheDocument()
  })
})
