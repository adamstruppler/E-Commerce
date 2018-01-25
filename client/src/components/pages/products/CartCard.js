import React from 'react'
import PropTypes from 'prop-types'

const CartCard = ({product}) => {
  return (
    <div>
      {product.img}
      {product.name}
      {product.price}
    </div>
  )
}

CartCard.propTypes = {
  product: PropTypes.string.isRequired
}

export default CartCard
