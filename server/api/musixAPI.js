const router = require('express').Router()
const apikey = process.env.MUSIXMATCH_API_KEY
const music = require('musicmatch')({
  apikey
})
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const {lyrics, page} = req.query
    const data = await music.trackSearch({
      q_lyrics: lyrics,
      s_track_rating: 'desc',
      f_has_lyrics: 1,
      page: page,
      page_size: 30
    })
    // console.log(data)
    res.json(data)
  } catch (err) {
    next(err)
  }
})
