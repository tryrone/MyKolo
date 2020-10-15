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
const styles = require('./basicStyle.js');

const BasicInfo = (props) => {
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
          <Text>Step 1 of 4</Text>
        </View>

        <View style={styles.welWrap}>
          <Text style={styles.bigText}>Basic Information</Text>
          <Text style={styles.smalltext}>Please fill the details below.</Text>
        </View>

        <View style={styles.inputWrap}>
          <TextInput placeholder="First name" style={styles.textInput} />
        </View>

        <View style={styles.lockWrap}>
          <TextInput placeholder="Last name" style={styles.textInput} />
        </View>

        <View style={styles.sexWrap}>
          <TouchableOpacity style={styles.sex}>
            <Image
              source={require('../../assets/img/male.png')}
              style={styles.male}
            />
            <Text style={styles.Textblack}>Male</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.sex}>
            <Image
              source={require('../../assets/img/female.png')}
              style={styles.female}
            />
            <Text style={styles.Textblack}>Female</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.statusWrap}>
          <View style={styles.statWrap}>
            <TextInput placeholder="Status" style={styles.textInputstat} />
          </View>
          <View style={styles.statWrap}>
            <TextInput placeholder="Age" style={styles.textInputstat} />
          </View>
        </View>

        <View style={styles.lockWrap}>
          <TextInput placeholder="Occupation" style={styles.textInput} />
        </View>
        <View style={styles.lockWrap}>
          <TextInput placeholder="Address" style={styles.textInput} />
        </View>
        <View style={styles.lockWrap}>
          <TextInput placeholder="Local government" style={styles.textInput} />
        </View>
        <View style={styles.lockWrap}>
          <TextInput placeholder="Input Address" style={styles.textInput} />
        </View>

        <TouchableOpacity
          style={styles.submitWrap}
          onPress={() => {
            navigate('EmerCont');
          }}
        >
          <Text style={styles.subBtn}>Continue</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default BasicInfo;
