/**
 *
 * Return an array with unique values
 * of provided array
 *
 **/

const getUniqueValuesFromArray = (originalArray: string[]): string[] => {
  return [...new Set(originalArray)];
};

export default getUniqueValuesFromArray;
