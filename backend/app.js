const express = require('express');
const app = express();
const cors = require('cors');
const bookRoute = require('./routes/booksRoutes');
require('./connection/conn');
app.use(express.json());
app.use(cors());
app.use('/bookstore', bookRoute);

app.listen(1000, () => {
  console.log('server started.');
});
