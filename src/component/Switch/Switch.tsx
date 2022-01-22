import { View, Text, Switch as NativeSwitch } from 'react-native';
import React from 'react';
import styled from 'styled-components';

type SwitchProps = {
  label: string;
  checked: boolean;
  onChange: (value: boolean) => void;
};

const Container = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom-width: 0.3px;
  border-bottom-color: ${({ theme }) => theme.borderColorLight};
  padding: 8px 0;
`;

const Label = styled(Text)`
  font-size: 16px;
  line-height: 19px;
  color: ${({ theme }) => theme.textColorPrimary};
`;

export default function Switch(props: SwitchProps): JSX.Element {
  return (
    <Container>
      <Label>{props.label}</Label>
      <NativeSwitch value={props.checked} onValueChange={props.onChange} />
    </Container>
  );
}
