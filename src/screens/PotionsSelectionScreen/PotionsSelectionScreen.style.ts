import { StyleSheet } from 'react-native';
import { theme } from '@src/theme';

export const styles = StyleSheet.create({
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
});
