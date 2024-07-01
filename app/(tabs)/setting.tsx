import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Colors } from '@/constants/Colors';
import { VerticalScrollView } from '@/components/VerticalScrollView';
import { LanguageToggleButton } from '@/components/LanguageToggleButton';
import { ContainerView } from '@/components/ContainerView';

export default function HomeScreen() {
  return (
    <ContainerView>
      <VerticalScrollView>
        <ThemedView style={styles.titleContainer}>
          <ThemedText type="title">welcome</ThemedText>
          <HelloWave />
        </ThemedView>
        <ThemedView style={styles.stepContainer}>
          <LanguageToggleButton title='test' />
        </ThemedView>
      </VerticalScrollView>
    </ContainerView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
