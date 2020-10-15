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

  Textblack: {
    fontSize: 15,
    marginTop: hp(3),
    fontWeight: '300',
    color: 'black',
    marginLeft: wp(6),
    fontWeight: '400',
  },

  back: {
    height: 30,
    width: 30,
  },
  dot: {
    alignSelf: 'center',
    height: 20,
    width: 135,
    marginTop: hp(6),
  },
  imageWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: wp(70),
    marginTop: hp(10),
    alignSelf: 'center',
  },

  profile: {
    height: 100,
    width: 100,
  },

  upText: {
    fontSize: 25,
    fontWeight: 'normal',
    width: wp(36),
  },
});
