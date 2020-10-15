import React from 'react';
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
const styles = require('./threeStyle.js');

const SignupThree = (props) => {
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
          <Text style={styles.bigText}>Set Password</Text>
          <Text style={styles.smalltext}>
            Require information to create account
          </Text>
        </View>

        <View style={styles.inputWrap}>
          <TextInput
            placeholder="Password"
            style={styles.textInput}
            secureTextEntry={true}
          />
          <Image
            source={require('../../../../assets/img/hide.png')}
            style={styles.mail}
          />
        </View>

        <View style={styles.lockWrap}>
          <TextInput
            placeholder="Repeat Password"
            secureTextEntry={true}
            style={styles.textInput}
          />
          <Image
            source={require('../../../../assets/img/hide.png')}
            style={styles.mail}
          />
        </View>

        <Image
          source={require('../../../../assets/img/threeDot.png')}
          style={styles.dot}
        />

        <TouchableOpacity
          style={styles.submitWrap}
          onPress={() => {
            navigate('SignFour');
          }}
        >
          <Text style={styles.subBtn}>Continue</Text>
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

export default SignupThree;
