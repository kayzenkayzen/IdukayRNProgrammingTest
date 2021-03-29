import React from 'react';
import { SafeAreaView, ScrollView, View, Text } from 'react-native';
import { theme } from '@src/theme';
import { AttackCombinationItem } from './components';
import { IOptimalDamageScreenProps } from './OptimalDamageScreen.d';
import { styles } from './OptimalDamageScreen.style';

const OptimalDamageScreen: React.FC<IOptimalDamageScreenProps> = React.memo(
  ({ route }: IOptimalDamageScreenProps) => {
    const { attacks, damage } = route.params;

    return (
      <SafeAreaView style={theme.container.outer}>
        <ScrollView>
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>
              Realiza estos ataques para lograr el mayor daño a tu objetivo
            </Text>

            <View style={styles.damagePercentageOuterCircle}>
              <View style={styles.damagePercentageInnerCircle}>
                <Text
                  testID="damage-value"
                  style={styles.damagePercentageCircleValue}
                >{`${damage} %`}</Text>
              </View>
            </View>
          </View>

          {(attacks || []).map((attack: string[], index: number) => {
            return (
              <AttackCombinationItem
                key={`attack-${index}`}
                attack={attack}
                index={index}
              />
            );
          })}
        </ScrollView>
      </SafeAreaView>
    );
  },
);

export default OptimalDamageScreen;
