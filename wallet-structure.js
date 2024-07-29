const Sequelize = require('sequelize');

const sequelize = new Sequelize('database', 'user', 'password', {
	host: 'localhost',
	dialect: 'sqlite',
	logging: false,
	// SQLite only
	storage: 'database.sqlite',
});

const playerData = sequelize.define('tags', {
	userId: {
		type: Sequelize.INTEGER,
		unique: true,
        primaryKey: true,
	},
	username: Sequelize.STRING,
	balance: Sequelize.INTEGER,
});

module.exports = playerData