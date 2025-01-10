import React from 'react'
import Header from './NavbarHeader/Header'
import HeaderBottom from './NavbarHeader/HeaderBottom'

function Header_page() {
  return (
    <div className="fixed top-0 w-full z-50">
      <Header/>
      <HeaderBottom/>
    </div>
  )
}

export default Header_page
