// connect to db
// INSTRUCTIONS:
// create database called 'craft_db' in postgreSQL
// run 'psql -d craft_db -f migration/migrations.sql' after creating db

const pgp = require('pg-promise')();

const db = pgp({
  host: 'localhost',
  port: 5432,
  database: 'craft_db'
})

module.exports = db;
