import React, { useCallback } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { ICounterInput } from './CounterInput.d';
import { styles } from './CounterInput.style';

const CounterInput: React.FC<ICounterInput> = React.memo(props => {
  const {
    id,
    buttonBackgroundColor,
    buttonLabelColor,
    buttonBorderColor,
    value,
    min,
    max,
    onPressMinus,
    onPressMore,
  } = props;

  const handleOnPressMinus = useCallback(() => {
    typeof min === 'undefined' || (typeof min !== 'undefined' && value > min)
      ? onPressMinus(id)
      : null;
  }, [onPressMinus, id, min, value]);

  const handleOnPressMore = useCallback(() => {
    typeof max === 'undefined' || (typeof max !== 'undefined' && value < max)
      ? onPressMore(id)
      : null;
  }, [onPressMore, id, max, value]);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        testID="minus-button"
        style={[
          styles.button,
          styles.leftButton,
          {
            backgroundColor: buttonBackgroundColor,
            borderColor: buttonBorderColor,
          },
        ]}
        activeOpacity={1}
        onPress={handleOnPressMinus}
      >
        <Text
          style={[
            styles.buttonLabel,
            {
              color:
                typeof min === 'undefined' ||
                (typeof min !== 'undefined' && value > min)
                  ? buttonLabelColor
                  : buttonLabelColor + '30',
            },
          ]}
        >
          -
        </Text>
      </TouchableOpacity>

      <View
        style={[
          styles.value,
          {
            borderColor: buttonBorderColor,
          },
        ]}
      >
        <Text testID="value-label" style={[styles.valueLabel]}>
          {value}
        </Text>
      </View>

      <TouchableOpacity
        testID="more-button"
        style={[
          styles.button,
          styles.rightButton,
          {
            backgroundColor:
              typeof max === 'undefined' ||
              (typeof max !== 'undefined' && value < max)
                ? buttonBackgroundColor
                : buttonBackgroundColor + '40',
            borderColor:
              typeof max === 'undefined' ||
              (typeof max !== 'undefined' && value < max)
                ? buttonBorderColor
                : buttonBackgroundColor + '40',
          },
        ]}
        activeOpacity={0.8}
        onPress={handleOnPressMore}
      >
        <Text style={[styles.buttonLabel, { color: buttonLabelColor }]}>+</Text>
      </TouchableOpacity>
    </View>
  );
});

CounterInput.defaultProps = {
  buttonBackgroundColor: 'transparent',
  buttonBorderColor: '#000000',
  buttonLabelColor: '#000000',
};

export default CounterInput;
