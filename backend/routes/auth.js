const express = require('express')
const router = express.Router()
const { authorizeRequest } = require('../middleware/middleware')
const { 
    register,
    login
} = require('../controllers/auth')

router.post('/api/register', register);
router.post('/api/login', login)

module.exports = router;