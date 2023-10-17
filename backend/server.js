const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
// other imports...

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Create connection to MySQL
const db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'your_password',
    database : 'school_matching'
});

db.connect((err) => {
    if(err) throw err;
    console.log('MySQL Connected...');
});

// Set up routes (you should separate these into different files under /routes folder)
app.use('/api/users', require('./routes/users'));
// ... other routes

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
