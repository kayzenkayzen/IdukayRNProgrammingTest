/**
 *
 * Removes provided values from originalArray.
 * It removes the first occurence of the
 * given value
 *
 **/

const removeValuesFromArray = (
  originalArray: string[],
  valuesToRemove: string[],
): string[] => {
  valuesToRemove.filter(value =>
    originalArray.splice(originalArray.indexOf(value), 1),
  );

  return originalArray;
};

export default removeValuesFromArray;
