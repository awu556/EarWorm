import axios from 'axios'

// Action Types
const GET_ALL_SONG_MATCHES = 'GET_ALL_SONG_MATCHES'

// Action Creators
const gotAllSongs = songs => ({
  type: GET_ALL_SONG_MATCHES,
  songs
})

// Thunk Middleware

export const getAllSongs = lyrics => async dispatch => {
  try {
    const {data} = await axios.get(`/api/music?lyrics=${lyrics}`)
    dispatch(gotAllSongs(data))
  } catch (error) {
    console.error(error)
  }
}

// Reducer

export default function(state = {}, action) {
  switch (action.type) {
    case GET_ALL_SONG_MATCHES:
      return action.songs
    default:
      return state
  }
}
