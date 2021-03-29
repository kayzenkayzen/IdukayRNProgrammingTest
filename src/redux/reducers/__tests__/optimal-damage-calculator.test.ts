import { constants } from '@src/constants';
import { optimalDamageCalculatorReducer } from '@src/redux/reducers';
import { ActionType } from '@src/redux/types/index.d';

describe('Test redux optimalDamageCalculatorReducer', () => {
  it('should removePotion action reflect expected state', () => {
    const potionId = constants.POTIONS[0]?.id;

    expect(
      optimalDamageCalculatorReducer(undefined, {
        type: ActionType.REMOVE_POTION,
        payload: {
          potionId,
        },
      }),
    ).toEqual({
      potions: constants.POTIONS.reduce(
        (accumulator, currentValue) => ({
          ...accumulator,
          [currentValue.id]: currentValue.id === potionId ? -1 : 0,
        }),
        {},
      ),
      attacks: [],
      damage: 0,
    });
  });

  it('should addPotion action reflect expected state', () => {
    const potionId = constants.POTIONS[0]?.id;

    expect(
      optimalDamageCalculatorReducer(undefined, {
        type: ActionType.ADD_POTION,
        payload: {
          potionId,
        },
      }),
    ).toEqual({
      potions: constants.POTIONS.reduce(
        (accumulator, currentValue) => ({
          ...accumulator,
          [currentValue.id]: currentValue.id === potionId ? 1 : 0,
        }),
        {},
      ),
      attacks: [],
      damage: 0,
    });
  });

  it('should reset action reflect expected state', () => {
    expect(
      optimalDamageCalculatorReducer(
        {
          potions: constants.POTIONS.reduce(
            (accumulator, currentValue) => ({
              ...accumulator,
              [currentValue.id]: 1,
            }),
            {},
          ),
          attacks: [['RED', 'BLUE'], ['RED']],
          damage: 10,
        },
        {
          type: ActionType.RESET,
          payload: {},
        },
      ),
    ).toEqual({
      potions: constants.POTIONS.reduce(
        (accumulator, currentValue) => ({
          ...accumulator,
          [currentValue.id]: 0,
        }),
        {},
      ),
      attacks: [],
      damage: 0,
    });
  });
});
