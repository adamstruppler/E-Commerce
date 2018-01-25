import React from 'react'
import ProductCard from './ProductCard'
import PropTypes from 'prop-types'

const ProductList = ({products, deleteProduct, addItemToCart}) => {
  return (
    <div>
      {
        products.map(product => {
          return <ProductCard
            {...product}
            deleteProduct={deleteProduct}
            addItemToCart={addItemToCart}
          />
        })
      }
    </div>
  )
}

ProductList.propTypes = {
  products: PropTypes.object.isRequired,
  deleteProduct: PropTypes.func.isRequired,
  addItemToCart: PropTypes.func.isRequired
}

export default ProductList
