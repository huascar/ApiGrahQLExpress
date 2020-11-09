import Sequelize from 'sequelize'
import { User } from './models'

const sequelize = new Sequelize(
	process.env.DB_NAME,
	process.env.DB_USER,
	process.env.DB_PASSWORD,
	{
		host: process.env.DB_HOST,
		dialect: 'mysql'
	}
)

const models = {
	User: User.init(sequelize, Sequelize)
}

Object.values(models)
	.filter(model => typeof model.associate === 'function')
	.map(model => model.associate(models))

const db = {
	...models,
	sequelize
}

export default db
