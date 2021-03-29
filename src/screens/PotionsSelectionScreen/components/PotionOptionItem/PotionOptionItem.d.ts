export interface IPotionOptionItemProps {
  index: number;
  id: string;
  rgb: string;
  label: string;
  value: number;
  onPressRemovePotion: (id?: string | number) => void;
  onPressAddPotion: (id?: string | number) => void;
}
