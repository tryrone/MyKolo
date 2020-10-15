import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
  SafeAreaView,
  TextInput,
  Pressable,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const logo = require('../../../../assets/img/KOlo-Small.png');
const styles = require('./signStyle.js');

const SIgnTwo = (props) => {
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
          <Text>Skip Here</Text>
        </View>

        <View style={styles.welWrap}>
          <Text style={styles.bigText}>Save With MyKolo</Text>
          <Text style={styles.smalltext}>Please sign in to continue app</Text>
        </View>

        <View style={styles.inputWrap}>
          <TextInput placeholder="Email address" style={styles.textInput} />

          <Image
            source={require('../../../../assets/img/mail.png')}
            style={styles.mail}
          />
        </View>

        <View style={styles.lockWrap}>
          <TextInput
            placeholder="Password"
            style={styles.textInput}
            secureTextEntry={true}
          />

          <Image
            source={require('../../../../assets/img/lock.png')}
            style={styles.lock}
          />
        </View>

        <TouchableOpacity
          onPress={() => {
            navigate('Forgot');
          }}
        >
          <Text style={styles.forgot}>Forgot Password? </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.submitWrap}
          onPress={() => {
            navigate('home');
          }}
        >
          <Text style={styles.subBtn}>Sign in Account</Text>
        </TouchableOpacity>

        <Text style={styles.Textblack}>Don't have an Account?</Text>
        <TouchableOpacity
          onPress={() => {
            navigate('SignUp');
          }}
        >
          <Text style={styles.Textred}>REGISTER {'>'} </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SIgnTwo;
