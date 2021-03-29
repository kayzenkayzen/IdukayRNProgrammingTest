import React from 'react';
import { OptimalDamageScreen } from '@src/screens';
import { IOptimalDamageScreenProps } from './types';

const OptimalDamageScreenContainer: React.FC<IOptimalDamageScreenProps> = React.memo(
  (props: IOptimalDamageScreenProps) => {
    return <OptimalDamageScreen {...props} />;
  },
);

export default OptimalDamageScreenContainer;
