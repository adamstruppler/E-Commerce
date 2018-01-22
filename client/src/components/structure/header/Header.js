import React from 'react'
import NavItem from './NavItem'
import HeaderLink from './HeaderLink'
import Button from 'material-ui/Button'
import Menu, {MenuItem} from 'material-ui/Menu'

const style = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingTop: 15,
    backgroundColor: '#004410'
  }
}

const Header = ({domainData}) => {
  return (
    <header>
      <nav style={style.container}>
        <NavItem to='/'>Home</NavItem>
        <NavItem to='/about'>About</NavItem>
        <NavItem to='/products'>Products</NavItem>
        <NavItem to='/add-products'>Add Products</NavItem>
        {
          domainData.loggedOut
            ? <NavItem to='/sign-up'>Register Account</NavItem>
            : null
        }
        {
          domainData.loggedOut
            ? <NavItem to='/login'>Login</NavItem>
            : null
        }
        {
          domainData.loggedIn
            ? <HeaderLink onClick={domainData.logoutUser}><Button raised>Logout</Button></HeaderLink>
            : null
        }
        {
          domainData.loggedIn
            ? <HeaderLink>{domainData.user.local.email}</HeaderLink>
            : null
        }
      </nav>
    </header>
  )
}

export default Header
