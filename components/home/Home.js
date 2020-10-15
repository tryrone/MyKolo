import React, { useState } from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = require('./homeStyle.js');

const Home = (props) => {
  const { goBack, navigate } = props.navigation;

  const [active, setActive] = useState(false);

  return (
    <SafeAreaView style={{ height: hp(100) }}>
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
          <Text style={styles.homeHead}>Home</Text>
          <Image
            source={require('../../assets/img/bar.png')}
            style={styles.bar}
          />
        </View>

        <Text style={styles.pay}>Your Payment</Text>
        <Text
          style={
            (styles.pay,
            {
              marginTop: 0,
              fontSize: 18,
              fontWeight: '600',
              fontStyle: 'normal',
              marginLeft: wp(8),
            })
          }
        >
          secured
        </Text>

        <Image
          source={require('../../assets/img/card.png')}
          style={styles.card}
        />

        <View style={styles.balanceWrap}>
          <Text style={styles.balText}>Balances</Text>

          <TouchableOpacity>
            <Text style={styles.addText}>+ Add Card</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.textBgRed}>N 213,239.34</Text>

        <View style={styles.incomeWrap}>
          <TouchableOpacity
            style={active ? styles.touch : null}
            onPress={() => {
              setActive(true);
            }}
          >
            <Text style={active ? styles.inText : styles.exText}>Income</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={!active ? styles.touch : null}
            onPress={() => {
              setActive(false);
            }}
          >
            <Text style={!active ? styles.inText : styles.exText}>Expense</Text>
          </TouchableOpacity>
        </View>

        <Image
          source={require('../../assets/img/graph.png')}
          style={styles.graph}
        />
      </ScrollView>
    </SafeAreaView>
  );
};
export default Home;
