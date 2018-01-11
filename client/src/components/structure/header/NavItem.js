import React from 'react'
import {NavLink} from 'react-router-dom'
import PropTypes from 'prop-types'

const NavItem = ({to, children}) => {
  return (
    <NavLink to={to}>
      {children}
    </NavLink>
  )
}

NavItem.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired
}

NavItem.defaultProps = {
  exact: false
}

export default NavItem
