import React from 'react'
import {NavLink} from 'react-router-dom'
import PropTypes from 'prop-types'

const style = {
  container: {
  },
  nav: {
    textDecoration: 'none',
    color: 'black'
  },
  active: {
    color: 'red'
  }
}

const NavItem = ({to, children, exact}) => {
  return (
    <div style={style.container}>
      <NavLink style={style.nav} activeStyle={style.active} exact to={to}>
        {children}
      </NavLink>
    </div>
  )
}

NavItem.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  exact: PropTypes.bool.isRequired
}

NavItem.defaultProps = {
  exact: false
}

export default NavItem
