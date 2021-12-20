import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components';
import { SecondaryButton } from '@component/Button/Button';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ParamListBase, useNavigation } from '@react-navigation/native';

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
      <SecondaryButton title={'Add Account'} onPress={() => navigation.push('Add')} />
    </Container>
  );
}
