import { cleanup, screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import FeaturesArticles from '.'

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
    title: 'NIKE Online Store launches the website1',
    subtitle: 'Jack Smith - 04 Aug',
    description:
      'Be Your Best Every Time With Nike Shoes And Clothing. Shop Online. The Official Website. Home Of Everything Nike. Shop The Latest Releases Today! Types: Shoes, Tops.',
    chips: ['chip', 'chipado']
  }
]

describe('<FeaturesArticles/>', () => {
  afterEach(cleanup)
  it('shold be render a heading with title', () => {
    renderWithTheme(<FeaturesArticles items={items} />)
    expect(
      screen.getByRole('heading', { name: /feature articles/i })
    ).toBeInTheDocument()
  })

  it('shold be render a button', () => {
    renderWithTheme(<FeaturesArticles items={items} />)
    expect(
      screen.getByRole('button', { name: /view more/i })
    ).toBeInTheDocument()
  })

  it('shold be render a heading with title', () => {
    renderWithTheme(<FeaturesArticles items={items} />)

    expect(screen.getByTestId('card')).toBeInTheDocument
  })
})
