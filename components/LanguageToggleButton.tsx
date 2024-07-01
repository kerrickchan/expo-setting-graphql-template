import { Button, StyleSheet, type ButtonProps } from 'react-native';

import { useThemeColor } from '@/hooks/useThemeColor';
import { useTranslation } from 'react-i18next';
import { ThemedView } from './ThemedView';

export type LanguageToggleButtonProps = ButtonProps & {
  lightColor?: string;
  darkColor?: string;
};

export function LanguageToggleButton({
  lightColor,
  darkColor,
}: LanguageToggleButtonProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <ThemedView>
      <Button title={`Change to ${t('en')}`} onPress={() => changeLanguage('en')} />
      <Button title={`Change to ${t('zh')}`} onPress={() => changeLanguage('zh')} />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
});

