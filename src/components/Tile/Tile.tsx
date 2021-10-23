import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { LinearGradient } from 'expo-linear-gradient';
import { Text, View } from 'react-native';

import { generateTokenFromUri } from '@services/authenticator';
import ProgressBar from '@components/ProgressBar/ProgressBar';

const Container = styled(View)`
  width: 100%;
  padding: 10px 17px 0 17px;
`;

const Shape = styled(LinearGradient)<{ color: string }>`
  border-radius: 17px;
  padding: 15px;
  width: 100%;
  height: 120px;
`;

interface TileProps {
  uri: string;
  color: string;
}

export default function Tile({ uri, color }: TileProps): JSX.Element {
  const [token, setToken] = useState(generateTokenFromUri(uri));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setToken(generateTokenFromUri(uri));
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <Container>
      <Shape colors={[color + 'AA', color]} color={color}>
        <Text>{token.token}</Text>
        <Text>{token.issuer}</Text>
        <Text>{token.account}</Text>
        <Text>{token.timeRemaining}</Text>
        <ProgressBar timeRemaining={token.timeRemaining} />
      </Shape>
    </Container>
  );
}
