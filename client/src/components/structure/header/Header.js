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
    backgroundColor: '#37474F'
  },
  menu: {
    display: 'flex',
    color: 'green'
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
              ? <NavItem to='/sign-up'>Sign Up</NavItem>
              : null
          }
          {
            this.props.domainData.loggedOut
              ? <NavItem to='/login'>Login</NavItem>
              : null
          }
          <div>
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
            <div style={style.menu}>
              <Menu
                id='simple-menu'
                anchorE1={anchorE1}
                open={Boolean(anchorE1)}
                onClose={this.handleClose}
              >
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
                {
                  this.props.domainData.loggedIn
                    ? <MenuItem onClick={this.handleClose}>
                      <HeaderLink onClick={this.props.domainData.logoutUser}>Logout</HeaderLink>
                    </MenuItem>
                    : null
                }
              </Menu>
            </div>
          </div>
        </nav>
      </header>
    )
  }
}

export default Header
