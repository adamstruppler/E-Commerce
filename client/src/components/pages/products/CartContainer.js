import React from 'react'
import CartList from './CartList'
import PropTypes from 'prop-types'

const CartContainer = ({domainData}) => {
  console.log(domainData.user.cart)
  return (
    <div>
      {
        domainData.user != null
          ? <CartList cartProducts={domainData.user.cart} cartReady={domainData.cartReady} />
          : 'No user logged in'
      }
    </div>
  )
}

CartContainer.propTypes = {
  domainData: PropTypes.func.isRequired
}

export default CartContainer
