import React from 'react';
import styled from 'styled-components';
import { sample } from 'lodash';
import { LinearGradient } from 'expo-linear-gradient';
import { Text, View } from 'react-native';

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

const COLORS = ['#F75D94', '#7929FE', '#FF5E06', '#08D2C5', '#E51B09', '#0D0D0D'];

export default function Tile(props: { title: string }): JSX.Element {
  const color = sample(COLORS) as string;

  return (
    <Container>
      <Shape colors={[color + 'AA', color]} color={color}>
        <Text>{props.title}</Text>
      </Shape>
    </Container>
  );
}
