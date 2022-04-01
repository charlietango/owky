import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import styled from 'styled-components';
import { useSelector } from '@hook/store';
import { PrimaryButton } from '@component/Button/Button';
import * as Clipboard from 'expo-clipboard';

const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.backgroundColor};
`;

const Title = styled(Text)`
  color: ${({ theme }) => theme.textColorPrimary};
  font-size: 34px;
  font-weight: bold;
  margin-bottom: 32px;
`;

const Description = styled(Text)`
  color: ${({ theme }) => theme.textColorPrimary};
  font-size: 14px;
  font-weight: normal;
  margin-bottom: 16px;
`;

const ExportPreview = styled(Text)`
  font-family: 'Courier New';
  color: ${({ theme }) => theme.textColorPrimary};
`;

const ExportPreviewContainer = styled(View)`
  border: 1px solid ${({ theme }) => theme.textColorPrimary};
  padding: 8px;
  border-top-left-radius: 10px;
  margin: 12px 0;
  background-color: ${({ theme }) => theme.transparent10};
`;

export default function Export(): JSX.Element {
  const storedAccounts = useSelector((state) => state.account.list);

  const performExport = () => {
    const serializedData = storedAccounts
      .map((account) => `${account.issuer}, ${account.username}, ${account.secret}`)
      .join('\n');
    Clipboard.setString(serializedData);
  };

  if (storedAccounts.length === 0) {
    return (
      <Container>
        <View style={{ padding: 16 }}>
          <Title>Export</Title>
          <Description>Nothing to export.</Description>
        </View>
      </Container>
    );
  }

  return (
    <Container>
      <View style={{ padding: 16 }}>
        <Title>Export</Title>
        <Description>
          This is an obfuscated preview of your data. You can copy all the data by pressing the
          button bellow, then store it in our preferred vault.
        </Description>

        <ExportPreviewContainer>
          <ExportPreview>
            {storedAccounts
              .slice(0, 2)
              .map(
                (account) =>
                  `${account.issuer}, ${account.username}, ${account.secret.slice(0, 1)}*******\n`,
              )}
          </ExportPreview>
        </ExportPreviewContainer>
        <PrimaryButton title={'Copy all data'} onPress={performExport} />
      </View>
    </Container>
  );
}
