require('dotenv').config()

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const router = require('./routes/auth')

const app = express();
const PORT = process.env.PORT || 5000

app.use(express.json());
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))

app.use('/v1', router);

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
