import React from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import OTPInputView from '@twotalltotems/react-native-otp-input';

const logo = require('../../../assets/img/KOlo-Small.png');
const styles = require('./otpStyle.js');

const Otp = (props) => {
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
              source={require('../../../assets/img/back.png')}
              style={styles.back}
            />
          </TouchableOpacity>
          <Image source={logo} style={styles.logo} />
          <Text>{'  '}</Text>
        </View>

        <View style={styles.welWrap}>
          <Text style={styles.bigText}>OTP Sent!</Text>
          <Text style={styles.smalltext}>
            Enter the 4-digit code sent to you at
          </Text>
          <Text style={(styles.smalltext, { marginTop: 0 })}>
            +234 804 993 2493. <Text style={styles.red}>Did you enter the</Text>
          </Text>
          <Text style={styles.red}>correct Number?</Text>
        </View>

        <View style={styles.textCont}>
          <OTPInputView
            style={{ width: '100%' }}
            pinCount={4}
            autoFocusOnLoad={false}
            secureTextEntry
            codeInputFieldStyle={styles.underlineStyleBase}
            codeInputHighlightStyle={styles.borderStyleHighLightedRed}
            onCodeFilled={(code) => {
              navigate('setPin');
            }}
          />
        </View>

        <TouchableOpacity
          style={styles.submitWrap}
          onPress={() => {
            //     navigate('Educa');
          }}
        >
          <Text style={styles.subBtn}>Resend OTP</Text>
        </TouchableOpacity>

        <Text style={styles.Textred}>I did't recieve code</Text>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Otp;
