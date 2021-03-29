import { OptimalDamageCalculatorActions } from '@src/redux/actions';
import { ActionType } from '@src/redux/types/index.d';

describe('Test redux OptimalDamageCalculatorActions', () => {
  it('should removePotion create an action to remove a potion', () => {
    const potionId = 'red';
    const expectedAction = {
      type: ActionType.REMOVE_POTION,
      payload: { potionId },
    };
    expect(OptimalDamageCalculatorActions.removePotion(potionId)).toEqual(
      expectedAction,
    );
  });

  it('should addPotion create an action to add a potion', () => {
    const potionId = 'red';
    const expectedAction = {
      type: ActionType.ADD_POTION,
      payload: { potionId },
    };
    expect(OptimalDamageCalculatorActions.addPotion(potionId)).toEqual(
      expectedAction,
    );
  });

  it('should reset create an action to reset state', () => {
    const expectedAction = {
      type: ActionType.RESET,
      payload: {},
    };
    expect(OptimalDamageCalculatorActions.reset()).toEqual(expectedAction);
  });
});
