require('dotenv').config();
const express = require('express')
const logger = require('morgan')

const { authRouter } = require('./routers/authRouter');
const { calendarRouter } = require('./routers/calendarRouter');

const app = express();
const port = process.env.PORT || 3000;

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.set('Content-Type', 'application/json');
    next();
});

app.use('/api/auth', authRouter);
app.use('/api/calendar', calendarRouter);

app.use('*', (req, res) => {
    res.status(404).send('Page not found!');
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});