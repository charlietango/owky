import { View, Text, TextInput as NativeTextInput } from 'react-native';
import React, { useState } from 'react';
import styled from 'styled-components';

type TextInputProps = {
  label: string;
  value: string;
  placeholder: string;
  description: string;
  onChange: (value: string) => void;
};

const Container = styled(View)`
  margin: 12px 16px;
`;

const Label = styled(Text)`
  color: #007aff;
  font-size: 12px;
  line-height: 14px;
`;

const Description = styled(Text)`
  color: #aca8a8;
  font-size: 12px;
  line-height: 14px;
`;

const Input = styled(NativeTextInput)<{ focused: boolean }>`
  border: ${({ focused }) => (focused ? '1px solid #007aff' : '1px solid #47484b')};
  padding: 12px;
  font-size: 18px;
  line-height: 21px;
  border-radius: 5px;
  margin: 6px 0;
`;

export default function TextInput(props: TextInputProps): JSX.Element {
  const [focused, setFocused] = useState(false);

  return (
    <Container>
      <Label>{props.label}</Label>
      <Input
        focused={focused}
        value={props.value}
        placeholder={props.placeholder}
        onChangeText={props.onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
      <Description>{props.description}</Description>
    </Container>
  );
}
