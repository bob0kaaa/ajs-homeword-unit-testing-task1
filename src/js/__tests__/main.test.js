import getStateHealth from '../main';

test.each([
  ['Маг', 75, 'healthy'],
  ['Маг', 51, 'healthy'],
  ['Маг', 15, 'wounded'],
  ['Маг', 50, 'wounded'],
  ['Маг', 7, 'critical'],
  ['Маг', 0, 'critical'],
])(
  'should return the right state of health',
  (name, health, expected) => {
    const received = getStateHealth({ name, health });
    expect(received).toBe(expected);
  },
);
