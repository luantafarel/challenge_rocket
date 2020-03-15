const func = require('../src/tasks/func')

test.only('File should have the correct format', () => {
    expect(func('./files/test_file4.txt')).toThrowError('File format is not correct')
})
test('File should exist', () => {
    expect(func('./files/test_file32.txt')).toThrowError('Arquivo não existe')
})
test('File should not be empty', () => {
    expect(func('./files/test_file2.txt')).toThrowError('File empty')
})
test('File should exist', () => {
    expect(func('./files/test_file32.txt')).toThrowError('Arquivo não existe')
})
test('File should exist', () => {
    expect(func('./files/test_file32.txt')).toThrowError('Arquivo não existe')
})
