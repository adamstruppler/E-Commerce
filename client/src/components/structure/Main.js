import React from 'react'
import About from '../pages/About'
import Home from '../pages/Home'
import {Route} from 'react-router-dom'
import AddProductContainer from '../pages/products/AddProductContainer'
import ProductsContainer from '../pages/products/ProductsContainer'
import ProductPage from '../pages/products/ProductPage'
import SignUpContainer from '../pages/authentication/SignUpContainer'
import LoginContainer from '../pages/authentication/LoginContainer'
import PropTypes from 'prop-types'

const style = {
  container: {
    textAlign: 'center',
    padding: 20,
    backgroundColor: '#0f8c3b'
  }
}

const Main = ({domainData}) => {
  return (
    <main style={style.container}>
      <Route exact path='/' component={Home} />
      <Route path='/about' component={About} />
      <Route path='/products' render={() => <ProductsContainer domainData={domainData} />} />
      <Route path='/add-products' component={AddProductContainer} />
      <Route path='/product/:_id' component={ProductPage} />
      <Route path='/sign-up' render={() => <SignUpContainer domainData={domainData} />} />
      <Route path='/login' render={() => <LoginContainer domainData={domainData} />} />
    </main>
  )
}

Main.propTypes = {
  domainData: PropTypes.func.isRequired
}

export default Main
