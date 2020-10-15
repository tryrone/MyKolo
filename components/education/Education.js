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
const styles = require('./eduStyle.js');

const Education = (props) => {
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
          <Text>Step 3 of 4</Text>
        </View>

        <View style={styles.welWrap}>
          <Text style={styles.bigText}>Education</Text>
          <Text style={styles.smalltext}>Please fill the details below.</Text>
        </View>

        <View style={styles.inputWrap}>
          <TextInput placeholder="Bacheclors Degree" style={styles.textInput} />
        </View>

        <View style={styles.lockWrap}>
          <TextInput placeholder="Masters Degree" style={styles.textInput} />
        </View>

        <View style={styles.lockWrap}>
          <TextInput placeholder="Ph.D." style={styles.textInput} />
        </View>

        <View style={styles.lockWrap}>
          <TextInput placeholder="Others" style={styles.textInput} />
        </View>

        <TouchableOpacity
          style={styles.submitWrap}
          onPress={() => {
            navigate('Kin');
          }}
        >
          <Text style={styles.subBtn}>Continue</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Education;
