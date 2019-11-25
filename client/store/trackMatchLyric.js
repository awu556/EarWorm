import axios from 'axios'

// Action Type

const GET_TRACK_LYRICS = 'GET_TRACK_LYRICS'

// Action CReator

const gotAllTrackLyrics = trackLyrics => ({
  type: GET_TRACK_LYRICS,
  trackLyrics
})

// Thunk Middleware

export const getAllTrackLyrics = (trackName, trackArtist) => async dispatch => {
  try {
    const {data} = await axios.get(
      `/api/music/trackMatchLyrics?trackName=${trackName}&trackArtist=${trackArtist}`
    )
    dispatch(gotAllTrackLyrics(data))
  } catch (error) {
    console.error(error)
  }
}

// Reducer

export default function(state = {}, action) {
  switch (action.type) {
    case GET_TRACK_LYRICS:
      return action.trackLyrics
    default:
      return state
  }
}
