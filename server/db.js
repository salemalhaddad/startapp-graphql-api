const { DataStore } = require('notarealdb')

const startupDB = new DataStore('./data');
const startups =  startupDB.collection('startups')

module.exports = {
	startups: startupDB.collection('startups')
}
