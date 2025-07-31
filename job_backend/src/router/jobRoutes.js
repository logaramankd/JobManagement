const express = require('express');
const { createJob, getJobs, deleteJobById } = require('../controller/jobController');
const router = express.Router();
router.post('/jobs', createJob);
router.get('/jobs', getJobs);
router.delete('/jobs/:id', deleteJobById);
module.exports = router