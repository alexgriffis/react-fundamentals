import React from 'react'
import { render } from 'react-dom'
import routes from './config/routes'

/*
const meData = {
  name: 'Alex Griffis',
  username: 'alexgriffis',
  image: 'https://avatars3.githubusercontent.com/u/5752990?v=3&s=460'
}

var ProfilePic = React.createClass({
  render: function () {
    return <img src={this.props.imageUrl} style={{height: 100, withd: 100}} />
  }
})

var Link = React.createClass({
  changeURL: function () {
    window.location.replace(this.props.href)
  },
  render: function () {
    return (
      <span style={{color: 'blue', cursor: 'pointer'}} onClick={this.changeURL}>
        {this.props.children}
      </span>
    )
  }
})
var ProfileLink = React.createClass({
  render: function () {
    return (
      <div>
        <Link href={'https://www.github.com/' + this.props.username}>
          {this.props.username}
        </Link>
      </div>
    )
  }
})

var ProfileName = React.createClass({
  render: function () {
    return (
      <div>{this.props.name}</div>
    )
  }
})

var Avatar = React.createClass({
  render: function () {
    return (
      <div>
        <ProfilePic imageUrl={this.props.user.image} />
        <ProfileName name={this.props.user.name} />
        <ProfileLink username={this.props.user.username} />
      </div>
    )
  }
})
*/

render(
  routes,
  document.getElementById('app')
)

/*
  Focused
  Independent
  Reusable
  Small
  Testable
*/
