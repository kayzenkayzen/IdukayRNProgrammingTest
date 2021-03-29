import React from 'react';
import { View, Text, Image } from 'react-native';
import { theme } from '@src/theme';
import { CounterInput } from '@src/components';
import { images } from '@src/assets';
import { IPotionOptionItemProps } from './PotionOptionItem.d';
import { styles } from './PotionOptionItem.style';

const PotionOptionItem: React.FC<IPotionOptionItemProps> = React.memo(
  ({
    index,
    id,
    rgb,
    label,
    value,
    onPressRemovePotion,
    onPressAddPotion,
  }: IPotionOptionItemProps) => {
    return (
      <View
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
            style={[styles.potionImage, { tintColor: rgb }]}
            source={images.potion}
          />

          <Text
            testID="potion-option-item-label"
            style={{
              fontFamily: theme.fonts.primary.semibold,
              color: rgb,
            }}
          >
            {label}
          </Text>
        </View>

        <View style={styles.counterContainer}>
          <CounterInput
            id={id}
            buttonBorderColor={theme.colors.primary.light}
            buttonBackgroundColor={'transparent'}
            buttonLabelColor={theme.colors.primary.medium}
            value={value}
            min={0}
            onPressMinus={onPressRemovePotion}
            onPressMore={onPressAddPotion}
          />
        </View>
      </View>
    );
  },
);

export default PotionOptionItem;
