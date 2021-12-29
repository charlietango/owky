import React from 'react';
import { Image, SafeAreaView } from 'react-native';

export default function LockScreen(): JSX.Element {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#240046' }}>
      <Image style={{ width: '100%', height: '100%' }} source={require('@assets/splash.png')} />
    </SafeAreaView>
  );
}
