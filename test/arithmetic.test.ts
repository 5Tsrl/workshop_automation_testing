// const sum = require('../src/arithmetic').sum;
// const i2ia = require('../src/arithmetic').i2ia;
const ari = require('../src/arithmetic');

test('adds 1 + 2 to equal 3', () => {
  expect(ari.sum(1, 2)).toBe(3);
}); 

test('i becomes ia', () => {
  expect(ari.i2ia('pino')).toBe('piano');
  expect(ari.i2ia('ghii')).toBe('ghiaia');
})