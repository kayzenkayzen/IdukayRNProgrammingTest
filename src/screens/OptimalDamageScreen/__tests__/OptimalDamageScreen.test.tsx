import React from 'react';
import { render } from '@testing-library/react-native';
import { OptimalDamageScreen } from '@src/screens';

describe('Test OptimalDamageScreen Component', () => {
  it('renders correctly', () => {
    const route = { params: {} };

    const wrapper = render(<OptimalDamageScreen route={route} />).toJSON();

    expect(wrapper).toMatchSnapshot();
  });

  it('renders attacks correctly', () => {
    const route = {
      params: {
        attacks: [['red', 'blue', 'green'], ['red', 'blue', 'green'], ['red']],
      },
    };

    const { getByTestId } = render(<OptimalDamageScreen route={route} />);

    expect(getByTestId('attack-0')).toBeDefined();
    expect(getByTestId('attack-1')).toBeDefined();
    expect(getByTestId('attack-2')).toBeDefined();
    expect(getByTestId('attack-0-red-0')).toBeDefined();
    expect(getByTestId('attack-0-blue-1')).toBeDefined();
    expect(getByTestId('attack-0-green-2')).toBeDefined();
    expect(getByTestId('attack-1-red-0')).toBeDefined();
    expect(getByTestId('attack-1-blue-1')).toBeDefined();
    expect(getByTestId('attack-1-green-2')).toBeDefined();
    expect(getByTestId('attack-2-red-0')).toBeDefined();
  });

  it('renders damage correctly', () => {
    const route = {
      params: {
        damage: 15,
      },
    };

    const { getByTestId } = render(<OptimalDamageScreen route={route} />);

    expect(getByTestId('damage-value').props.children).toBe('15 %');
  });
});
