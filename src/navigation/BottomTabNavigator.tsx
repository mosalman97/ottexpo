import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Image, View } from 'react-native';

import HomeStackNavigator from './HomeStackNavigator';

import { ProfileScreen } from '@/screens/profile';
import { colors, images } from '@/theme';
import { BottomTabParamList } from './types';

const Tab = createBottomTabNavigator<BottomTabParamList>();

const TabIcon = ({
  focused = false,
  icon = null as any,
}) => {
  return (
    <View style={{
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
    }}>
      {
        !icon ? null :
          <Image
            source={icon}
            style={[{
              resizeMode: 'contain',
              width: 24,
              height: 24,
              tintColor: focused ? colors.pink : colors.white
            }]} />
      }
    </View>
  )
}

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName='Home'
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {backgroundColor:colors.bg1, height: 70
        },
        tabBarIconStyle:{
          justifyContent: 'center',
          alignItems: 'center',
        },       
        tabBarItemStyle: {
          height: 60,
         
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackNavigator}
        options={({ navigation }) => ({
          tabBarIcon: ({ focused }) =>
            <TabIcon focused={focused} icon={images.icon_tv} />
        })}
      />
       <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={({ navigation }) => ({
          tabBarIcon: ({ focused }) =>
            <TabIcon focused={focused} icon={images.icon_profile} />
        })}
      />
    </Tab.Navigator>
  );
}