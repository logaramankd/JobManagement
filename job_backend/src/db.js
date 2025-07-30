const Knex = require('knex');
const { Model } = require('objection');
const knexConfig = require('../knexfile');

const db = Knex(knexConfig.development);
Model.knex(db);

module.exports = db;
