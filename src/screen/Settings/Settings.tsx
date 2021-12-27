import { Text, View } from 'react-native';
import React from 'react';
import styled from 'styled-components';
import * as LocalAuthentication from 'expo-local-authentication';

import Switch from '@component/Switch/Switch';
import { useDispatch, useSelector } from '@hook/store';
import { setLocalAuthenticationStatus } from '@slice/settings';

const Container = styled(View)`
  background-color: #fff;
  flex: 1;
  padding: 10px 17px;
`;

const SectionTitle = styled(Text)`
  font-size: 13px;
  line-height: 14px;
  color: #007aff;
  margin-bottom: 8px;
`;

export default function Settings(): JSX.Element {
  const settings = useSelector((state) => state.settings);
  const dispatch = useDispatch();

  return (
    <Container>
      <SectionTitle>Security & Privacy</SectionTitle>
      <Switch
        checked={settings.localAuthenticationStatus}
        label={'Enable Face ID / Touch Id'}
        onChange={(value) => {
          LocalAuthentication.authenticateAsync()
            .then((result) => {
              if (result.success) {
                dispatch(setLocalAuthenticationStatus(value));
              }
            })
            .catch((error) => console.error(error));
        }}
      />
    </Container>
  );
}
