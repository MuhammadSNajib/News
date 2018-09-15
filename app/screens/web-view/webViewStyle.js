import { Platform, StyleSheet, Dimensions } from 'react-native';

const SCREEN_HEIGHT = Dimensions.get('window').height
const SCREEN_WIDTH = Dimensions.get('window').width

const SCREEN_WIDTH_MARGIN = SCREEN_WIDTH - 30

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  row: {
    flexDirection: 'row'
  },
  column: {
    flexDirection: 'column',
  },
  formCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  progressBar: { 
    marginTop: 18 
  },
  navigationWeb: {
    height: 50,
    borderTopWidth: 1,
    borderTopColor: '#b3b3b3',
    backgroundColor: '#FFFFFF',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 20,
  }
});