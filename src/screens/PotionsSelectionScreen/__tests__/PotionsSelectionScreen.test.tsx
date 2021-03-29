import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import { PotionsSelectionScreen } from '@src/screens';
import { constants } from '@src/constants';

describe('Test PotionsSelectionScreen Component', () => {
  it('renders correctly', () => {
    const navigation = {};
    const removePotion = jest.fn();
    const addPotion = jest.fn();
    const calculateOptimalAttacks = jest.fn();
    const reset = jest.fn();
    const potions = constants.POTIONS.reduce(
      (accumulator, currentValue) => ({
        ...accumulator,
        [currentValue.id]: 0,
      }),
      {},
    );
    const attacks = [[]];
    const damage = 0;

    const wrapper = render(
      <PotionsSelectionScreen
        navigation={navigation}
        removePotion={removePotion}
        addPotion={addPotion}
        calculateOptimalAttacks={calculateOptimalAttacks}
        reset={reset}
        potions={potions}
        attacks={attacks}
        damage={damage}
      />,
    ).toJSON();

    expect(wrapper).toMatchSnapshot();
  });

  it("calculate button is not showing when there aren't selected potions", () => {
    const navigation = {};
    const removePotion = jest.fn();
    const addPotion = jest.fn();
    const calculateOptimalAttacks = jest.fn();
    const reset = jest.fn();
    const potions = constants.POTIONS.reduce(
      (accumulator, currentValue) => ({
        ...accumulator,
        [currentValue.id]: 0,
      }),
      {},
    );
    const attacks = [[]];
    const damage = 0;

    const { queryByTestId } = render(
      <PotionsSelectionScreen
        navigation={navigation}
        removePotion={removePotion}
        addPotion={addPotion}
        calculateOptimalAttacks={calculateOptimalAttacks}
        reset={reset}
        potions={potions}
        attacks={attacks}
        damage={damage}
      />,
    );

    expect(queryByTestId('calculate-optimal-attacks-button')).toBeNull();
  });

  it('calculate button is showing when there is one or more selected potions', () => {
    const navigation = {};
    const removePotion = jest.fn();
    const addPotion = jest.fn();
    const calculateOptimalAttacks = jest.fn();
    const reset = jest.fn();
    const potions = constants.POTIONS.reduce(
      (accumulator, currentValue) => ({
        ...accumulator,
        [currentValue.id]: 1,
      }),
      {},
    );
    const attacks = [[]];
    const damage = 0;

    const { queryByTestId } = render(
      <PotionsSelectionScreen
        navigation={navigation}
        removePotion={removePotion}
        addPotion={addPotion}
        calculateOptimalAttacks={calculateOptimalAttacks}
        reset={reset}
        potions={potions}
        attacks={attacks}
        damage={damage}
      />,
    );

    expect(queryByTestId('calculate-optimal-attacks-button')).toBeDefined();
  });

  it('calculateOptimalAttacks callback prop is called', () => {
    const navigation = {};
    const removePotion = jest.fn();
    const addPotion = jest.fn();
    const calculateOptimalAttacks = jest.fn();
    const reset = jest.fn();
    const potions = constants.POTIONS.reduce(
      (accumulator, currentValue) => ({
        ...accumulator,
        [currentValue.id]: 1,
      }),
      {},
    );
    const attacks = [[]];
    const damage = 0;

    const { getByTestId } = render(
      <PotionsSelectionScreen
        navigation={navigation}
        removePotion={removePotion}
        addPotion={addPotion}
        calculateOptimalAttacks={calculateOptimalAttacks}
        reset={reset}
        potions={potions}
        attacks={attacks}
        damage={damage}
      />,
    );

    fireEvent.press(getByTestId('calculate-optimal-attacks-button'));

    expect(calculateOptimalAttacks).toHaveBeenCalledTimes(1);
  });

  it('attacks and damage props update call useEffect correctly', () => {
    const navigation = {
      navigate: jest.fn(),
    };
    const removePotion = jest.fn();
    const addPotion = jest.fn();
    const calculateOptimalAttacks = jest.fn();
    const reset = jest.fn();
    const potions = constants.POTIONS.reduce(
      (accumulator, currentValue) => ({
        ...accumulator,
        [currentValue.id]: 1,
      }),
      {},
    );
    const attacks = [[]];
    const damage = 0;

    const { rerender } = render(
      <PotionsSelectionScreen
        navigation={navigation}
        removePotion={removePotion}
        addPotion={addPotion}
        calculateOptimalAttacks={calculateOptimalAttacks}
        reset={reset}
        potions={potions}
        attacks={attacks}
        damage={damage}
      />,
    );

    rerender(
      <PotionsSelectionScreen
        navigation={navigation}
        removePotion={removePotion}
        addPotion={addPotion}
        calculateOptimalAttacks={calculateOptimalAttacks}
        reset={reset}
        potions={potions}
        attacks={[['red', 'blue'], ['red']]}
        damage={10}
      />,
    );

    expect(navigation.navigate).toHaveBeenCalledTimes(1);
    expect(reset).toHaveBeenCalledTimes(1);
  });
});
