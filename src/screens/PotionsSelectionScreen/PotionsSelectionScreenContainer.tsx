import React from 'react';
import { connect } from 'react-redux';
import { OptimalDamageCalculatorActions } from '@src/redux/actions';
import { IRootState } from '@src/redux/reducers/index.d';
import { PotionsSelectionScreen } from '@src/screens';
import { IPotionsSelectionScreenProps } from './PotionsSelectionScreen.d';
import { Dispatch } from 'redux';

const StoreScreenContainer: React.FC<IPotionsSelectionScreenProps> = React.memo(
  (props: IPotionsSelectionScreenProps) => {
    return <PotionsSelectionScreen {...props} />;
  },
);

const mapStateToProps = ({ optimalDamageCalculator }: IRootState) => ({
  potions: optimalDamageCalculator.potions,
  attacks: optimalDamageCalculator.attacks,
  damage: optimalDamageCalculator.damage,
});

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    removePotion: (potionId: string) =>
      dispatch(OptimalDamageCalculatorActions.removePotion(potionId)),
    addPotion: (potionId: string) =>
      dispatch(OptimalDamageCalculatorActions.addPotion(potionId)),
    calculateOptimalAttacks: (potions: { [x: string]: number }) =>
      dispatch(OptimalDamageCalculatorActions.calculateOptimalAttacks(potions)),
    reset: () => dispatch(OptimalDamageCalculatorActions.reset()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(StoreScreenContainer);
