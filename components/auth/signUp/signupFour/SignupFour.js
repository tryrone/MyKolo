import React, { useState } from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const logo = require('../../../../assets/img/KOlo-Small.png');
const styles = require('./fourStyle.js');

const SignupFour = (props) => {
  const [active, setActive] = useState(false);

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

        <View style={styles.imageWrap}>
          <TouchableOpacity
            style={active ? styles.green : null}
            onPress={() => {
              setActive(true);
            }}
          >
            <Image
              source={require('../../../../assets/img/man.png')}
              style={styles.man}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              setActive(false);
            }}
            style={active ? null : styles.green}
          >
            <Image
              source={require('../../../../assets/img/woman.png')}
              style={styles.woman}
            />
          </TouchableOpacity>
        </View>

        <Image
          source={require('../../../../assets/img/fourDot.png')}
          style={styles.dot}
        />

        <TouchableOpacity
          style={styles.submitWrap}
          onPress={() => {
            navigate('SignFive');
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
export default SignupFour;
