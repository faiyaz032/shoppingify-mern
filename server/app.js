//dependencies
const express = require('express');
require('dotenv').config();
const cookieParser = require('cookie-parser');
const cors = require('cors');

//internal imports
const { notFoundHandler, defaultErrorHandler } = require('./middlewares/errorHandlers');
const userRouter = require('./routers/userRouter');
const categoryRouter = require('./routers/categoryRouter');
const itemRouter = require('./routers/itemRouter');

//initialse express app
const app = express();

//initialise middlwares
app.use(cors({ origin: true, credentials: true }));
app.use(cookieParser());

//request parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(`${__dirname}/public/`)); //TODO: Need to remove the upload folder from gitignore before deploying

//root route of the app
app.get('/', (req, res, next) => {
   res.status(200).json({ status: 'success', message: 'This is the root of shoppingify backend' });
});

//routers
app.use('/api/user/', userRouter);
app.use('/api/category/', categoryRouter);
app.use('/api/item/', itemRouter);

//Error handlers
app.all('*', notFoundHandler);

//default error handler
app.use(defaultErrorHandler);

module.exports = app;
