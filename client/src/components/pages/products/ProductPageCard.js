import React from 'react'
import PropTypes from 'prop-types'

const ProductPageCard = ({product}) => {
  return (
    <div>
      <img img={product.img} />
      <h1>{product.name}</h1>
      <h2>{product.price}</h2>
      <h2>{product.category}</h2>
    </div>
  )
}

ProductPageCard.propTypes = {
  product: PropTypes.string.isRequired
}

export default ProductPageCard
