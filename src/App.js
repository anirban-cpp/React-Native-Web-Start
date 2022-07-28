import React from 'react';
import {View, Platform, Image, TouchableOpacity, Text} from 'react-native';
import {styles} from './styles';

const isNative = Platform.OS !== 'web';

const App = () => {
  return (
    <View style={styles.app}>
      <View style={styles.appLeft}>
        <View style={styles.appLeftTop}>
          <Image
            source="/assets/logo.png"
            accessibilityLabel="logo"
            resizeMode="contain"
            style={styles.logo}
          />
          <TouchableOpacity style={styles.BtnContainer} onPress={() => {}}>
            <Text style={styles.Btn}>Login</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.appLeftBottom}>
          <Text style={styles.title}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque finibus enim.
          </Text>
        </View>
      </View>
      <View style={styles.appRight}></View>
    </View>
  );
};

export default App;
