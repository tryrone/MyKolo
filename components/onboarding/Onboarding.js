import React, { useEffect } from 'react';
import { Text, View, Image } from 'react-native';

const styles = require('./OnboardStyle');

const Onboarding = (props) => {
  const { navigate } = props.navigation;

  useEffect(() => {
    setTimeout(() => {
      navigate('SignIn');
    }, 2000);
  }, []);

  return (
    <View style={styles.backWrap}>
      <Image
        source={require('../../assets/img/background.png')}
        style={styles.back}
      />
    </View>
  );
};

export default Onboarding;
