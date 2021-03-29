import { constants } from '@src/constants';
import { ActionType } from '@src/redux/types/index.d';
import { IOptimalDamageCalculatorState } from '@src/redux/reducers/index.d';
import { OptimalDamageCalculatorActionsType } from '@src/redux/actions/index.d';

const defaultState: IOptimalDamageCalculatorState = {
  potions: constants.POTIONS.reduce(
    (accumulator, currentValue) => ({
      ...accumulator,
      [currentValue.id]: 0,
    }),
    {},
  ),
  attacks: [],
  damage: 0,
};

export function potionsStoreReducer(
  state = defaultState,
  action: OptimalDamageCalculatorActionsType,
): IOptimalDamageCalculatorState {
  switch (action.type) {
    case ActionType.REMOVE_POTION:
      return Object.assign({}, state, {
        potions: Object.assign({}, state.potions, {
          [action.payload.potionId]: state.potions[action.payload.potionId] - 1,
        }),
      });

    case ActionType.ADD_POTION:
      return Object.assign({}, state, {
        potions: Object.assign({}, state.potions, {
          [action.payload.potionId]: state.potions[action.payload.potionId] + 1,
        }),
      });

    case ActionType.SET_OPTIMAL_ATTACKS:
      return Object.assign({}, state, {
        attacks: action.payload.attacks,
        damage: action.payload.damage,
      });

    case ActionType.RESET:
      return Object.assign({}, defaultState);

    default:
      return state;
  }
}

export default potionsStoreReducer;
