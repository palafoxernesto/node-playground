const express = require('express')
const { moviesMock } = require('../utils/mocks/movies')

function moviesApi (app) {
  const router = express.Router()
  app.use('/api/movies', router)

  router.get('/', async function (req, res, next) {
    try {
      const movies = await Promise.resolve(moviesMock)
      res.status(200).json({
        data: movies,
        message: 'movies listed'
      })
    } catch (err) {
      next(err)
    }
  })
  router.get('/:movieId', async function (req, res, next) {
    try {
      const movie = await Promise.resolve(moviesMock[0])
      res.status(200).json({
        data: movie,
        message: 'movie retrived'
      })
    } catch (err) {
      next(err)
    }
  })

  router.post('/', async function (req, res, next) {
    try {
      const createdMovieId = await Promise.resolve(moviesMock[0].id)
      res.status(200).json({
        data: createdMovieId,
        message: 'movie created'
      })
    } catch (err) {
      next(err)
    }
  })

  router.put('/:movieId', async function (req, res, next) {
    try {
      const updatedMovie = await Promise.resolve(moviesMock[0].id)
      res.status(201).json({
        data: updatedMovie,
        message: 'movie updated'
      })
    } catch (err) {
      next(err)
    }
  })

  router.delete('/:movieId', async function (req, res, next) {
    try {
      const deletedMovie = await Promise.resolve(moviesMock[0].id)
      res.status(200).json({
        data: deletedMovie,
        message: 'movie deleted'
      })
    } catch (err) {
      next(err)
    }
  })
}

module.exports = {
  moviesApi
}
