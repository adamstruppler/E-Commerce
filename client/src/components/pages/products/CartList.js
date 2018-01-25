import React from 'react'
import CartCard from './CartCard'
import PropTypes from 'prop-types'

const CartList = ({cartProducts, cartReady}) => {
  return (
    <div>
      {
        cartReady
          ? cartProducts.map(product => {
            return <CartCard
              product={product}
            />
          })
          : 'Cart is Empty'
      }
    </div>
  )
}

CartList.propTypes = {
  cartProducts: PropTypes.func.isRequired,
  cartReady: PropTypes.bool.isRequired
}

export default CartList
