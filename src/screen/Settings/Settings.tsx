import { Alert, Text, View } from 'react-native';
import React from 'react';
import styled from 'styled-components';
import * as LocalAuthentication from 'expo-local-authentication';

import Switch from '@component/Switch/Switch';
import { useDispatch, useSelector } from '@hook/store';
import { setLocalAuthenticationStatus } from '@slice/settings';
import { DangerButton, SettingsButton } from '@component/Button/Button';
import { wipe } from '@slice/account';
import Message from '@component/Message/Message';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ParamListBase, useNavigation } from '@react-navigation/native';

const Container = styled(View)`
  background-color: ${({ theme }) => theme.backgroundColor};
  flex: 1;
  padding: 10px 17px;
`;

const SectionTitle = styled(Text)`
  font-size: 12px;
  line-height: 14px;
  color: ${({ theme }) => theme.textColorPrimary};
  font-weight: 600;
  margin-top: 12px;
`;

export default function Settings(): JSX.Element {
  const settings = useSelector((state) => state.settings);
  const dispatch = useDispatch();
  const navigation: NativeStackNavigationProp<ParamListBase> = useNavigation();

  const handleLocalAuthenticationChange = (value: boolean) => {
    LocalAuthentication.authenticateAsync()
      .then((result) => {
        if (result.success) {
          dispatch(setLocalAuthenticationStatus(value));
        }
      })
      .catch((error) => console.error(error));
  };

  const handleDataWipe = async () => {
    await protectActionWithLocalAuthentication(wipeDataWithConfirmation);
  };

  const wipeDataWithConfirmation = () => {
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

  const handleExport = async () => {
    await protectActionWithLocalAuthentication(() => navigation.navigate('Export'));
  };

  const protectActionWithLocalAuthentication = async (action: () => void) => {
    if (!settings.localAuthenticationStatus) {
      Alert.alert(
        'Local authentication not active',
        'You need to activate Face ID / Touch ID to perform this operation',
      );
      return;
    }

    const result = await LocalAuthentication.authenticateAsync();
    if (result.success) {
      action();
    }
  };

  const message = `Thank you for using Owky. Really!

Owky is offered for free, with no hidden costs. The app is build by one person, as a side project. 

If you find issues or want to request a feature, please get in touch at catalin@charlietango.co.

Cheers!`;

  return (
    <Container>
      <SectionTitle>Security & Privacy</SectionTitle>
      <Switch
        checked={settings.localAuthenticationStatus}
        label={'Enable Face ID / Touch ID'}
        onChange={handleLocalAuthenticationChange}
      />
      <SectionTitle>Data</SectionTitle>
      <SettingsButton title={'Export your data'} onPress={handleExport} />
      <DangerButton title={'Wipe everything'} onPress={handleDataWipe} />
      <Message content={message} />
    </Container>
  );
}
