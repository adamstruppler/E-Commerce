import React from 'react'
import ProductCard from './ProductCard'
import PropTypes from 'prop-types'

const ProductList = ({products, deleteProduct}) => {
  return (
    <div>
      {
        products.map(product => {
          return <ProductCard
            {...product}
            deleteProduct={deleteProduct}
          />
        })
      }
    </div>
  )
}

ProductList.propTypes = {
  products: PropTypes.object.isRequired,
  deleteProduct: PropTypes.func.isRequired
}

export default ProductList
