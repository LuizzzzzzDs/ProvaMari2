import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button, TextInput } from 'react-native-web';
import React, {useState} from 'react';
import * as React from 'react';

import Estoque from './Estoque';
import Navegar from './Navigate';

const RootStack = createNativeStackNavigator({
  screens: {
    Login: {
      screen: HomeScreen,
      options: {title: 'Welcome'},
    },
    Profile: {
      screen: ProfileScreen,
    },
  },
});

const Navigation = createStaticNavigation(RootStack);

export default function Navegar() {
  return <Navigation />;
}