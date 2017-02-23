import React from 'react'
import ConfirmBattle from '../components/ConfirmBattle'

const ConfirmBattleContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function () {
    return {
      isLoading: true,
      playersInfo: []
    }
  },
  componentDidMount: function () {
    const query = this.props.locations.query
    // TODO: Fetch info from github and update state
  },
  render: function () {
    return (
      <ConfirmBattle
        isLoading={this.state.isLoading}
        playersInfo={this.state.playersInfo} />
    )
  }
})

export default ConfirmBattleContainer
