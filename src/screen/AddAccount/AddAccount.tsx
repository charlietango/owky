import { Alert, SafeAreaView } from 'react-native';
import React, { useState } from 'react';

import { useDispatch } from '@hook/store';
import { add } from '@slice/account';
import TextInput from '@component/TextInput/TextInput';
import styled from 'styled-components';
import { PrimaryButton, SecondaryButton } from '@component/Button/Button';

const Container = styled(SafeAreaView)`
  background-color: #fff;
  flex: 1;
`;

// TODO: color picker, style button, website validation + fetch logo

export default function AddAccount(): JSX.Element {
  const [secret, setSecret] = useState('');
  const [username, setUsername] = useState('');
  const [issuer, setIssuer] = useState('');
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (!secret || !username || !issuer) {
      Alert.alert('Empty form', 'Please fill the details in.');
    }
    dispatch(add({ secret, username, issuer, color: '#393939' }));
  };

  return (
    <Container>
      <TextInput
        label={'Two-factor Secret'}
        value={secret}
        placeholder={'xxxxxxxx'}
        description={
          'If you don’t want to use your camera, we respect that. Type the secret code in the this field.'
        }
        onChange={(value: string) => setSecret(value)}
      />
      <TextInput
        label={'Username / email'}
        value={username}
        placeholder={'jane.doe@example.com'}
        description={
          'Add your username / email to be able to manage multiple accounts on the same website.'
        }
        onChange={(value: string) => setUsername(value)}
      />
      <TextInput
        label={'Service provider website'}
        value={issuer}
        placeholder={'www.example.com'}
        description={
          'We ask for it because we want to look up the logo so you can find your access token easily.'
        }
        onChange={(value: string) => setIssuer(value)}
      />
      <PrimaryButton title={'Add'} onPress={handleAdd} />
      <SecondaryButton title={'Fill by scanning QR'} onPress={() => console.log('Open camera')} />
    </Container>
  );
}
