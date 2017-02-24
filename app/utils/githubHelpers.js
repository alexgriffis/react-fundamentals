import axios from 'axios'

// Add github api key
// const id = 'YOUR_CLIENT_ID'
// const sec = 'YOUR_SECRET_ID'
// const param = `?client_id=${id}&client_secret=${sec}`

function getUserInfo (username) {
  return axios.get(`https://api.github.com/users/${username}`)
}

function getRepos (username) {
  return axios.get(`https://api.github.com/users/${username}/repos?per_page=100`)
}

function getTotalStars (repos) {
  return repos.data.reduce((prev, curr) => (prev + curr.stargazers_count), 0)
}

function getPlayerData (player) {
  return getRepos(player.login)
    .then(getTotalStars)
    .then((totalStars) => ({
      followers: player.followers,
      totalStars: totalStars
    }))
}

function calculateScores (players) {
  return [
    players[0].followers * 3 + players[0].totalStars,
    players[1].followers * 3 + players[1].totalStars
  ]
}
let helpers = {
  getPlayersInfo: function (players) {
    return axios
      .all(players.map((username) => getUserInfo(username)))
      .then((info) => info.map((user) => user.data))
      .catch((err) => console.warn(`Error in getPlayersInfo: ${err}`))
  },
  battle: function (players) {
    let playerOneData = getPlayerData(players[0])
    let playerTwoData = getPlayerData(players[1])

    return axios.all([playerOneData, playerTwoData])
      .then(calculateScores)
      .catch((err) => console.warn(`Error in getPlayersInfo: ${err}`))
  }
}

export default helpers
