import { useThemeStore } from '../store/theme';

export const useTheme = () => {
  const theme = useThemeStore((state) => state.currentTheme);
  const isDark = useThemeStore((state) => state.isDark);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);
  const setTheme = useThemeStore((state) => state.setTheme);

  return {
    colors: theme,
    isDark,
    toggleTheme,
    setTheme,
  };
};
