import { View, StyleSheet, Linking } from 'react-native';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { BarCodeEvent, BarCodeScanner } from 'expo-barcode-scanner';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as Haptics from 'expo-haptics';
import url from 'url';
import Note from '@component/Note/Note';
import { SecondaryButton } from '@component/Button/Button';

const Container = styled(View)`
  background-color: #fff;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export default function QrScanner(): JSX.Element {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const navigation = useNavigation();

  const route = useRoute();

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = (event: BarCodeEvent) => {
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);

    const parsedUrl = url.parse(event.data, true);
    // @ts-ignore
    route.params?.setSecret(parsedUrl.query.secret);
    // @ts-ignore
    route.params?.setUsername(parsedUrl.pathname?.split(':')[1] || '');
    // @ts-ignore
    route.params?.setIssuer(parsedUrl.query.issuer);

    navigation.goBack();
  };

  if (hasPermission === null) {
    return (
      <Container>
        <Note content={'Requesting camera permissions'} />
      </Container>
    );
  }

  if (!hasPermission) {
    return (
      <Container>
        <Note content={'Owky does not have permissions to use your camera.'}>
          <SecondaryButton
            title={'Go to Settings'}
            onPress={() => {
              Linking.openURL('app-settings:');
            }}
          />
        </Note>
      </Container>
    );
  }

  return (
    <Container>
      <BarCodeScanner
        onBarCodeScanned={handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
    </Container>
  );
}
