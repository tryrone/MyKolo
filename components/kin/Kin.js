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

const logo = require('../../assets/img/KOlo-Small.png');
const styles = require('./kinStyle.js');

const Kin = (props) => {
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
              source={require('../../assets/img/back.png')}
              style={styles.back}
            />
          </TouchableOpacity>
          <Image source={logo} style={styles.logo} />
          <Text>Step 4 of 4</Text>
        </View>

        <View style={styles.welWrap}>
          <Text style={styles.bigText}>Next of Kin</Text>
          <Text style={styles.smalltext}>Please fill the details below.</Text>
        </View>

        <View style={styles.inputWrap}>
          <TextInput placeholder="Name" style={styles.textInput} />
        </View>

        <View style={styles.lockWrap}>
          <TextInput placeholder="Address" style={styles.textInput} />
        </View>

        <View style={styles.lockWrap}>
          <Image
            source={require('../../assets/img/nigeriA.png')}
            style={styles.nig}
          />
          <TextInput
            placeholder="+234 000 000 0000"
            style={styles.textInput2}
          />
          <Image
            source={require('../../assets/img/phone.png')}
            style={styles.phone}
          />
        </View>

        <View style={styles.lockWrap}>
          <TextInput placeholder="Relationship" style={styles.textInput} />
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

export default Kin;
