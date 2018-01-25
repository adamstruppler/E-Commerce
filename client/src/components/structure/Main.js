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
import CartContainer from '../pages/products/CartContainer'

const style = {
  container: {
    textAlign: 'center',
    padding: 20
  }
}

const Main = ({domainData}) => {
  return (
    <main style={style.container}>
      <Route exact path='/' component={Home} />
      <Route path='/about' component={About} />
      <Route path='/products' render={() => <ProductsContainer domainData={domainData} />} />
      <Route path='/add-products' render={() => <AddProductContainer domainData={domainData} />} />
      <Route path='/product/:_id' component={ProductPage} />
      <Route path='/sign-up' render={() => <SignUpContainer domainData={domainData} />} />
      <Route path='/login' render={() => <LoginContainer domainData={domainData} />} />
      <Route path='/cart' render={() => <CartContainer domainData={domainData} />} />
    </main>
  )
}

Main.propTypes = {
  domainData: PropTypes.func.isRequired
}

export default Main
