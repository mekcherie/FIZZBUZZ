const { test } = require('@jest/globals')
const fb = require('../fizzbuzz.js')

test('isFizzy', () =>{ 
    expect(fb.isFizzy(9)).toBe(true)
    expect(fb.isFizzy(12)).toBe(true)
    expect(fb.isFizzy(19)).toBe(false)
})

test('isBuzzy', () =>{ 
    expect(fb.isBuzzy(25)).toBe(true)
    expect(fb.isFizzy(7)).toBe(false)
    expect(fb.isFizzy(29)).toBe(false)
})

test('fizzyBuzzy', () =>{
    expect(fb.fizzyBuzzy(3)).toBe(fb.FIZZ)
    expect(fb.fizzyBuzzy(5)).toBe(fb.BUZZ)
    expect(fb.fizzyBuzzy(15)).toBe(fb.FIZZBUZZ)

})

test('fizzBuzz', () => {
    expect(fb.fizzBuzz(20)).toStrictEqual({"buzz": 3, "count": 20, "fizz": 5, "fizzBuzz": 1})
})

test('fizz', () => {
    expect(fb.FIZZ).toBe('fizz')
})

test('buzz', () => {
    expect(fb.BUZZ).toBe('buzz') 
})

test('fizzbuzz', () => {
    expect(fb.FIZZBUZZ).toBe('fizzbuzz')
})
