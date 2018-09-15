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
    alignItems: 'center',
  },
  contentScroll: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  windowCardItem: {
    flexDirection: 'row',
    width: SCREEN_WIDTH,
    padding: 15,
    borderBottomWidth: 1,
    borderColor: '#dedede'
  },
  imgCard: {
    width: 100,
    height: 100,
  },
  textTitleListItem: {
    fontSize: 20,
    fontWeight: '500',
    color: 'rgba(0, 0, 0, 0.7)'
  },
  textSubTitleListItem: {
    fontSize: 15,
    color: 'rgba(0, 0, 0, 0.7)',
    marginTop: 5,
  },
  textInfoListItem: {
    fontSize: 13,
    color: 'rgba(107, 107, 107, 1)',
    marginTop: 5,
  },
  textInfoWeight: {
    fontWeight: '500',
    fontSize: 13,
    color: '#474747',
    marginTop: 5,
  },
  viewTimer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10
  },
  iconTimer: {
    fontSize: 15,
    marginRight: 7
  },
  backDropModal: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)'
  },
  modalBox: {
    // marginTop: 30,
    zIndex: 100,
    elevation: 3,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#FFFFFF'
  },
  contentSearch: {
    backgroundColor: '#FFFFFF',
    borderTopColor: 'transparent',
    borderTopWidth: 0,
  },
  activityIndicator: { 
    flex: 1,
    alignItems: 'center', 
    justifyContent: 'center', 
  },
});