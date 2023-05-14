const rootRouter = require('express').Router();
const userRouter = require('./user.router');
const path = require('path');

rootRouter.use('/users', userRouter);

// Handles any requests that don't match the ones above
rootRouter.get('*', (req, res) => {
    console.log(__dirname)
    res.status(200).json({ success: true, data: 'Welcome to the API' });
});

module.exports = rootRouter;