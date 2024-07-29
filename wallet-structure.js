const Sequelize = require('sequelize');

const sequelize = new Sequelize('database', 'user', 'password', {
	host: 'localhost',
	dialect: 'sqlite',
	logging: false,
	// SQLite only
	storage: 'userData.sqlite',
});

const userData = sequelize.define('tags', {
	userId: {
		type: Sequelize.INTEGER,
		unique: true,
        primaryKey: true,
	},
	username: Sequelize.STRING,
	balance: Sequelize.INTEGER,
});

module.exports = {userData}