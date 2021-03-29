import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native';
import { constants } from '@src/constants';
import { theme } from '@src/theme';
import { images } from '@src/assets';
import { IOptimalDamageScreenProps } from './types';

const styles = StyleSheet.create({
  titleContainer: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontFamily: theme.fonts.primary.regular,
    fontSize: 16,
    lineHeight: 21,
    color: theme.colors.primary.medium,
    flex: 1,
  },
  damagePercentageOuterCircle: {
    width: 75,
    height: 75,
    borderRadius: 75,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
  },
  damagePercentageInnerCircle: {
    width: 70,
    height: 70,
    borderRadius: 70,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  damagePercentageCircleValue: {
    fontFamily: theme.fonts.primary.bold,
    fontSize: 21,
    textAlign: 'center',
    color: 'green',
  },
  attackOuterContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  attackIndexContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginRight: 10,
    width: 30,
  },
  attackIndexText: {
    fontFamily: theme.fonts.primary.bold,
    fontSize: 16,
    lineHeight: 26,
  },
  attackIndexTextIcon: {
    fontFamily: theme.fonts.primary.bold,
    fontSize: 11,
    lineHeight: 18,
  },
  attackPotionImage: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
});

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
