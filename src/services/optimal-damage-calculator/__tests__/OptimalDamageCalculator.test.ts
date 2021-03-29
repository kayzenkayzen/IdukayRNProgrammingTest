import { constants } from '@src/constants';
import OptimalDamageCalculator from './../OptimalDamageCalculator';

describe('Test OptimalDamageCalculator service', () => {
  it('should the amount of POTIONS must match the amount of COMBINATION_DAMAGE_PERCENTAGE', () => {
    expect(Object.keys(constants.POTIONS).length).toEqual(
      Object.keys(constants.COMBINATION_DAMAGE_PERCENTAGE).length,
    );
  });

  it('calculate damage percentage correcly', () => {
    expect(
      new OptimalDamageCalculator().calculateDamagePercentage([
        ['RED', 'BLUE', 'YELLOW'],
        ['RED'],
      ]),
    ).toBe(13);
  });

  it('calculate attacks and damage correcly Case 1', () => {
    expect(
      new OptimalDamageCalculator().getMostOptimalAttacks([
        'RED',
        'RED',
        'BLUE',
        'GREEN',
      ]),
    ).toEqual({
      attacks: [['RED', 'BLUE', 'GREEN'], ['RED']],
      damage: 13,
    });
  });

  it('calculate attacks and damage correcly Case 2', () => {
    expect(
      new OptimalDamageCalculator().getMostOptimalAttacks([
        'RED',
        'RED',
        'BLUE',
        'BLUE',
        'GREEN',
        'YELLOW',
        'GRAY',
      ]),
    ).toEqual({
      attacks: [['RED', 'BLUE', 'GREEN', 'YELLOW', 'GRAY'], ['RED'], ['BLUE']],
      damage: 31,
    });
  });

  it('calculate attacks and damage correcly Case 3', () => {
    expect(
      new OptimalDamageCalculator().getMostOptimalAttacks([
        'RED',
        'RED',
        'BLUE',
        'BLUE',
        'GREEN',
        'GREEN',
        'YELLOW',
        'GRAY',
      ]),
    ).toEqual({
      attacks: [
        ['RED', 'BLUE', 'GREEN', 'YELLOW', 'GRAY'],
        ['RED', 'BLUE', 'GREEN'],
      ],
      damage: 35,
    });
  });
});
