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
  contentScroll: {
    paddingVertical: 7.5,
    marginHorizontal: 7.5,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  windowCardItem: {
    marginHorizontal: 7.5,
    marginVertical: 7.5,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#FEF5F6',
    shadowColor: 'rgba(0,0,0,0.5)',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowRadius: 3,
    shadowOpacity: 0.5,
    elevation: 5,
  },
  listItem: {
    margin: 15
  },
  titleList: {
    fontSize: 20,
    fontWeight: '500',
    color: 'rgba(0, 0, 0, 0.7)'
  },
  subTitleList: {
    fontSize: 15,
    color: 'rgba(0, 0, 0, 0.7)',
    marginTop: 5,
    textAlign: "justify"
  },
  activityIndicator: { 
    flex: 1,
    alignItems: 'center', 
    justifyContent: 'center', 
  },
});