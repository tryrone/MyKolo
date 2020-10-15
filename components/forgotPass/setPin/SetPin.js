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
const styles = require('./setStyle.js');

const SetPin = (props) => {
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
          <Text style={styles.bigText}>Set PIN!</Text>
          <Text style={styles.smalltext}>
            Require Information to create account
          </Text>
        </View>

        <View style={styles.inputWrap}>
          <TextInput placeholder="PIN" style={styles.textInput2} />
          <Image
            source={require('../../../assets/img/hide.png')}
            style={styles.mail}
          />
        </View>
        <View style={styles.lockWrap}>
          <TextInput placeholder="Repeat PIN" style={styles.textInput2} />
          <Image
            source={require('../../../assets/img/hide.png')}
            style={styles.mail}
          />
        </View>

        <TouchableOpacity
          style={styles.submitWrap}
          onPress={() => {
            navigate('home');
          }}
        >
          <Text style={styles.subBtn}>Continue</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};
export default SetPin;
