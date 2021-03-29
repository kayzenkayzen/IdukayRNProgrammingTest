import React, { useCallback, useEffect } from 'react';
import {
  StatusBar,
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import { theme } from '@src/theme';
import { constants } from '@src/constants';
import { PotionOptionItem } from './components';
import { IPotionsSelectionScreenProps } from './PotionsSelectionScreen.d';
import { styles } from './PotionsSelectionScreen.style';

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

    const handleAddPotion = useCallback(
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
            <PotionOptionItem
              key={potion.id}
              index={index}
              id={potion.id}
              rgb={potion.rgb}
              label={potion.label}
              value={potions[potion.id]}
              onPressRemovePotion={handleRemovePotion}
              onPressAddPotion={handleAddPotion}
            />
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
