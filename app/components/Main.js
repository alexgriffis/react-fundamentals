import React from 'react'
import ReactCSSTransistionGroup from 'react-addons-css-transition-group'
import '../main.css'

// Arrow assignment
const Main = (props) => (
  <div className='main-container'>
    <ReactCSSTransistionGroup
      transitionName="appear"
      transitionEnterTimeout={500}
      transitionLeaveTimeout={500}>
      {React.cloneElement(props.children, {key: props.location.pathname})}
    </ReactCSSTransistionGroup>
  </div>
)

export default Main