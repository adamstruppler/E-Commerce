import React from 'react'
import NavItem from './NavItem'

const Header = () => {
  return (
    <div>
      <NavItem to='/'>Home</NavItem>
      <NavItem to='/about'>About</NavItem>
      <NavItem to='/products'>Products</NavItem>
    </div>
  )
}

export default Header
