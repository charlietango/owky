import { View, Text, TextInput as NativeTextInput, KeyboardType } from 'react-native';
import React, { useState } from 'react';
import styled, { useTheme } from 'styled-components';

type TextInputProps = {
  label: string;
  value: string;
  placeholder: string;
  description: string;
  keyboardType?: KeyboardType;
  onChange: (value: string) => void;
};

const Container = styled(View)`
  margin: 12px 16px;
`;

const Label = styled(Text)`
  color: ${({ theme }) => theme.textColorPrimary};
  font-size: 12px;
  font-weight: 600;
  line-height: 14px;
`;

const Description = styled(Text)`
  color: ${({ theme }) => theme.textColorSecondary};
  font-size: 12px;
  line-height: 14px;
`;

const Input = styled(NativeTextInput)<{ focused: boolean }>`
  border: 1px solid
    ${({ focused, theme }) => (focused ? theme.borderColorFocus : theme.borderColorBlur)};
  padding: 12px;
  font-size: 18px;
  line-height: 21px;
  border-radius: 5px;
  margin: 6px 0;
  color: ${({ theme }) => theme.textColorPrimary};
`;

export default function TextInput(props: TextInputProps): JSX.Element {
  const [focused, setFocused] = useState(false);
  const theme = useTheme();

  return (
    <Container>
      <Label>{props.label}</Label>
      <Input
        focused={focused}
        autoCorrect={false}
        autoCapitalize={'none'}
        value={props.value}
        placeholder={props.placeholder}
        placeholderTextColor={theme.textColorSecondary}
        onChangeText={props.onChange}
        maxLength={80}
        keyboardType={props.keyboardType || 'default'}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
      <Description>{props.description}</Description>
    </Container>
  );
}
