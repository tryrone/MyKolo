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
  logo: {
    height: 70,
    width: 70,
  },
  welWrap: {
    width: wp(90),
    alignSelf: 'center',
  },
  bigText: {
    fontSize: 30,
    fontWeight: 'bold',
    fontStyle: 'normal',
  },
  smalltext: {
    fontSize: 15,
    marginTop: 17,
    fontWeight: '300',
  },
  inputWrap: {
    borderWidth: 1,
    borderColor: '#E8E8E8',
    height: 60,
    padding: 10,
    width: wp(90),
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'center',
    borderRadius: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: hp(10),
  },
  lockWrap: {
    borderWidth: 1,
    borderColor: '#E8E8E8',
    height: 60,
    padding: 10,
    width: wp(90),
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'center',
    borderRadius: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: hp(2),
  },
  textInput: {
    width: wp(60),
    height: 50,
    alignSelf: 'center',
    fontSize: 17,
  },
  submitWrap: {
    height: 60,
    width: wp(90),
    backgroundColor: 'black',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp(8),
    alignSelf: 'center',
  },
  subBtn: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold',
  },
  Textred: {
    fontSize: 15,
    marginTop: hp(1),
    fontWeight: '300',
    color: 'red',
    marginLeft: wp(6),
    fontWeight: '400',
  },
  forgot: {
    fontSize: 15,
    marginTop: hp(2),
    fontWeight: '300',
    textAlign: 'right',
    color: 'red',
    paddingRight: wp(6),
    marginLeft: wp(6),
    fontWeight: '400',
  },
  Textblack: {
    fontSize: 15,
    marginTop: hp(3),
    fontWeight: '300',
    color: 'black',
    marginLeft: wp(6),
    fontWeight: '400',
  },
  nig: {
    width: 30,
    height: 30,
  },
  mail: {
    width: 30,
    height: 20,
  },
  lock: {
    width: 30,
    height: 30,
  },
  back: {
    height: 30,
    width: 30,
  },
});
