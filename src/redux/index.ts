import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { optimalDamageCalculatorReducer } from '@src/redux/reducers';
import { IRootState } from '@src/redux/reducers/index.d';

// Create redux store
export const Store = createStore<IRootState, any, any, any>(
  combineReducers({
    optimalDamageCalculator: optimalDamageCalculatorReducer,
  }),
  composeWithDevTools(),
);
