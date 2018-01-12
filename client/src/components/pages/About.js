import React from 'react'
import Typography from 'material-ui/Typography'
import Card from 'material-ui/Card'

const style = {
  container: {
    display: 'flex',
    backgroudColor: '#ECECEC',
    padding: 50
  },
  typo: {
    padding: 20,
    letterSpacing: 3,
    fontFamily: 'Roboto'
  },
  about: {
    border: '2px solid black',
    borderRadius: 2,
    boxShadow: '5px 5px'
  }
}

const About = () => {
  return (
    <div style={style.container}>
      <Card>
        <div style={style.about}>
          <Typography style={style.typo} type='display1' gutterBottom >
            Hello from about
          </Typography>
        </div>
      </Card>
    </div>
  )
}

export default About
