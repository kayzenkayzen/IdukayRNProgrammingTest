import { constants } from '@src/constants';
import {
  chunkArray,
  getUniqueValuesFromArray,
  removeValuesFromArray,
} from './utils';

interface IOptimalDamageCalculator {
  calculateDamagePercentage: (attacks: string[][]) => number;
  getMostOptimalAttacks: (
    p: string[],
  ) => { attacks: string[][]; damage: number };
}

class OptimalDamageCalculator implements IOptimalDamageCalculator {
  public calculateDamagePercentage = (attacks: string[][]): number => {
    return attacks.reduce((accumulator, currentValue) => {
      return (
        accumulator +
        constants.COMBINATION_DAMAGE_PERCENTAGE[currentValue.length]
      );
    }, 0);
  };

  public getMostOptimalAttacks = (
    p: string[],
  ): { attacks: string[][]; damage: number } => {
    const attacks = [];
    const tempPoisons = [...p];

    while (tempPoisons.length > 0) {
      const combination = getUniqueValuesFromArray(tempPoisons);

      // Remove recieved combination elements from
      // received array
      removeValuesFromArray(tempPoisons, combination);

      // If combination has more than two elements
      // we use this combination as an optimal attack
      if (combination.length > 2) {
        attacks.push(combination);
      } else {
        attacks.push(...chunkArray(combination, 1));
      }
    }

    const damage = this.calculateDamagePercentage(attacks);

    return {
      attacks,
      damage,
    };
  };
}

export default OptimalDamageCalculator;
