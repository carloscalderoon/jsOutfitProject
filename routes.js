const express = require('express');
const app = express();

// Import our  Routes
const outfitsRoutes = require('./routes/outfits');
const usersRoutes = require('./routes/users')
const sessionsRoutes = require('./routes/sessions');


// Register our routes
app.get('/', (req, res) => {
    res.render('pages/home');
  });
app.use('/outfits', outfitsRoutes);
app.use('/users', usersRoutes)
app.use('/', sessionsRoutes);


// Export our changes
module.exports = app;