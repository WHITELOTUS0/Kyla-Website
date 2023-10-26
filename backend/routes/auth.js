const express = require('express')
const router = express.Router()
const { authorizeRequest } = require('../middleware/middleware')
const { 
    register,
    login
} = require('../controllers/auth')


const {testRoute, getUsersQuiz,testMail} = require('../controllers/test')


const {
    storeQuiz,
    getAllQuizes
} = require('../controllers/quiz')

router.post('/api/register', register);
router.post('/api/login', login)
router.post('/api/quiz', storeQuiz);
router.get('/api/quiz', getAllQuizes)

router.get('/mm',testRoute)

router.get('/mail', testMail)

router.get('/test/:id', getUsersQuiz)


module.exports = router;