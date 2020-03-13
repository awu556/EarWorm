const router = require('express').Router()
const {Song} = require('../db/models')

router.get('/', async (req, res, next) => {
  try {
    const searchHistory = await Song.findAll({
      attributes: ['searchHistory']
    })
    res.send(searchHistory)
  } catch (error) {
    next(error)
  }
})
