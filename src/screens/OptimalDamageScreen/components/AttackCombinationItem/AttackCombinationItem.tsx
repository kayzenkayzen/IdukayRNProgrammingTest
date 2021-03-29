import React from 'react';
import { View, Text, Image } from 'react-native';
import { constants } from '@src/constants';
import { theme } from '@src/theme';
import { images } from '@src/assets';
import { IAttackCombinationItem } from './AttackCombinationItem.d';
import { styles } from './AttackCombinationItem.style';

const AttackCombinationItem: React.FC<IAttackCombinationItem> = React.memo(
  ({ attack, index }: IAttackCombinationItem) => {
    return (
      <View
        testID={`attack-${index}`}
        key={`attack-${index}`}
        style={[
          styles.attackOuterContainer,
          {
            borderTopWidth: index === 0 ? 1 / 1 : undefined,
            borderTopColor: index === 0 ? theme.colors.gray : undefined,
          },
        ]}
      >
        <View style={styles.attackIndexContainer}>
          <Text style={styles.attackIndexText}>{`${index + 1}`}</Text>
          <Text style={styles.attackIndexTextIcon}>o</Text>
        </View>

        {attack.map((potion, j) => (
          <Image
            testID={`attack-${index}-${potion}-${j}`}
            key={`attack-${index}-${potion}-${j}`}
            style={[
              styles.attackPotionImage,
              {
                tintColor: constants.POTIONS.filter(v => v.id === potion)[0]
                  .rgb,
              },
            ]}
            source={images.potion}
          />
        ))}
      </View>
    );
  },
);

export default AttackCombinationItem;
