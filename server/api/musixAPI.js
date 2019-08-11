const router = require('express').Router()
const music = require('musicmatch')({
  apikey: '19c8312e5f65e34e70e7361977223254'
})
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const {lyrics, page, pagesize} = req.query
    const data = await music.trackSearch({
      q: lyrics,
      s_track_rating: 'desc',
      f_has_lyrics: 1,
      page: page,
      page_size: 30
    })
    res.json(data)
  } catch (err) {
    next(err)
  }
})
