import React, { useState } from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const logo = require('../../../../assets/img/KOlo-Small.png');
const styles = require('./fiveStyle.js');

const SignupFive = (props) => {
  const { goBack, navigate } = props.navigation;
  return (
    <SafeAreaView style={{ backgroundColor: 'white', height: hp(100) }}>
      <ScrollView>
        <View style={styles.headerRow}>
          <TouchableOpacity
            onPress={() => {
              goBack();
            }}
          >
            <Image
              source={require('../../../../assets/img/back.png')}
              style={styles.back}
            />
          </TouchableOpacity>
          <Image source={logo} style={styles.logo} />
          <Text>{'  '}</Text>
        </View>

        <View style={styles.imageWrap}>
          <Image
            source={require('../../../../assets/img/proHead.png')}
            style={styles.profile}
          />
          <Text style={styles.upText}>Upload Profile Picture</Text>
        </View>

        <Image
          source={require('../../../../assets/img/fiveDot.png')}
          style={styles.dot}
        />

        <TouchableOpacity
          style={styles.submitWrap}
          onPress={() => {
            navigate('basicInfo');
          }}
        >
          <Text style={styles.subBtn}>Set up Account</Text>
        </TouchableOpacity>

        <Text style={styles.Textblack}>Already have an account?</Text>
        <TouchableOpacity
          onPress={() => {
            navigate('SignIn');
          }}
        >
          <Text style={styles.Textred}>LOGIN {'>'} </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignupFive;
