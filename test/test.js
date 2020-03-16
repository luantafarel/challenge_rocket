const func = require('../src/tasks/func')
const fs = require('fs')
test('File should have the correct format', async () => {
    expect(await func('./files/test_file4.txt')).toBe('File format is not correct')
})
test('File should exist', async () => {
    expect(await func('./files/test_file32.txt')).toBe('Arquivo não existe')
})
test('File should not be empty', async () => {
    expect(await func('./files/test_file2.txt')).toBe('File empty')
})
describe('In case of success', () => {
    // remove the output file before run the tests
    beforeAll(async () => {
        if (fs.existsSync('./files/test_file.txt_output.txt')) await fs.unlinkSync('./files/test_file.txt_output.txt')
    })
    test('Return should be a message of success', async () => {
        expect(await func('./files/test_file.txt')).toBe('Sucesso, arquivo ./files/test_file.txt_output.txt criado')
    })
    test('Output file should be created', async () => {
        expect(await fs.existsSync('./files/test_file.txt_output.txt')).toEqual(true)
    })
})
