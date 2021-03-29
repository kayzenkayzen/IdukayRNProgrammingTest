export interface IPotionsSelectionScreenProps {
  navigation: any;
  potions: any;
  removePotion: any;
  addPotion: any;
  calculateOptimalAttacks?: any;
  attacks: string[][];
  damage: number;
  reset: () => void;
}
