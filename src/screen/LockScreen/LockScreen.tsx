import React from 'react';
import { Image, SafeAreaView } from 'react-native';
import styled from 'styled-components';

const Container = styled(SafeAreaView)`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.splashScreenBackgroundColor};
`;

export default function LockScreen(): JSX.Element {
  return (
    <Container>
      <Image style={{ width: '100%', height: '100%' }} source={require('@assets/splash.png')} />
    </Container>
  );
}
