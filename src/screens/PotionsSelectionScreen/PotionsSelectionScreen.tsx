import React, { useCallback, useEffect } from 'react';
import {
  StatusBar,
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import { theme } from '@src/theme';
import { constants } from '@src/constants';
import { CounterInput } from '@src/components';
import { images } from '@src/assets';
import { IPotionsSelectionScreenProps } from './types';

const styles = StyleSheet.create({
  titleContainer: {
    paddingHorizontal: 10,
    paddingVertical: 20,
    backgroundColor: '#fff',
  },
  titleText: {
    fontFamily: theme.fonts.primary.regular,
    fontSize: 16,
    lineHeight: 21,
    color: theme.colors.primary.medium,
  },
  optionOuterContainer: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#dddddd',
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginVertical: 2,
  },
  optionInnerContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  potionImage: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  counterContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
});

const PotionsSelectionScreen: React.FC<IPotionsSelectionScreenProps> = React.memo(
  ({
    navigation,
    potions,
    removePotion,
    addPotion,
    calculateOptimalAttacks,
    attacks,
    damage,
    reset,
  }: IPotionsSelectionScreenProps) => {
    const handleOnPressCalculateOptimalAttacks = useCallback(() => {
      calculateOptimalAttacks(potions);
    }, [calculateOptimalAttacks, potions]);

    const handleRemovePotion = useCallback(
      potionId => {
        removePotion(potionId);
      },
      [removePotion],
    );

    const handleOnPressPlus = useCallback(
      potionId => {
        addPotion(potionId);
      },
      [addPotion],
    );

    useEffect(() => {
      if (attacks.length > 0 && damage > 0) {
        navigation.navigate('OptimalDamageScreen', {
          attacks,
          damage,
        });

        reset();
      }
    }, [attacks, damage, navigation, reset]);

    return (
      <SafeAreaView style={theme.container.outer}>
        <StatusBar
          barStyle={theme.statusBar.barStyle}
          backgroundColor={theme.statusBar.backgroundColor}
        />

        <ScrollView>
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>
              Seleccione las pociones que posee para calcular los ataques más
              efectivos
            </Text>
          </View>

          {constants.POTIONS.map((potion, index) => (
            <View
              key={potion.id}
              style={[
                styles.optionOuterContainer,
                {
                  borderTopWidth: index === 0 ? 1 / 1 : undefined,
                  borderTopColor: index === 0 ? theme.colors.gray : undefined,
                },
              ]}
            >
              <View style={styles.optionInnerContainer}>
                <Image
                  style={[styles.potionImage, { tintColor: potion.rgb }]}
                  source={images.potion}
                />

                <Text
                  style={{
                    fontFamily: theme.fonts.primary.semibold,
                    color: potion.rgb,
                  }}
                >
                  {potion.label}
                </Text>
              </View>

              <View style={styles.counterContainer}>
                <CounterInput
                  id={potion.id}
                  buttonBorderColor={theme.colors.primary.light}
                  buttonBackgroundColor={'transparent'}
                  buttonLabelColor={theme.colors.primary.medium}
                  value={potions[potion.id]}
                  min={0}
                  onPressMinus={handleRemovePotion}
                  onPressMore={handleOnPressPlus}
                />
              </View>
            </View>
          ))}

          {!!constants.POTIONS.reduce(
            (accumulator, currentValue) =>
              accumulator + potions[currentValue.id],
            0,
          ) && (
            <TouchableOpacity
              testID="calculate-optimal-attacks-button"
              style={theme.buttons.primary.container}
              activeOpacity={0.7}
              onPress={handleOnPressCalculateOptimalAttacks}
            >
              <Text style={theme.buttons.primary.label}>
                Calcular ataques óptimos
              </Text>
            </TouchableOpacity>
          )}
        </ScrollView>
      </SafeAreaView>
    );
  },
);

export default PotionsSelectionScreen;
