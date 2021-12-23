import { Alert, SafeAreaView } from 'react-native';
import React, { useState } from 'react';

import { useDispatch } from '@hook/store';
import { add } from '@slice/account';
import TextInput from '@component/TextInput/TextInput';
import styled from 'styled-components';
import { PrimaryButton, SecondaryButton } from '@component/Button/Button';
import ColorPicker from '@component/ColorPicker/ColorPicker';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ParamListBase, useNavigation } from '@react-navigation/native';

const Container = styled(SafeAreaView)`
  background-color: #fff;
  flex: 1;
`;

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
    dispatch(add({ secret, username, issuer, color }));
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
          'Add your username / email to be able to manage multiple accounts on the same website.'
        }
        onChange={(value: string) => setUsername(value)}
      />
      <TextInput
        label={'Service provider website'}
        value={issuer}
        placeholder={'www.example.com'}
        description={'Add the website so you can find your access token easily.'}
        onChange={(value: string) => setIssuer(value)}
      />
      <ColorPicker onSelect={setColor} />
      <PrimaryButton title={'Add'} onPress={handleAdd} />
      <SecondaryButton
        title={'Fill by scanning QR'}
        onPress={() =>
          Alert.alert(
            'Coming soon!',
            'This functionality is work in progress. Till it gets released please fill in the details by hand.',
          )
        }
      />
    </Container>
  );
}
