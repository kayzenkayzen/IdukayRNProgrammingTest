export interface IOptimalDamageCalculatorState {
  potions: { [key: string]: number };
  attacks: string[][];
  damage: number;
}

export interface IRootState {
  optimalDamageCalculator: IOptimalDamageCalculatorState;
}
