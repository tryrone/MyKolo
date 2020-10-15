'use strict';

import { StyleSheet, Dimensions } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const screenHeight = Math.round(Dimensions.get('window').height);
// const screenWidth = Math.round(Dimensions.get('window').width);
module.exports = StyleSheet.create({
  headerRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
  },
  back: {
    height: 30,
    width: 30,
  },
  bar: {
    height: 30,
    width: 30,
  },
  homeHead: {
    fontSize: 18,
    fontWeight: '500',
    fontStyle: 'normal',
  },
  pay: {
    fontSize: 17,
    fontWeight: '600',
    fontStyle: 'normal',
    marginLeft: wp(8),
    marginTop: wp(3),
  },
  card: {
    width: wp(90),
    height: 230,
    alignSelf: 'center',
    marginTop: hp(2),
  },
  balanceWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: wp(85),
    alignSelf: 'center',
    marginVertical: 20,
  },
  balText: {
    fontSize: 17,
    fontWeight: 'normal',
    fontStyle: 'normal',
  },
  addText: {
    color: 'red',
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontSize: 15,
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: '#DCDCDC',
    borderRadius: 10,
  },
  textBgRed: {
    color: 'red',
    fontSize: 25,
    fontWeight: '600',
    textAlign: 'left',
    marginLeft: wp(8),
  },
  incomeWrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
    width: wp(44),
    marginVertical: 20,
  },
  inText: {
    color: 'white',
    fontWeight: '600',
    fontStyle: 'normal',
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
  },
  exText: {
    color: '#989898',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '400',
  },
  touch: { backgroundColor: 'black', borderRadius: 10 },
  graph: {
    width: wp(100),
    height: hp(32),
    marginTop: hp(1),
  },
});
