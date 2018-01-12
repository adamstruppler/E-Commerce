import React from 'react'
import About from '../pages/About'
import Home from '../pages/Home'
import {Route} from 'react-router-dom'
import AddProductContainer from '../pages/products/AddProductContainer'

const style = {
  container: {
    textAlign: 'center',
    padding: 20,
    backgroundColor: '#0f8c3b'
  }
}

const Main = () => {
  return (
    <main style={style.container}>
      <Route exact path='/' component={Home} />
      <Route path='/about' component={About} />
      <Route path='/add-products' component={AddProductContainer} />
    </main>
  )
}

export default Main
