import React, {Component} from 'react'
import Layout from './components/structure/Layout'
import * as UserApi from './lib/userApi'
import $ from 'jquery'

class DataProvider extends Component {
  state = {
    isLoaded: false,
    products: [],
    user: null
  }

  methods = {
    getAllProducts: () => {
      $.ajax({
        url: '/api/products',
        method: 'GET'
      }).done((response) => {
        console.log(response, 'Data Provider')
        this.setState({isLoaded: true, products: response.data})
      })
    },
    deleteProduct: (id) => {
      $.ajax({
        url: `/api/products/${id}`,
        method: 'DELETE'
      }).done((response) => {
        console.log('Delete Data Provider', response)
        this.methods.getAllProducts()
      })
    },
    newUser: (user) => {
      UserApi.signupUser(user)
        .then(user => {
          this.setState({user})
          return user
        })
    }
    // viewProduct: (id) => {
    //   $.ajax({
    //     url: `/api/products/${id}`,
    //     method: 'GET'
    //   }).done((response) => {
    //     console.log(response, 'View Product')
    //   })
    // }
  }

  componentDidMount () {
    this.methods.getAllProducts()
  }

  render () {
    const domainData = {
      ...this.state,
      ...this.methods
    }
    return (
      this.state.isLoaded
        ? <Layout
          domainData={domainData}
        />
        : <div> '....Loading' </div>
    )
  }
}

export default DataProvider
