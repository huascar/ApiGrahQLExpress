import db from '../database'
import faker from 'faker'

function getFakeUsersData() {
	let newArray = []
	let i = 0

	for (i; i < 200; i++) {
		const obj = {
			id: faker.random.uuid(),
			firstName: faker.name.firstName(),
			lastName: faker.name.lastName(),
			password: faker.internet.password(),
			payload: faker.git.commitSha(),
			email: faker.internet.email(),
			avatar: faker.image.avatar(),
			createdAt: new Date(),
			updatedAt: new Date()
		}
		newArray.push(obj)
	}

	return newArray
}

async function bulkUsers() {
	try {
		const users = getFakeUsersData()

		await db.User.bulkCreate(users)
	} catch (e) {
		return e
	}
}

export {
	bulkUsers
}
