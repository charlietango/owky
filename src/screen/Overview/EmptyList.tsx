import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components';
import { PrimaryButton } from '@component/Button/Button';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import Note from '@component/Note/Note';

const Container = styled(View)`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

export default function EmptyList(): JSX.Element {
  const navigation: NativeStackNavigationProp<ParamListBase> = useNavigation();

  return (
    <Container>
      <Note
        content={
          'It looks a bit empty here! Add some accounts and Owky will manage your Two-Factor codes. ⚡️'
        }
      />
      <PrimaryButton title={'New Account'} onPress={() => navigation.push('Add')} />
    </Container>
  );
}
