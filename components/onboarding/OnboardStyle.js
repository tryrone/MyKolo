'use strict';

import { StyleSheet, Dimensions } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const screenHeight = Math.round(Dimensions.get('window').height);
// const screenWidth = Math.round(Dimensions.get('window').width);
module.exports = StyleSheet.create({
  back: {
    height: hp(100),
    width: wp(110),
  },
  backWrap: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
