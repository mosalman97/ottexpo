import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { DetailScreen, HomeScreen } from "@/screens/home";

import { HomeStackParamList } from './types';

const Stack = createNativeStackNavigator<HomeStackParamList>();

export default function HomeStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}
    >
      <Stack.Screen
        name="HomeStack"
        component={HomeScreen}
      />
        <Stack.Screen
        name="DetailStack"
        component={DetailScreen}
      />
    </Stack.Navigator>
  );
}