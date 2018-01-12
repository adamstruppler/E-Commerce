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

const AddProductForm = ({onChangeHandler, name, price, img, category, submitProductToServer}) => {
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
            <Button raised disabled={!name || !price || !img || !category} onClick={submitProductToServer}>SUBMIT</Button>
          </div>
        </form>
      </Card>
    </div>
  )
}

AddProductForm.propTypes = {
  onChangeHandler: PropTypes.func.isRequired,
  submitProductToServer: PropTypes.func.isRequired
}

export default AddProductForm
