import example from '../../../src/helpers/example'

describe('Example', () => {
	test('Should return hello', () => {
		const input = 'Huascar'
		const fn = example(input)
		const expected = 'Hello Huascar'
		expect(fn).toEqual(expected)
	})
})
