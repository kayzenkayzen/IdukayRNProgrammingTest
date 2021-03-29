import React from 'react';
import { render } from '@testing-library/react-native';
import App from '@src/App';

describe('Test App Component', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });
  it('renders correctly', () => {
    render(<App />);
  });
});
