import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import $ from 'jquery'
import ProductPageCard from './ProductPageCard'

class ProductPage extends Component {
  state = {
    product: undefined
  }

  componentDidMount () {
    this.viewProduct(this.props.match.params._id)
  }

  viewProduct = (id) => {
    $.ajax({
      url: `/api/products/${id}`,
      method: 'GET'
    }).done((response) => {
      console.log(response, 'View Product')
      this.setState({product: response.data})
    })
  }

  render () {
    return (
      <div>
        {
          this.state.product
            ? <ProductPageCard product={this.state.product} />
            : 'No Product'
        }
      </div>
    )
  }
}

export default withRouter(ProductPage)
