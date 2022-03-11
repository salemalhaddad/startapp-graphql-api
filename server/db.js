const { DataStore } = require('notarealdb')

const startupDB = new DataStore('./data');
const jsonFile = new require('./data/startups.json');

const startups = startupDB.collection('startups')
startups.entities = jsonFile;


module.exports = startups;

