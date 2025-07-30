const express = require('express');
const createJob = require('../controller/jobController');
const router = express.Router();
router.post('/jobs', createJob);
module.exports = router