import { AppProviders } from "@/providers/AppProviders";
import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { RootNavigator } from '@/navigation';

import "./global.css";

export default function App() {

  return (
    <AppProviders>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </AppProviders>
  );
}