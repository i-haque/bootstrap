require('dotenv').config();
const express = require('express');
const { connect } = require('mongoose');

const app = express();
const port = process.env.PORT || 5000;

connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('connected to database..');
    app.listen(port, () => console.log(`listening on port ${port}..`));
  })
  .catch(() => console.log('could not connect to database!'));

app.use(require('./middleware/cors'));
app.use(express.json());
app.get('/', (req, res) => {
  res.send('Home Page');
});
app.use('/users', require('./routes/users'));
app.use('/lodge', require('./routes/lodges'));
