import React from 'react'
import styles from '../styles'
import { Link } from 'react-router'

var Home = React.createClass({
  render: function () {
    return (
      <div className='jumbotron col-sm-12 text-center' style={styles.transparentBg}>
        <h1> Github Battle </h1>
        <p className='lead'>Some Fancy Motto</p>
        <Link to='/playerOne'>
          <button type='button' className='btn btn-lg btn-success'>~Get Started~</button>
        </Link>
      </div>
    )
  }
})

module.exports = Home
