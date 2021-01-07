const express = require('express')
const router = express.Router()

const wordAnalyser = require('../controllers/wordAnalyser')
console.log('wordAnalyser',wordAnalyser)

router.get('/words/:sentence', wordAnalyser.splitWords)

module.exports = router