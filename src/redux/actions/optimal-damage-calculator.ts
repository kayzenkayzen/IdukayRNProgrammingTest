import { action } from 'typesafe-actions';
import { ActionType } from '@src/redux/types/index.d';
import { OptimalDamageCalculator } from '@src/services';

export function removePotion(potionId: string) {
  return action(ActionType.REMOVE_POTION, {
    potionId,
  });
}

export function addPotion(potionId: string) {
  return action(ActionType.ADD_POTION, {
    potionId,
  });
}

export function calculateOptimalAttacks(potions: { [x: string]: number }) {
  const input: string[] = [];

  // We build the required input for damage
  // calculator
  Object.keys(potions).map(key => {
    for (let i = 0; i < potions[key]; i++) {
      input.push(key);
    }
  });

  const result = new OptimalDamageCalculator().getMostOptimalAttacks([
    ...input,
  ]);

  return action(ActionType.SET_OPTIMAL_ATTACKS, {
    attacks: result.attacks,
    damage: result.damage,
  });
}

export function reset() {
  return action(ActionType.RESET, {});
}
