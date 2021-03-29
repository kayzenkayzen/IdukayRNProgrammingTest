import React from 'react';
import { render } from '@testing-library/react-native';
import { PotionOptionItem } from '@src/screens/PotionsSelectionScreen/components';

describe('Test PotionOptionItem Component', () => {
  it('renders correctly', () => {
    const onPressAddPotion = jest.fn();
    const onPressRemovePotion = jest.fn();

    const wrapper = render(
      <PotionOptionItem
        index={0}
        id="red"
        rgb="red"
        label="Red Potion"
        value={0}
        onPressAddPotion={onPressRemovePotion}
        onPressRemovePotion={onPressAddPotion}
      />,
    ).toJSON();

    expect(wrapper).toMatchSnapshot();
  });

  it('renders props correctly', () => {
    const onPressAddPotion = jest.fn();
    const onPressRemovePotion = jest.fn();

    const { getByTestId } = render(
      <PotionOptionItem
        index={0}
        id="red"
        rgb="red"
        label="Red Potion"
        value={0}
        onPressAddPotion={onPressRemovePotion}
        onPressRemovePotion={onPressAddPotion}
      />,
    );

    expect(getByTestId('potion-option-item-label').props.children).toBe(
      'Red Potion',
    );
  });
});
