import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import BannerGrid from '.'

const items = [
  {
    img: 'https://source.unsplash.com/user/willianjusten/1042x580',
    title: 'Title1',
    subtitle: 'Subtitle',
    imgLabel: 'Leia mais',
    imgLink: '/'
  },
  {
    img: 'https://source.unsplash.com/user/willianjusten/1042x582',
    title: 'Title2',
    subtitle: 'Subtitle',
    imgLabel: 'Leia mais',
    imgLink: '/'
  },
  {
    img: 'https://source.unsplash.com/user/willianjusten/1042x581',
    title: 'Title3',
    subtitle: 'Subtitle',
    imgLabel: 'Leia mais',
    imgLink: '/'
  },
  {
    img: 'https://source.unsplash.com/user/willianjusten/1042x580',
    title: 'Title4',
    subtitle: 'Subtitle',
    imgLabel: 'Leia mais',
    imgLink: '/'
  },
  {
    img: 'https://source.unsplash.com/user/willianjusten/1042x582',
    title: 'Title5',
    subtitle: 'Subtitle',
    imgLabel: 'Leia mais',
    imgLink: '/'
  },
  {
    img: 'https://source.unsplash.com/user/willianjusten/1042x581',
    title: 'Title6',
    subtitle: 'Subtitle',
    imgLabel: 'Leia mais',
    imgLink: '/'
  }
]

describe('<BannerGrid/>', () => {
  it('shold have render image one', () => {
    renderWithTheme(<BannerGrid items={items} />)

    const imgOne = screen.getByRole('img', { name: 'Title1' })

    expect(imgOne).toHaveStyle({
      'grid-area': 'one'
    })
  })

  it('shold have render image two', () => {
    renderWithTheme(<BannerGrid items={items} />)

    const imgTwo = screen.getByRole('img', { name: 'Title2' })

    expect(imgTwo).toHaveStyle({
      'grid-area': 'two'
    })
  })

  it('shold have render image tree', () => {
    renderWithTheme(<BannerGrid items={items} />)

    const imgTree = screen.getByRole('img', { name: 'Title3' })

    expect(imgTree).toHaveStyle({
      'grid-area': 'tree'
    })
  })

  it('shold have render image four', () => {
    renderWithTheme(<BannerGrid items={items} />)

    const imgFour = screen.getByRole('img', { name: 'Title4' })

    expect(imgFour).toHaveStyle({
      'grid-area': 'four'
    })
  })

  it('shold have render image five', () => {
    renderWithTheme(<BannerGrid items={items} />)

    const imgFive = screen.getByRole('img', { name: 'Title5' })

    expect(imgFive).toHaveStyle({
      'grid-area': 'five'
    })
  })

  it('shold have render image six', () => {
    renderWithTheme(<BannerGrid items={items} />)

    const imgSix = screen.getByRole('img', { name: 'Title6' })

    expect(imgSix).toHaveStyle({
      'grid-area': 'six'
    })
  })
})
