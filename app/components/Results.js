import React, { PropTypes } from 'react'
import styles from '../styles'
import UserDetails from './UserDetails'
import UserDetailsWrapper from './UserDetailsWrapper'
import { Link } from 'react-router'
import MainContainer from './MainContainer'
import Loading from './Loading'

function StartOver () {
  return (
    <div className='col-sm-12' style={styles.space}>
      <Link to='/playerOne'>
        <button type='button' className='btn btn-lg btn-danger'>Start Over</button>
      </Link>
    </div>
  )
}

function Results (props) {
  if (props.isLoading === true) {
    return (
      <Loading text='One Moment Please' />
    )
  }
  if (props.scores[0] === props.scores[1]) {
    return (
      <MainContainer>
        <h1> It's A Tie! </h1>
        <StartOver />
      </MainContainer>
    )
  }
  const winDex = props.scores[0] > props.scores[1] ? 0 : 1
  const loseDex = winDex === 0 ? 1 : 0
  return (
    <MainContainer>
      <h1>Results</h1>
      <div className='col-sm-8 col-sm-offset-2'>
        <UserDetailsWrapper header='Winner'>
          <UserDetails score={props.scores[winDex]} info={props.playersInfo[winDex]} />
        </UserDetailsWrapper>
        <UserDetailsWrapper header='Loser'>
          <UserDetails score={props.scores[loseDex]} info={props.playersInfo[loseDex]} />
        </UserDetailsWrapper>
      </div>
      <StartOver />
    </MainContainer>
  )
}

Results.propTyeps = {
  isLoading: PropTypes.bool.isRequired,
  playersInfo: PropTypes.array.isRequired,
  scores: PropTypes.array.isRequired
}

export default Results
