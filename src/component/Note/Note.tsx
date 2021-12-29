import React, { ReactNode } from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components';

const Container = styled(View)`
  background-color: #f5eefc;
  padding: 12px;
  border-radius: 6px;
`;

const Content = styled(Text)`
  color: #212f45;
`;

type NoteProps = {
  content: string;
  children?: ReactNode;
};

export default function Note(props: NoteProps): JSX.Element {
  return (
    <Container>
      <Content>{props.content}</Content>
      {props.children}
    </Container>
  );
}
