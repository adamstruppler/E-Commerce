import React, {Component} from 'react'
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
  },
  menu: {
    display: 'flex'
  }
}

class Header extends Component {
  state = {
    anchorE1: null
  }

  handleClick = event => {
    this.setState({anchorE1: event.currentTarget})
  }

  handleClose = () => {
    this.setState({anchorE1: null})
  }
  render () {
    const {anchorE1} = this.state
    return (
      <header>
        <nav style={style.container}>
          <NavItem to='/'>Home</NavItem>
          <NavItem to='/about'>About</NavItem>
          <NavItem to='/products'>Products</NavItem>
          <NavItem to='/add-products'>Add Products</NavItem>
          {
            this.props.domainData.loggedOut
              ? <NavItem to='/sign-up'>Register Account</NavItem>
              : null
          }
          {
            this.props.domainData.loggedOut
              ? <NavItem to='/login'>Login</NavItem>
              : null
          }
          <div style={style.menu}>
            <Button
              aria-owns={anchorE1 ? 'simple-menu' : null}
              aria-haspopup='true'
              onClick={this.handleClick}
            >
              {
                this.props.domainData.user
                  ? this.props.domainData.user.local.firstName + ' ' + this.props.domainData.user.local.lastName
                  : null
              }
            </Button>
            <Menu
              id='simple-menu'
              anchorE1={anchorE1}
              open={Boolean(anchorE1)}
              onClose={this.handleClose}
            >
              {
                this.props.domainData.loggedIn
                  ? <MenuItem onClick={this.handleClose}>
                    <HeaderLink onClick={this.props.domainData.logoutUser}>Logout</HeaderLink>
                  </MenuItem>
                  : null
              }
              {
                this.props.domainData.loggedIn
                  ? <MenuItem onClick={this.handleClose}>
                    <HeaderLink>{this.props.domainData.user.local.email}</HeaderLink>
                  </MenuItem>
                  : null
              }
              {
                this.props.domainData.loggedIn
                  ? <MenuItem onClick={this.handleClose}>
                    <NavItem to='/cart'><MenuItem>Cart</MenuItem></NavItem>
                  </MenuItem>
                  : null
              }
            </Menu>
          </div>
        </nav>
      </header>
    )
  }
}

export default Header

// {
//   domainData.loggedOut
//     ? <NavItem to='/sign-up'>Register Account</NavItem>
//     : null
// }
// {
//   domainData.loggedOut
//     ? <NavItem to='/login'>Login</NavItem>
//     : null
// }
// {
//   domainData.loggedIn
//     ? <HeaderLink onClick={domainData.logoutUser}><Button raised>Logout</Button></HeaderLink>
//     : null
// }
// {
//   domainData.loggedIn
//     ? <HeaderLink>{domainData.user.local.email}</HeaderLink>
//     : null
// }
// {
//   domainData.loggedIn
//     ? <NavItem to='/cart'>Cart</NavItem>
//     : null
// }
