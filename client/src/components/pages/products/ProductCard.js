import React from 'react'
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card'
import Typography from 'material-ui/Typography/Typography'
import Button from 'material-ui/Button'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'

const styles = {
  media: {
    height: '200',
    width: '100%',
    display: 'flex',
    border: '2px red'
  }
}

const ProductCard = ({name, price, img, category, _id, deleteProduct, addItemToCart}) => {
  return (
    <div>
      <Card>
        <CardMedia
          styles={styles.media}
          image={img}
        />
        <CardContent>
          <Typography type='headline' component='h2'>
            {name}
            {price}
          </Typography>
        </CardContent>
        <CardActions>
          <Button raised color='primary'><Link to={`/product/${_id}`}>View</Link></Button>
          <Button raised color='primary' onClick={() => deleteProduct(_id)}>Delete</Button>
          <Button raised color='primary' onClick={() => addItemToCart(_id)}>Add Item to Cart</Button>
        </CardActions>
      </Card>
    </div>
  )
}

ProductCard.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  _id: PropTypes.string.isRequired,
  deleteProduct: PropTypes.func.isRequired,
  addItemToCart: PropTypes.func.isRequired
}

export default ProductCard
