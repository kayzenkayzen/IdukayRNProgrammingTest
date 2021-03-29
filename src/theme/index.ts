import { Platform } from 'react-native';

const colors = {
  primary: {
    light: '#c0c0c0',
    medium: '#2b2b2b',
    dark: '#000000',
  },
  white: '#fff',
  gray: '#ddd',
  transparent: 'transparent',
};

const fonts = {
  primary: {
    light: 'SourceSansPro-Light',
    regular: 'SourceSansPro-Regular',
    semibold: 'SourceSansPro-SemiBold',
    bold: 'SourceSansPro-Bold',
  },
};

export const theme: { [key: string]: any } = {
  colors,
  fonts,
  statusBar: {
    barStyle: Platform.OS === 'android' ? 'light-content' : 'dark-content',
    backgroundColor: '#000',
  },
  header: {
    headerStyle: {
      backgroundColor: '#f4f4f4',
      borderBottomWidth: 1,
      borderBottomColor: '#ddd',
    },
    headerTintColor: colors.primary.medium,
    headerTitleStyle: {
      fontFamily: fonts.primary.bold,
      color: colors.primary.medium,
      fontWeight: '600',
    },
  },
  container: {
    outer: {
      flex: 1,
      backgroundColor: '#fff',
    },
    inner: {
      padding: 20,
    },
  },
  buttons: {
    primary: {
      container: {
        marginTop: 30,
        marginHorizontal: 10,
        elevation: 8,
        backgroundColor: colors.primary.dark,
        borderWidth: 1,
        borderColor: colors.primary.light,
        borderRadius: 50,
        paddingVertical: 10,
        paddingHorizontal: 12,
        minHeight: 50,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
      },
      label: {
        fontFamily: fonts.primary.bold,
        fontSize: 16,
        color: colors.white,
        alignSelf: 'center',
        paddingHorizontal: 20,
      },
    },
  },
};
