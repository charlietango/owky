import React, { useEffect, useRef } from 'react';
import { Animated, Easing } from 'react-native';
import styled from 'styled-components';

const Progress = styled(Animated.View)`
  height: 7px;
  background-color: ${({ theme }) => theme.transparent30};
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10;
`;

type ProgressBarProps = {
  timeRemaining: number;
};

export default function ProgressBar({ timeRemaining }: ProgressBarProps): JSX.Element {
  const animated = useRef(new Animated.Value(30 - timeRemaining)).current;
  const tick = (toValue: number) => {
    Animated.timing(animated, {
      toValue,
      duration: 1000,
      useNativeDriver: false,
      easing: Easing.linear,
    }).start();
  };

  const width = animated.interpolate({
    inputRange: [0, 30],
    outputRange: ['0%', '110%'],
    extrapolate: 'extend',
  });

  useEffect(() => {
    tick(timeRemaining);
  }, [timeRemaining]);

  return <Progress style={{ width }} />;
}
