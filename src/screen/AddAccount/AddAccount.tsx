import { Button, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import styled from 'styled-components';

import { useDispatch } from '@hook/store';
import { add } from '@slice/account';

const TokenInput = styled(TextInput)`
  width: 90%;
  height: 30px;
  border: 1px solid black;
  border-radius: 5px;
  padding: 5px;
  margin: 5px;
`;

export default function AddAccount(): JSX.Element {
  const [token, setToken] = useState('');
  const dispatch = useDispatch();

  return (
    <View>
      <Text>AddToken Screen</Text>
      <TokenInput onChangeText={setToken} />
      <Button title={'Add'} onPress={() => dispatch(add(token))} />
    </View>
  );
}
