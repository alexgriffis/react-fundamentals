import React from 'react'
import Results from '../components/Results'
import githubHelpers from '../utils/githubHelpers'
const ResultsContainer = React.createClass({
  getInitialState: function () {
    return {
      isLoading: true,
      scores: []
    }
  },
  componentDidMount: function () {
    githubHelpers.battle(this.props.location.state.playersInfo)
      .then((scores) => {
        this.setState({
          scores: scores,
          isLoading: false
        })
      })
  },
  render: function () {
    return (
      <Results isLoading={this.state.isLoading} scores={this.state.scores} playersInfo={this.props.location.state.playersInfo} />
    )
  }
})

export default ResultsContainer
