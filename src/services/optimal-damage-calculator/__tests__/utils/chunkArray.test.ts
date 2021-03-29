import { chunkArray } from './../../utils';

describe('Test chunkArray utility of OptimalDamageCalculator service', () => {
  it('size correctly the given array with chunk size equal to 1', () => {
    const originalArray = ['1', '2', '3', '4', '5'];

    const chunks = chunkArray(originalArray, 1);

    expect(chunks?.length).toBe(5);
  });

  it('size correctly the given array with chunk size equal to original array length', () => {
    const originalArray = ['1', '2', '3', '4', '5'];

    const chunks = chunkArray(originalArray, originalArray.length);

    expect(chunks?.length).toBe(1);
  });

  it('throws an error if chunk size is equal to 0', () => {
    const originalArray = ['1', '2', '3', '4', '5'];

    try {
      chunkArray(originalArray, 0);
      expect(true).toBe(false);
    } catch (error) {
      expect(error.message).toBe(
        'chunkSize param must be equal or greater than 1',
      );
    }
  });

  it('throws an error if chunk size is less than 0', () => {
    const originalArray = ['1', '2', '3', '4', '5'];

    try {
      chunkArray(originalArray, -1);
      expect(true).toBe(false);
    } catch (error) {
      expect(error.message).toBe(
        'chunkSize param must be equal or greater than 1',
      );
    }
  });

  it('given chunk size greater than original array size results in length equal to 1', () => {
    const originalArray = ['1', '2', '3', '4', '5'];

    const chunks = chunkArray(originalArray, 10);

    expect(chunks.length).toBe(1);
  });
});
