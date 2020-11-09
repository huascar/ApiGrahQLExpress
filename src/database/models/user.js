import { Model, Sequelize } from 'sequelize'

export default class User extends Model {
	static init(sequelize) {
		return super.init(
			{
				id: {
					type: Sequelize.UUIDV4,
					primaryKey: true,
					allowNull: false,
					unique: true
				},
				firstName: Sequelize.STRING,
				lastName: Sequelize.STRING,
				password: Sequelize.STRING,
				payload: Sequelize.STRING,
				email: Sequelize.STRING,
				avatar: Sequelize.STRING,
				createdAt: {
					type: Sequelize.DATE
				},
				updatedAt: {
					type: Sequelize.DATE
				}
			},
			{
				charset: 'utf8',
				sequelize,
				tableName: 'users',
				timestamps: false
			}
		)
	}
}
