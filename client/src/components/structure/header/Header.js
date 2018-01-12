import React from 'react'
import NavItem from './NavItem'

const style = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingTop: 15
  }
}

const Header = () => {
  return (
    <header>
      <nav style={style.container}>
        <NavItem to='/'>Home</NavItem>
        <NavItem to='/about'>About</NavItem>
        <NavItem to='/products'>Products</NavItem>
        <NavItem to='/add-products'>Add Products</NavItem>
      </nav>
    </header>
  )
}

export default Header
