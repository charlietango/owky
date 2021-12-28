import { Alert, Text, View } from 'react-native';
import React from 'react';
import styled from 'styled-components';
import * as LocalAuthentication from 'expo-local-authentication';

import Switch from '@component/Switch/Switch';
import { useDispatch, useSelector } from '@hook/store';
import { setLocalAuthenticationStatus } from '@slice/settings';
import { DangerButton } from '@component/Button/Button';
import { wipe } from '@slice/account';

const Container = styled(View)`
  background-color: #fff;
  flex: 1;
  padding: 10px 17px;
`;

const SectionTitle = styled(Text)`
  font-size: 13px;
  line-height: 14px;
  color: #007aff;
  margin: 8px 0;
`;

export default function Settings(): JSX.Element {
  const settings = useSelector((state) => state.settings);
  const dispatch = useDispatch();

  const handleLocalAuthenticationChange = (value: boolean) => {
    LocalAuthentication.authenticateAsync()
      .then((result) => {
        if (result.success) {
          dispatch(setLocalAuthenticationStatus(value));
        }
      })
      .catch((error) => console.error(error));
  };

  const handleDataWipe = () => {
    Alert.alert(
      'Wipe all Data',
      'Be aware! Your data exists only on your device. We do not create copies of your data. This operation can not be undone.',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        { text: 'Delete', style: 'destructive', onPress: () => dispatch(wipe()) },
      ],
    );
  };

  return (
    <Container>
      <SectionTitle>Security & Privacy</SectionTitle>
      <Switch
        checked={settings.localAuthenticationStatus}
        label={'Enable Face ID / Touch Id'}
        onChange={handleLocalAuthenticationChange}
      />
      <SectionTitle>Data</SectionTitle>
      <DangerButton title={'Wipe all data'} onPress={handleDataWipe} />
    </Container>
  );
}
