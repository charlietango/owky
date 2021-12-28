import React from 'react';
import { Pressable, Text } from 'react-native';
import styled from 'styled-components';

const BasePressableArea = styled(Pressable)`
  height: 50px;
  margin: 16px 16px 0 16px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BaseButtonLabel = styled(Text)`
  font-size: 17px;
  line-height: 20px;
`;

type ButtonProps = {
  title: string;
  onPress: () => void;
};

const PrimaryButtonLabel = styled(BaseButtonLabel)`
  color: #ffffff;
`;

export function PrimaryButton({ title, onPress }: ButtonProps): JSX.Element {
  return (
    <BasePressableArea
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? '#0167D6' : '#007aff',
        },
      ]}
      onPress={onPress}
    >
      <PrimaryButtonLabel>{title}</PrimaryButtonLabel>
    </BasePressableArea>
  );
}

const SecondaryButtonLabel = styled(BaseButtonLabel)`
  color: #007aff;
`;

export function SecondaryButton({ title, onPress }: ButtonProps): JSX.Element {
  return (
    <BasePressableArea
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? '#fafafa' : '#ffffff',
        },
      ]}
      onPress={onPress}
    >
      <SecondaryButtonLabel>{title}</SecondaryButtonLabel>
    </BasePressableArea>
  );
}

const DangerPressableArea = styled(Pressable)`
  height: 50px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  border-bottom-width: 0.3px;
  border-bottom-color: #c8c7cc;
`;

const DangerButtonLabel = styled(BaseButtonLabel)`
  color: #ff3b30;
`;

export function DangerButton({ title, onPress }: ButtonProps): JSX.Element {
  return (
    <DangerPressableArea
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? '#fafafa' : '#ffffff',
        },
      ]}
      onPress={onPress}
    >
      <DangerButtonLabel>{title}</DangerButtonLabel>
    </DangerPressableArea>
  );
}
