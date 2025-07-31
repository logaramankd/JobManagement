const express = require('express')
const { Model } = require('objection');
const Knex = require('knex');
const app = express()
const db = require('./db');
const jobRoutes = require('./router/jobRoutes');
const cors = require('cors');

app.use(express.json())
app.use(cors())
app.use('/api', jobRoutes);
const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
