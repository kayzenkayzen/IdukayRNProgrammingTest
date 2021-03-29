import React from 'react';
import { SafeAreaView, ScrollView, View, Text, Image } from 'react-native';
import { constants } from '@src/constants';
import { theme } from '@src/theme';
import { images } from '@src/assets';
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

          {(attacks || []).map((attack: string[], i: number) => {
            return (
              <View
                testID={`attack-${i}`}
                key={`attack-${i}`}
                style={[
                  styles.attackOuterContainer,
                  {
                    borderTopWidth: i === 0 ? 1 / 1 : undefined,
                    borderTopColor: i === 0 ? theme.colors.gray : undefined,
                  },
                ]}
              >
                <View style={styles.attackIndexContainer}>
                  <Text style={styles.attackIndexText}>{`${i + 1}`}</Text>
                  <Text style={styles.attackIndexTextIcon}>o</Text>
                </View>

                {attack.map((potion, j) => (
                  <Image
                    testID={`attack-${i}-${potion}-${j}`}
                    key={`attack-${i}-${potion}-${j}`}
                    style={[
                      styles.attackPotionImage,
                      {
                        tintColor: constants.POTIONS.filter(
                          v => v.id === potion,
                        )[0].rgb,
                      },
                    ]}
                    source={images.potion}
                  />
                ))}
              </View>
            );
          })}
        </ScrollView>
      </SafeAreaView>
    );
  },
);

export default OptimalDamageScreen;
