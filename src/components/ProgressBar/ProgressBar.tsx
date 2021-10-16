import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components';

const Progress = styled(View)<{ width: number }>`
  height: 7px;
  background-color: #ffffff77;
  width: ${(props) => props.width}%;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10;
`;

export default function ProgressBar(props: { percentage: number }): JSX.Element {
  return <Progress width={props.percentage} />;
}
