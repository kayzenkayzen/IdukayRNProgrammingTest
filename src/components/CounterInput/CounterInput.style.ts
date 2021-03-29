import { StyleSheet } from 'react-native';
import { theme } from '@src/theme';

export const styles = StyleSheet.create({
  container: { flexDirection: 'row', justifyContent: 'center', height: 40 },
  button: {
    width: 40,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 4,
  },
  buttonLabel: {
    fontFamily: theme.fonts.primary.bold,
    fontSize: 16,
  },
  leftButton: {
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 20,
  },
  rightButton: {
    borderBottomEndRadius: 20,
    borderTopEndRadius: 20,
  },
  value: {
    width: 60,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 4,
    marginHorizontal: 5,
  },
  valueLabel: {
    fontFamily: theme.fonts.primary.bold,
    fontSize: 16,
    color: '#000',
  },
});
