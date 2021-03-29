/**
 *
 * Returns an array with arrays of the
 * given size.
 *
 */

const chunkArray = (originalArray: string[], chunkSize: number): string[][] => {
  if (chunkSize <= 0) {
    throw new Error('chunkSize param must be equal or greater than 1');
  }

  const originalArrayLength = originalArray.length;
  const chunkedArray = [];

  for (let index = 0; index < originalArrayLength; index += chunkSize) {
    const chunk = originalArray.slice(index, index + chunkSize);
    chunkedArray.push(chunk);
  }

  return chunkedArray;
};

export default chunkArray;
