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
const styles = require('./forStyle.js');

const ForgotOne = (props) => {
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
          <TouchableOpacity
            onPress={() => {
              goBack();
            }}
          >
            <Text>Cancel</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.welWrap}>
          <Text style={styles.bigText}>Forgot Password</Text>
          <Text style={styles.smalltext}>Please fill the detail below.</Text>
        </View>

        <View style={styles.inputWrap}>
          <TextInput placeholder="Email Address" style={styles.textInput2} />
          <Image
            source={require('../../../assets/img/mail.png')}
            style={styles.mail}
          />
        </View>

        <TouchableOpacity
          style={styles.submitWrap}
          onPress={() => {
            navigate('phoneEnter');
          }}
        >
          <Text style={styles.subBtn}>Send Link</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};
export default ForgotOne;
