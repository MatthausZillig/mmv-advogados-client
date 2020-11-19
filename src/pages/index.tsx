import { useState } from 'react'
import Menu from 'components/Menu'

export default function Home() {
  const [navbar, setNavbar] = useState(false)
  if (typeof window !== 'undefined') {
    const changeBackground = () => {
      console.log(scrollY)
      if (window.scrollY >= 20) {
        setNavbar(true)
      } else {
        setNavbar(false)
      }
    }
    window.addEventListener('scroll', changeBackground)
  }

  return (
    <>
      <Menu inScroll={navbar} />
      <div style={{ height: '2000px', background: '#red' }}></div>
    </>
  )
}
