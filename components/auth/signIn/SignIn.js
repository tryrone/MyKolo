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

const logo = require('../../../assets/img/KOlo-Small.png');
const styles = require('./SignInStyle');

const SignIn = (props) => {
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
          <Text>Skip Here</Text>
        </View>

        <View style={styles.welWrap}>
          <Text style={styles.bigText}>Welcome back!</Text>
          <Text style={styles.smalltext}>
            Enter your registered phone number to log in
          </Text>
        </View>

        <View style={styles.inputWrap}>
          <Image
            source={require('../../../assets/img/nigeriA.png')}
            style={styles.nig}
          />
          <TextInput
            placeholder="+234 000 000 000"
            keyboardType="number-pad"
            style={styles.textInput}
          />

          <Image
            source={require('../../../assets/img/phone.png')}
            style={styles.phone}
          />
        </View>

        <Pressable
          style={styles.submitWrap}
          onPress={() => {
            navigate('SIgnTwo');
          }}
        >
          <Text style={styles.subBtn}>Sign in</Text>
        </Pressable>

        <Text style={styles.Textred}>Help?</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
