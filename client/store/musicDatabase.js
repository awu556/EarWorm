import axios from 'axios'

// ACTION TYPES
const GET_SONGS = 'GET_SONGS'

// ACTION CREATORS
const gotSongs = songs => ({type: GET_SONGS, songs})

// THUNK CREATORS

export const recieveSongs = lyrics => async dispatch => {
  try {
    const res = await axios.get(
      `https://api.musixmatch.com/ws/1.1/track.search?format=json&q_lyrics=${lyrics}&quorum_factor=1&page_size=100&apikey=19c8312e5f65e34e70e7361977223254`
    )
    dispatch(gotSongs(res.data))
  } catch (err) {
    console.error(err)
  }
}
