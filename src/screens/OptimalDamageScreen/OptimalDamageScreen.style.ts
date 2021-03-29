import { StyleSheet } from 'react-native';
import { theme } from '@src/theme';

export const styles = StyleSheet.create({
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
});
