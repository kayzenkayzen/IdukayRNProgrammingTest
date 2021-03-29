import { getUniqueValuesFromArray } from './../../utils';

describe('Test getUniqueValuesFromArray utility of OptimalDamageCalculator service', () => {
  it('select uniques correctly', () => {
    const originalArray = ['1', '1', '2', '3', '3'];

    const uniques = getUniqueValuesFromArray(originalArray);

    expect(uniques).toEqual(['1', '2', '3']);
  });
});
