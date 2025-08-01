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
// TEMP migration route — remove after running once
app.get('/migrate', async (req, res) => {
    try {
        const Knex = require('knex');
        const config = require('../knexfile');
        const knex = Knex(config.production);

        await knex.migrate.latest();
        res.send('✅ Migrations done!');
    } catch (error) {
        console.error(error);
        res.status(500).send('❌ Migration failed');
    }
});

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
