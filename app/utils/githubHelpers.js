import axios from 'axios'

const id = 'YOUR_CLIENT_ID'
const sec = 'YOUR_SECRET_ID'
const param = `?client_id=${id}&client_secret=${sec}`

function getUserInfo (username) {
  return axios.get(`https://api.github.com/users/${username}`)
}

let helpers = {
  getPlayersInfo: function (players) {
    return axios
      .all(players.map((username) => getUserInfo(username)))
      .then((info) => info.map((user) => user.data))
      .catch((err) => console.warn(`Error in getPlayersInfo: ${err}`))
  }
}

export default helpers
