export interface ICounterInput {
  id?: string | number;
  buttonBackgroundColor?: string;
  buttonBorderColor?: string;
  buttonLabelColor?: string;
  value: number;
  min?: number;
  max?: number;
  onPressMinus: (id?: string | number) => void;
  onPressMore: (id?: string | number) => void;
}
