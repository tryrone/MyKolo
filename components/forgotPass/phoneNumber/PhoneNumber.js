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

const logo = require('../../../assets/img/KOlo-Small.png');
const styles = require('./phoneStyle.js');

const PhoneNumber = (props) => {
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
          <Text style={styles.bigText}>Enter Phone Number</Text>
          <Text style={styles.smalltext}>Please Add your phone number</Text>
          <Text style={styles.smalltext}>to verify OTP</Text>
        </View>

        <View style={styles.inputWrap}>
          <Image
            source={require('../../../assets/img/nigeriA.png')}
            style={styles.nig}
          />
          <TextInput
            placeholder="+234 000 000 0000"
            style={styles.textInput2}
          />
          <Image
            source={require('../../../assets/img/phone.png')}
            style={styles.phone}
          />
        </View>

        <TouchableOpacity
          style={styles.submitWrap}
          onPress={() => {
            navigate('otp');
          }}
        >
          <Text style={styles.subBtn}>Verify Phone Number</Text>
        </TouchableOpacity>

        <Text style={styles.Textred}>I did't recieve code</Text>
      </ScrollView>
    </SafeAreaView>
  );
};
export default PhoneNumber;
