import React, { useMemo } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  PotionsSelectionScreenContainer,
  OptimalDamageScreenContainer,
} from '@src/screens';
import { theme } from '@src/theme';

interface IRouterProps {}

const Stack = createStackNavigator();

export const Router: React.FC<{}> = React.memo(({}: IRouterProps) => {
  const options = useMemo(() => {
    return {
      PotionsSelectionScreen: {
        title: 'Pociones',
        headerStyle: theme.header.headerStyle,
        headerTintColor: theme.header.headerTintColor,
        headerTitleStyle: theme.header.headerTitleStyle,
      },
      OptimalDamageScreen: {
        title: 'Ataques Óptimos',
        headerStyle: theme.header.headerStyle,
        headerTintColor: theme.header.headerTintColor,
        headerTitleStyle: theme.header.headerTitleStyle,
        headerBackTitleVisible: false,
      },
    };
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="PotionsSelectionScreen"
          component={PotionsSelectionScreenContainer}
          options={options.PotionsSelectionScreen}
        />
        <Stack.Screen
          name="OptimalDamageScreen"
          component={OptimalDamageScreenContainer}
          options={options.OptimalDamageScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
});
