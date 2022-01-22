import React from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components';

const Container = styled(View)`
  margin: 20px 0;
  border-left-color: ${({ theme }) => theme.textColorPrimary};
  border-left-width: 1.5px;
  padding-left: 8px;
`;

const Content = styled(Text)`
  color: ${({ theme }) => theme.textColorPrimary};
`;

type NoteProps = {
  content: string;
};

export default function Message(props: NoteProps): JSX.Element {
  return (
    <Container>
      <Content>{props.content}</Content>
    </Container>
  );
}
