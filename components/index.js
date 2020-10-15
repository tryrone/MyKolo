import React from 'react';
import SignIn from './auth/signIn/SignIn';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Onboarding from './onboarding/Onboarding';
import SIgnTwo from './auth/signIn/signTwo/SIgnTwo';
import SignupOne from './auth/signUp/signupOne/SignupOne';
import SignupTwo from './auth/signUp/signupTwo/SignupTwo';
import SignupThree from './auth/signUp/signupThree/SignupThree';
import SignupFour from './auth/signUp/signupFour/SignupFour';
import SignupFive from './auth/signUp/signupFive/SignupFive';
import BasicInfo from './basicInfo/BasicInfo';
import EmerContact from './emerContact/EmerContact';
import Education from './education/Education';
import Kin from './kin/Kin';
import ForgotOne from './forgotPass/forgotPassOne/ForgotOne';
import PhoneNumber from './forgotPass/phoneNumber/PhoneNumber';
import Otp from './forgotPass/otp/Otp';
import SetPin from './forgotPass/setPin/SetPin';
import Home from './home/Home';

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Onboard"
          component={Onboarding}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SIgnTwo"
          component={SIgnTwo}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignupOne}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignTwo"
          component={SignupTwo}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignThree"
          component={SignupThree}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignFour"
          component={SignupFour}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignFive"
          component={SignupFive}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="basicInfo"
          component={BasicInfo}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="EmerCont"
          component={EmerContact}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Educa"
          component={Education}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Kin"
          component={Kin}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Forgot"
          component={ForgotOne}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="phoneEnter"
          component={PhoneNumber}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="otp"
          component={Otp}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="setPin"
          component={SetPin}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="home"
          component={Home}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default MyStack;
