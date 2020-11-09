import Sequelize, { Op } from 'sequelize'
import express from 'express'
import db from './database'
import cors from 'cors'
const JSONAPISerializer = require('jsonapi-serializer').Serializer;
const UserSerializer = new JSONAPISerializer('users', {
	attributes: ['firstName', 'lastName', 'email', 'avatar']
})
async function getAllUser(req) {
	try {
		const offset = req.query.page ? parseInt(req.query.page) : null
		const name = req.query.name ? req.query.name : null
		let where = null
		if (name) {
			where = {
				firstName: {
					[Op.like]: `%${name}%`
				}
			}
		}
		const limit = req.query.qty ? parseInt(req.query.qty) : null

		const users = await db.User.findAll(
			{
				attributes: [
					'id',
					'firstName',
					'lastName',
					'email',
					'avatar'
				],
				limit,
				offset,
				where,
				raw: true
			}
		)

		return  UserSerializer.serialize(users)
	} catch (e) {
		return e
	}
}

let app = express(cors())

app.get('/', (req, res) => {
	res.json({message: 'Hello world'})
})

app.get('/users', async (req, res) => {
	res.setHeader('Access-Control-Allow-Origin', '*')
	try {
		const users = await getAllUser(req)

		res.json(users)
	} catch (e) {
		return e
	}
})

app.listen(process.env.PORT, () => {
	console.log(`Example app listening at http://localhost:${process.env.PORT}`)
})
