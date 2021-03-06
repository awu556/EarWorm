import axios from 'axios'

// Action Types
const GET_ALL_SONG_MATCHES = 'GET_ALL_SONG_MATCHES'

// Action Creators
const gotAllSongs = songs => ({
  type: GET_ALL_SONG_MATCHES,
  songs
})

// Thunk Middleware

export const getAllSongs = (lyrics, rows, page) => async dispatch => {
  try {
    if (!rows) {
      const {data} = await axios.get(`/api/music?lyrics=${lyrics}`)
      dispatch(gotAllSongs(data))
    } else {
      const {data} = await axios.get(
        `/api/music?lyrics=${lyrics}&page_size=${rows}&page=${page + 1}`
      )
      dispatch(gotAllSongs(data))
    }
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
