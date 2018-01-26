import React from 'react'
import PropTypes from 'prop-types'
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography/Typography'
import Card, {CardActions, CardContent, CardMedia} from 'material-ui/Card'

const style = {
  container: {
    flexWrap: 'wrap',
    marginBottom: '15px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '200px'
  },
  image: {

  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    border: '1px solid black'
  },
  button: {
    display: 'flex',
    width: '70%',
    marginTop: '20px'
  }
}

const CartCard = ({product, removeItemFromCart}) => {
  return (
    <div style={style.container}>
      <Card>
        <CardContent style={style.cardContent}>
          
          {product.name}
          {product.price}
          <Button raised color='primary' type='button' onClick={() => removeItemFromCart(product._id)}>Remove</Button>
        </CardContent>
      </Card>
    </div>
  )
}

CartCard.propTypes = {
  product: PropTypes.string.isRequired,
  removeItemFromCart: PropTypes.func.isRequired
}

export default CartCard
