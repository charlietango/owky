import React from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components';

const Container = styled(View)`
  margin: 16px;
`;

const Content = styled(Text)`
  color: #343a40;
  text-align: center;
`;

type NoteProps = {
  content: string;
};

export default function Note(props: NoteProps): JSX.Element {
  return (
    <Container>
      <Content>{props.content}</Content>
    </Container>
  );
}
