import { IAttackDamagePercentage, IPotion } from './index.d';

// Define the potions
const POTIONS: IPotion[] = [
  { id: 'red', rgb: '#BF2137', label: 'Poción Roja' },
  { id: 'blue', rgb: '#0479F1', label: 'Poción Azul' },
  { id: 'green', rgb: '#009E2F', label: 'Poción Verde' },
  { id: 'yellow', rgb: '#E4B80A', label: 'Poción Amarilla' },
  { id: 'gray', rgb: '#303030', label: 'Poción Gris' },
];

// Define the damage percentage
// for combinations length.
// The key is the length of the combination
// and the value is the percentage of damage
// for this combination length
const COMBINATION_DAMAGE_PERCENTAGE: IAttackDamagePercentage = {
  1: 3,
  2: 5,
  3: 10,
  4: 20,
  5: 25,
};

export const constants = {
  POTIONS,
  COMBINATION_DAMAGE_PERCENTAGE,
};
