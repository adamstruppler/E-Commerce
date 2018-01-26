import React, {Component} from 'react'
import AddProductForm from './AddProductForm'
import {withRouter} from 'react-router-dom'

class AddProductContainer extends Component {
 state = {
   name: undefined,
   price: undefined,
   img: undefined,
   category: undefined
 }

 onChangeHandler = (e) => this.setState({[e.target.id]: e.target.value})

 onSubmit = (event) => {
   event.preventDefault()
   const product = {name: this.state.name, category: this.state.category, price: Number(this.state.price), img: this.state.img}
   this.props.domainData.addProduct(product)
   this.props.history.push('/products')
 }

 render () {
   return (
     <AddProductForm
       {...this.state}
       onChangeHandler={this.onChangeHandler}
       onSubmit={this.onSubmit}
     />
   )
 }
}

export default withRouter(AddProductContainer)
