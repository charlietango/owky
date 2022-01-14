import React from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components';
import * as Linking from 'expo-linking';

const Container = styled(View)`
  justify-content: center;
  padding: 16px;
  align-items: center;
`;

const Message = styled(Text)`
  color: #343a40;
  font-size: 12px;
`;

type NoteProps = {
  message: string;
  goToUrl: string;
};

export default function Attribution(props: NoteProps): JSX.Element {
  return (
    <Container>
      <Message onPress={() => Linking.openURL(props.goToUrl)}>{props.message}</Message>
    </Container>
  );
}
