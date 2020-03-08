const router = require('express').Router()
const apikey = process.env.MUSIXMATCH_API_KEY
const music = require('musicmatch')({
  apikey
})
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const {lyrics, page, page_size} = req.query
    const data = await music.trackSearch({
      q_lyrics: lyrics,
      s_track_rating: 'desc',
      f_has_lyrics: 1,
      page: page || 1,
      page_size: page_size || 10
    })
    res.json(data)
  } catch (err) {
    next(err)
  }
})

router.get('/trackMatchLyrics', async (req, res, next) => {
  try {
    const {trackName, trackArtist} = req.query
    const data = await music.matcherLyrics({
      q_track: trackName,
      q_artist: trackArtist
    })
    res.json(data)
  } catch (error) {
    next(error)
  }
})
