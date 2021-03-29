import { removeValuesFromArray } from './../../utils';

describe('Test removeValuesFromArray utility of OptimalDamageCalculator service', () => {
  it('remove given values correctly', () => {
    const originalArray = ['1', '2', '3', '4', '5'];
    const valuesToRemove = ['1', '5'];

    const result = removeValuesFromArray(originalArray, valuesToRemove);

    expect(result).toEqual(['2', '3', '4']);
  });

  it('just remove the first occurrence of given values', () => {
    const originalArray = ['1', '1', '2', '3', '4', '5'];
    const valuesToRemove = ['1', '5'];

    const result = removeValuesFromArray(originalArray, valuesToRemove);

    expect(result).toEqual(['1', '2', '3', '4']);
  });

  it('remove more than one ocurrence if we provide duplicated values to remove', () => {
    const originalArray = ['1', '1', '2', '3', '4', '5'];
    const valuesToRemove = ['1', '1', '5'];

    const result = removeValuesFromArray(originalArray, valuesToRemove);

    expect(result).toEqual(['2', '3', '4']);
  });
});
