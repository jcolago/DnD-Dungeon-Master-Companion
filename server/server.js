const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

const sessionMiddleware = require('./modules/session-middleware');
const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');
const playersRouter = require('./routes/players.router');
const monstersRouter = require('./routes/monsters.router');
const conditionsRouter = require('./routes/conditions.router');
const inventoryRouter = require('./routes/inventory.router');
const gamesRouter = require('./routes/games.router');

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
//Routes imported for use in project
app.use('/api/user', userRouter);
app.use('/api/players', playersRouter);
app.use('/api/monsters', monstersRouter);
app.use('/api/conditions', conditionsRouter);
app.use('/api/inventory', inventoryRouter);
app.use('/api/games', gamesRouter)

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});

module.exports = app;
