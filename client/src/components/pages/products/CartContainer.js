import React from 'react'
import CartList from './CartList'
import PropTypes from 'prop-types'

const CartContainer = ({domainData}) => {
  return (
    <div>
      {
        domainData.user != null
          ? <CartList
            cartProducts={domainData.user.cart}
            cartReady={domainData.cartReady}
            removeItemFromCart={domainData.removeItemFromCart}
          />
          : 'No user logged in'
      }
    </div>
  )
}

CartContainer.propTypes = {
  domainData: PropTypes.func.isRequired
}

export default CartContainer
