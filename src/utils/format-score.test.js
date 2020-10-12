import formatScore from 'src/utils/format-score';

it('should return • when score is 0', () => {
  expect(formatScore(0)).toBe('•');
});

it('should return an unformatted score when 4 or less digits', () => {
  expect(formatScore(1)).toBe('1');
  expect(formatScore(10)).toBe('10');
  expect(formatScore(100)).toBe('100');
  expect(formatScore(1000)).toBe('1000');
});

it('should return a formatted 5 digit score', () => {
  expect(formatScore(99999)).toBe('99.9k');
});

it('should return a formatted 6 digit score', () => {
  expect(formatScore(999999)).toBe('999k');
});
