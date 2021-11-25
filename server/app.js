//dependencies
const express = require('express');
require('dotenv').config();
const cookieParser = require('cookie-parser');
const cors = require('cors');
const { notFoundHandler, defaultErrorHandler } = require('./middlewares/errorHandlers');

//initialse express app
const app = express();

//initialise middlwares
app.use(cors({ origin: true, credentials: true }));
app.use(cookieParser());

//request parser
app.use(express.json());

//root route of the app
app.get('/', (req, res, next) => {
   res.status(200).json({ status: 'success', message: 'This is the root of shoppingify backend' });
});

//routers
//app.use('/api/user/', userRouter); //TODO: need create routers and then enable this router
//app.use('/api/category/', categoryRouter); //TODO: need create routers and then enable this router
//app.use('/api/item/', itemRouter); //TODO: need create routers and then enable this router

//Error handlers
app.all('*', notFoundHandler);

//default error handler
app.use(defaultErrorHandler);

module.exports = app;
