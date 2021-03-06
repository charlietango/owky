import React from 'react';
import { Pressable, Text } from 'react-native';
import styled, { useTheme } from 'styled-components';

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
  color: ${({ theme }) => theme.textColorAction};
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
  color: ${({ theme }) => theme.accentColor};
`;

export function SecondaryButton({ title, onPress }: ButtonProps): JSX.Element {
  return (
    <BasePressableArea
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? '#ffffff55' : '#ffffff00',
        },
      ]}
      onPress={onPress}
    >
      <SecondaryButtonLabel>{title}</SecondaryButtonLabel>
    </BasePressableArea>
  );
}

const SettingsPressableArea = styled(Pressable)`
  height: 50px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  border-bottom-width: 0.3px;
  border-bottom-color: #c8c7cc;
  background-color: ${({ theme }) => theme.transparent100};
`;

const DangerButtonLabel = styled(BaseButtonLabel)`
  color: ${({ theme }) => theme.dangerColor};
`;

const SettingsButtonLabel = styled(BaseButtonLabel)`
  color: ${({ theme }) => theme.accentColor};
`;


export function SettingsButton({ title, onPress }: ButtonProps): JSX.Element {
  const theme = useTheme();
  return (
    <SettingsPressableArea
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? theme.transparent10 : theme.transparent100,
        },
      ]}
      onPress={onPress}
    >
      <SettingsButtonLabel>{title}</SettingsButtonLabel>
    </SettingsPressableArea>
  );
}

export function DangerButton({ title, onPress }: ButtonProps): JSX.Element {
  const theme = useTheme();
  return (
    <SettingsPressableArea
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? theme.transparent10 : theme.transparent100,
        },
      ]}
      onPress={onPress}
    >
      <DangerButtonLabel>{title}</DangerButtonLabel>
    </SettingsPressableArea>
  );
}
