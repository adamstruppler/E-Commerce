import React from 'react'
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card'
import Typography from 'material-ui/Typography/Typography'
import Button from 'material-ui/Button'
import PropTypes from 'prop-types'

const styles = {
  media: {
    height: 200
  }
}

const ProductCard = ({name, price, img, category, _id, deleteProduct}) => {
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
          </Typography>
        </CardContent>
        <CardActions>
          <Button raised color='primary'>
            View
          </Button>
          <Button raised color='primary' onClick={() => deleteProduct(_id)}>
            Delete
          </Button>
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
  deleteProduct: PropTypes.func.isRequired
}

export default ProductCard
