import { StyleSheet } from 'react-native';
import { theme } from '@src/theme';

export const styles = StyleSheet.create({
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
