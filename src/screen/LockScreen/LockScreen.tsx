import React from 'react';
import { Image, SafeAreaView } from 'react-native';
import styled from 'styled-components';

const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.textColorPrimary};
`;

export default function LockScreen(): JSX.Element {
  return (
    <Container>
      <Image style={{ width: '100%', height: '100%' }} source={require('@assets/splash.png')} />
    </Container>
  );
}
