import { PropsWithChildren } from 'react';
import { SafeAreaView } from 'react-native';

export type ContainerViewProps = PropsWithChildren<{}>;

export function ContainerView({ children }: ContainerViewProps) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {children}
    </SafeAreaView>
  );
}
