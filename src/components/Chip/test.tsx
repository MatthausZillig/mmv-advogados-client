import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import Chip from '.'

describe('<Chip />', () => {
  it('should render the chip', () => {
    const { container } = renderWithTheme(<Chip>Chip</Chip>)

    expect(screen.getByTestId('chip')).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
