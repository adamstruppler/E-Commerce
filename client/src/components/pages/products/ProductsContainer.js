import React from 'react'
import ProductList from './ProductList'
import PropTypes from 'prop-types'

const ProductsContainer = ({domainData}) =>
  <ProductList
    products={domainData.products}
    deleteProduct={domainData.deleteProduct}
    addItemToCart={domainData.addItemToCart}
  />

ProductsContainer.propTypes = {
  domainData: PropTypes.object.isRequired
}

export default ProductsContainer
