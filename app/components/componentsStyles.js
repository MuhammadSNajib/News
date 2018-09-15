import { Platform, StyleSheet, Dimensions } from 'react-native';

const SCREEN_HEIGHT = Dimensions.get('window').height
const SCREEN_WIDTH = Dimensions.get('window').width

export const styles = StyleSheet.create({
  containerHeaderMain: {
    height: 60,
    backgroundColor: "#673AB7",
    elevation: 4,
  },
  textTitleHeader: {
    color: '#FFFFFF',
    fontSize: 17,
    fontFamily: 'Roboto-Thin',
    fontWeight: '500',
    marginHorizontal: 20,
  },
  subStatusbar: {
    height: 24,
    backgroundColor: "#512DA8",
  }
});