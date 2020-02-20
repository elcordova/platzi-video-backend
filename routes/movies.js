const express = require('express');
const { movieMocks } = require('../utils/mock/movies');

function moviesApi(app) {
    const router = express.Router();
    app.use('/api/movies', router);

    router.get('/', async function(req, res, next) {
        try {
            const movies = await Promise.resolve(movieMocks);
            res.status(200).json({
                data: movies,
                message: 'movies listened2'
            });
        } catch (err) {
            next(err);
        }
    })
}

module.exports = moviesApi;