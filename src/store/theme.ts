import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { darkTheme, lightTheme } from '../theme';

export type ThemeType = 'light' | 'dark';

interface ThemeState {
  theme: ThemeType;
  isDark: boolean;
  currentTheme: typeof darkTheme;
  toggleTheme: () => void;
  setTheme: (theme: ThemeType) => void;
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set, get) => ({
      theme: 'dark', // Default to dark mode
      isDark: true,
      currentTheme: darkTheme,

      toggleTheme: () => {
        const currentTheme = get().theme;
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        set({
          theme: newTheme,
          isDark: newTheme === 'dark',
          currentTheme: newTheme === 'dark' ? darkTheme : lightTheme,
        });
      },

      setTheme: (theme: ThemeType) => {
        set({
          theme,
          isDark: theme === 'dark',
          currentTheme: theme === 'dark' ? darkTheme : lightTheme,
        });
      },
    }),
    {
      name: 'theme-storage',
      storage: createJSONStorage(() => AsyncStorage),
      partialize: (state) => ({ theme: state.theme }), // Only persist theme selection
    }
  )
);
