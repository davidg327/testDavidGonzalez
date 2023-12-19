/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  useColorScheme,
} from 'react-native';

import {
  Colors
} from 'react-native/Libraries/NewAppScreen';
import RootStack from "./Navigation/RootStack";
import { NavigationContainer } from "@react-navigation/native";




function App(): JSX.Element {

  return (
    <RootStack />
  );
}

export default App;
