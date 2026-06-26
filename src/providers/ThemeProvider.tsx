import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect } from 'react';
import { useThemeStore } from '../store/theme';

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const setTheme = useThemeStore((state) => state.setTheme);

  useEffect(() => {
    const initializeTheme = async () => {
      try {
        const savedTheme = await AsyncStorage.getItem('theme-storage');
        if (savedTheme) {
          const parsedTheme = JSON.parse(savedTheme);
          if (parsedTheme.state?.theme) {
            setTheme(parsedTheme.state.theme);
          }
        }
      } catch (error) {
        console.log('Error loading theme:', error);
      }
    };

    initializeTheme();
  }, [setTheme]);

  return <>{children}</>;
};
