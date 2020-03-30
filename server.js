const express = require('express');
const mongoose = require('mongoose');
const port = 8001;
const app = express();
const User = require('./models/User');

app.use(express.json());

mongoose.connect('mongodb://localhost:27017/userData', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
mongoose.set('useCreateIndex', true);

/*
 * useNewUrlParser: true,
 * useUnifiedTopology: true
 * mongoose.set('useCreateIndex', true);
 * all three required to remove deprecated warnings
 */

app.listen(port, () => {
  console.log(`server is listening on port:${port}`);
});

// CREATE
app.post('/users', (req, res) => {
  // User.create()
});

app
  .route('/users/:id')
  // READ
  .get((req, res) => {
    // User.findById()
  })
  // UPDATE
  .put((req, res) => {
    // User.findByIdAndUpdate()
  })
  // DELETE
  .delete((req, res) => {
    // User.findByIdAndDelete()
  });
