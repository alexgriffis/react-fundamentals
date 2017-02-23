import React from 'react'

// Standard Form:
// var Main = React.createClass({
//   render: function () {
//     return (
//       <div className='main-container'>
//         {this.props.children}
//       </div>
//     )
//   }
// })

// Shorthand named function
// function Main (props) {
//   return (
//     <div className='main-container'>
//       {props.children}
//     </div>
//   )
// }

// Arrow assignment
const Main = (props) => (
  <div className='main-container'>
    {props.children}
  </div>
)

export default Main