import { Button, type ButtonProps, StyleSheet } from 'react-native';

import { useThemeColor } from '@/hooks/useThemeColor';

export type ThemedButtonProps = ButtonProps & {
  lightColor?: string;
  darkColor?: string;
};

export function ThemedButton({
  title,
  lightColor,
  darkColor,
  onPress,
  ...rest
}: ThemedButtonProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  return (
    <Button
      title={title}
      color={color}
      onPress={onPress}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
});
