import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components';
import Note from '@component/Note/Note';

const Container = styled(View)`
  flex: 1;
  flex-direction: column;
  width: 100%;
`;

export default function NoSearchResults(): JSX.Element {
  return (
    <Container>
      <Note content={'No result'} />
    </Container>
  );
}
