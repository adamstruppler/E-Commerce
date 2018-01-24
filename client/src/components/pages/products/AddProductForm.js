import React from 'react'
import TextField from 'material-ui/TextField'
import Typography from 'material-ui/Typography'
import Card from 'material-ui/Card'
import Button from 'material-ui/Button'
import PropTypes from 'prop-types'

const style = {
  formContainer: {
    padding: 20
  },
  container: {
    marginTop: 30
  }
}

const AddProductForm = ({onChangeHandler, name, price, img, category, onSubmit}) => {
  return (
    <div style={style.container}>
      <Card>
        <form style={style.formContainer}>
          <Typography type='display1' gutterBottom>Add Product</Typography>
          <div>
            <TextField label='Name' placeHolder='Name' onChange={onChangeHandler} id={'name'} />
          </div>
          <div>
            <TextField label='Price' placeHolder='Price' onChange={onChangeHandler} id={'price'} />
          </div>
          <div>
            <TextField label='Image' placeHolder='Image' onChange={onChangeHandler} id={'img'} />
          </div>
          <div>
            <TextField label='Category' placeHolder='Category' onChange={onChangeHandler} id={'category'} />
          </div>
          <div>
            <Button raised disabled={!name || !price || !img || !category} onClick={onSubmit}>SUBMIT</Button>
          </div>
        </form>
      </Card>
    </div>
  )
}

AddProductForm.propTypes = {
  onChangeHandler: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired
}

export default AddProductForm
