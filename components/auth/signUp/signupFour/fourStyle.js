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
    width: wp(55),
    marginTop: hp(10),
    alignSelf: 'center',
  },

  man: {
    height: 90,
    width: 90,
  },
  green: {
    borderWidth: 5,
    borderRadius: 10,
    borderColor: '#66ff00',
    padding: 5,
  },
  woman: {
    height: 90,
    width: 90,
  },
});
