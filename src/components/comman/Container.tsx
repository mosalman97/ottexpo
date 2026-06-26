import React, { ReactNode } from 'react';
import {
  Image,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';

import { useTheme } from '@/hooks/useTheme';
import { images } from '@/theme';


interface ContainerProps {
  children?: ReactNode;
  style?: StyleProp<ViewStyle>;
}

export const Container = ({
  children,
  style,
}: ContainerProps) => {
  const { colors } = useTheme();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    imageBg: {
      ...StyleSheet.absoluteFillObject,
      resizeMode: 'cover',
    },
  });

  return (
    <View style={[styles.container, style]}>
      <Image
        source={images.img_bg}
        style={styles.imageBg}
      />

      {children}
    </View>
  );
};
