const router = require('express').Router()
const music = require('musicmatch')({
  apikey: '19c8312e5f65e34e70e7361977223254'
})
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const data = await music.trackSearch({
      q_lyrics: req.query,
      s_artist_rating: 'desc',
      s_track_rating: 'desc',
      page_size: 100
    })
    res.json(data)
  } catch (err) {
    next(err)
  }
})
