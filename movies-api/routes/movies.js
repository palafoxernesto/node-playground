const express = require('express')
const MovieService = require('../services/movies')

function moviesApi (app) {
  const router = express.Router()
  app.use('/api/movies', router)

  const moviesService = new MovieService()
  router.get('/', async function (req, res, next) {
    const { tags } = req.query
    try {
      const movies = await moviesService.getMovie({ tags })
      res.status(200).json({
        data: movies,
        message: 'movies listed'
      })
    } catch (err) {
      next(err)
    }
  })
  router.get('/:movieId', async function (req, res, next) {
    const { movieId } = req.params
    try {
      const movie = await moviesService.getMovie({ movieId })
      res.status(200).json({
        data: movie,
        message: 'movie retrived'
      })
    } catch (err) {
      next(err)
    }
  })

  router.post('/', async function (req, res, next) {
    const { body: movie } = req
    try {
      const createdMovieId = await moviesService.createMovie({ movie })
      res.status(200).json({
        data: createdMovieId,
        message: 'movie created'
      })
    } catch (err) {
      next(err)
    }
  })

  router.put('/:movieId', async function (req, res, next) {
    const { movieId } = req.params
    const { body: movie } = req
    try {
      const updatedMovie = await moviesService.updateMovie({
        movieId,
        movie
      })
      res.status(201).json({
        data: updatedMovie,
        message: 'movie updated'
      })
    } catch (err) {
      next(err)
    }
  })

  router.delete('/:movieId', async function (req, res, next) {
    const { movieId } = req.params
    try {
      const deletedMovie = await moviesService.updateMovie({ movieId })
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
