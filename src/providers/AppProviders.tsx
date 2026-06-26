
import { PaperProvider } from 'react-native-paper';
import { ThemeProvider } from './ThemeProvider';

type Props = {
  children: React.ReactNode;
};

export function AppProviders({ children }: Props) {
  return (
      <PaperProvider>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </PaperProvider>
  );
}