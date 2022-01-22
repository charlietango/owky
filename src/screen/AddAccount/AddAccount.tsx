import { Alert, ScrollView } from 'react-native';
import React, { useState } from 'react';

import { useDispatch } from '@hook/store';
import { add } from '@slice/account';
import TextInput from '@component/TextInput/TextInput';
import styled from 'styled-components';
import { PrimaryButton, SecondaryButton } from '@component/Button/Button';
import ColorPicker from '@component/ColorPicker/ColorPicker';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { v4 as uuid } from 'uuid';

const Container = styled(ScrollView)`
  background-color: #fff;
  flex: 1;
`;

const domainRegex = /(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9]/;

export default function AddAccount(): JSX.Element {
  const [secret, setSecret] = useState('');
  const [username, setUsername] = useState('');
  const [issuer, setIssuer] = useState('');
  const [color, setColor] = useState('');
  const dispatch = useDispatch();

  const navigation: NativeStackNavigationProp<ParamListBase> = useNavigation();

  const handleAdd = () => {
    if (!secret || !username || !issuer) {
      Alert.alert('Empty form', 'Please fill the details in.');
      return;
    }

    if (!issuer.match(domainRegex)) {
      Alert.alert(
        'Invalid provider website',
        'The service provider website must be a valid domain. For example: foo.com',
      );
      return;
    }

    dispatch(
      add({
        uuid: uuid(),
        secret: secret.toUpperCase(),
        username: username.toLowerCase(),
        issuer: issuer.toLowerCase(),
        color,
      }),
    );
    navigation.pop();
  };

  return (
    <Container>
      <TextInput
        label={'Two-factor Secret'}
        value={secret}
        placeholder={'xxxxxxxx'}
        description={'Type the secret code in the this field.'}
        onChange={(value: string) => setSecret(value)}
      />
      <TextInput
        label={'Username / email'}
        value={username}
        placeholder={'jane.doe@example.com'}
        keyboardType={'email-address'}
        description={
          'Add your username/email to be able to manage multiple accounts on the same website.'
        }
        onChange={(value: string) => setUsername(value)}
      />
      <TextInput
        label={'Service provider website'}
        value={issuer}
        placeholder={'www.example.com'}
        description={'We ask for this because we want to display the logo.'}
        onChange={(value: string) => setIssuer(value)}
      />
      <ColorPicker onSelect={setColor} />
      <PrimaryButton title={'Add'} onPress={handleAdd} />
      <SecondaryButton
        title={'Scan QR'}
        onPress={() => navigation.navigate('QrScanner', { setSecret, setUsername, setIssuer })}
      />
    </Container>
  );
}
