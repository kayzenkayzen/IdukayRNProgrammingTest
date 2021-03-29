import React from 'react';
import { render } from '@testing-library/react-native';
import { constants } from '@src/constants';
import { AttackCombinationItem } from '@src/screens/OptimalDamageScreen/components';

describe('Test AttackCombinationItem Component', () => {
  it('renders correctly', () => {
    const wrapper = render(
      <AttackCombinationItem
        attack={[constants.POTIONS[0].id, constants.POTIONS[1].id]}
        index={0}
      />,
    ).toJSON();

    expect(wrapper).toMatchSnapshot();
  });
});
