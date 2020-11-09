import { Model, Sequelize } from 'sequelize'

export default class Address extends Model {
	static init(sequelize) {
		return super.init(
			{
				id: {
					type: Sequelize.UUIDV4,
					primaryKey: true,
					allowNull: false,
					unique: true
				},
				zipCode: Sequelize.STRING
				zipCodeByState: Sequelize.STRING
				city: Sequelize.STRING
				cityPrefix: Sequelize.STRING
				citySuffix: Sequelize.STRING
				streetName: Sequelize.STRING
				streetAddress: Sequelize.STRING
				streetSuffix: Sequelize.STRING
				streetPrefix: Sequelize.STRING
				secondaryAddress: Sequelize.STRING
				country: Sequelize.STRING
				countryCode: Sequelize.STRING
				state: Sequelize.STRING
				stateAbbr: Sequelize.STRING
				latitude: Sequelize.STRING
				longitude: Sequelize.STRING
				direction: Sequelize.STRING
				cardinalDirection: Sequelize.STRING
				ordinalDirection: Sequelize.STRING
				nearbyGPSCoordinate: Sequelize.STRING
				timeZone: Sequelize.STRING
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
				tableName: 'addresses',
				timestamps: false
			}
		)
	}
}
