import React, { PropTypes } from 'react'
import styles from '../styles'

const Loading = React.createClass({
  propTypes: {
    text: PropTypes.string,
    speed: PropTypes.number
  },
  getDefaultProps: function () {
    return {
      text: 'Loading',
      speed: 300
    }
  },
  getInitialState: function () {
    this.originalText = this.props.text
    return {
      text: this.originalText
    }
  },
  componentDidMount: function () {
    let stopper = this.originalText + '...'
    this.interval = setInterval(() => {
      if (this.state.text === stopper) {
        this.setState({
          text: this.originalText
        })
      } else {
        this.setState({
          text: this.state.text + '.'
        })
      }
    }, this.props.speed)
  },
  componentWillUnmount: function () {
    clearInterval(this.interval)
  },
  render: function () {
    return (
      <div style={styles.container}>
        <p style={styles.content}>
          {this.state.text}
        </p>
      </div>
    )
  }
})

export default Loading
