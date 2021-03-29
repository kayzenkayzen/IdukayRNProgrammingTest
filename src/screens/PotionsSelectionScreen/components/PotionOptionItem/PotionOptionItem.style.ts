import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
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
