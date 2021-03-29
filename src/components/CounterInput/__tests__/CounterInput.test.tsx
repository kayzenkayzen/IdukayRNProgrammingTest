import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import { CounterInput } from '@src/components';

describe('Test CounterInput Component', () => {
  it('should renders correctly', () => {
    const wrapper = render(
      <CounterInput
        value={0}
        onPressMinus={() => jest.fn()}
        onPressMore={() => jest.fn()}
      />,
    ).toJSON();

    expect(wrapper).toMatchSnapshot();
  });

  it('value prop should render correctly', () => {
    const { getByTestId } = render(
      <CounterInput
        value={4}
        onPressMinus={() => jest.fn()}
        onPressMore={() => jest.fn()}
      />,
    );

    expect(getByTestId('value-label').props.children).toBe(4);
  });

  it('onPressMinus callback should be called', () => {
    const onPressMinus = jest.fn();

    const { getByTestId } = render(
      <CounterInput
        value={0}
        onPressMinus={onPressMinus}
        onPressMore={() => jest.fn()}
      />,
    );
    const minusButton = getByTestId('minus-button');

    fireEvent.press(minusButton);

    expect(onPressMinus).toHaveBeenCalledTimes(1);
  });

  it('onPressMore callback should be called', () => {
    const onPressMore = jest.fn();

    const { getByTestId } = render(
      <CounterInput
        value={0}
        onPressMinus={() => jest.fn()}
        onPressMore={onPressMore}
      />,
    );
    const moreButton = getByTestId('more-button');

    fireEvent.press(moreButton);

    expect(onPressMore).toHaveBeenCalledTimes(1);
  });

  it('should prevent setting the input value less than the value defined on min prop', () => {
    const onPressMinus = jest.fn();
    const { getByTestId } = render(
      <CounterInput
        value={0}
        min={0}
        onPressMinus={onPressMinus}
        onPressMore={() => jest.fn()}
      />,
    );
    const minusButton = getByTestId('minus-button');

    fireEvent.press(minusButton);

    expect(onPressMinus).toHaveBeenCalledTimes(0);
  });

  it('should prevent setting the input value greater than the value defined on max prop', () => {
    const onPressMore = jest.fn();
    const { getByTestId } = render(
      <CounterInput
        value={10}
        max={10}
        onPressMinus={() => jest.fn()}
        onPressMore={onPressMore}
      />,
    );
    const moreButton = getByTestId('more-button');

    fireEvent.press(moreButton);

    expect(onPressMore).toHaveBeenCalledTimes(0);
  });
});
