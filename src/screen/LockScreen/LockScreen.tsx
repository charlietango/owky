import React from 'react';
import { Image, SafeAreaView } from 'react-native';

export default function LockScreen(): JSX.Element {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#343A40' }}>
      <Image style={{ width: '100%', height: '100%' }} source={require('@assets/splash.png')} />
    </SafeAreaView>
  );
}
