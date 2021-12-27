import { FlatList, NativeScrollEvent, NativeSyntheticEvent, SafeAreaView } from 'react-native';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import * as Haptics from 'expo-haptics';
import styled from 'styled-components';

import IconButton from '@component/IconButton/IconButton';
import { Icon, IconSize } from '@component/IconButton/Icons';
import Tile from '@component/Tile/Tile';
import { useSelector } from '@hook/store';
import EmptyList from '@screen/Overview/EmptyList';
import SearchInput from '@component/SearchInput/SearchInput';
import * as LocalAuthentication from 'expo-local-authentication';

const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: white;
`;

export default function Overview(): JSX.Element {
  const navigation: NativeStackNavigationProp<ParamListBase> = useNavigation();
  const storedAccounts = useSelector((state) => state.account.list);

  const [showHeader, setShowHeader] = useState(false);
  const [filterQuery, setFilterQuery] = useState<string | null>(null);
  const [accounts, setAccounts] = useState(storedAccounts);
  const settings = useSelector((state) => state.settings);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: renderAddButton,
      headerLeft: renderSettingsButton,
    });
  });

  useEffect(() => {
    if (settings.localAuthenticationStatus === true) {
      LocalAuthentication.authenticateAsync();
    }
  }, []);

  useEffect(() => {
    if (!filterQuery) {
      setAccounts(storedAccounts);
      return;
    }

    setAccounts(
      storedAccounts.filter((account) => {
        return (
          account.issuer.toLowerCase().includes(filterQuery.toLowerCase()) ||
          account.username.toLowerCase().includes(filterQuery.toLowerCase())
        );
      }),
    );
  }, [filterQuery, storedAccounts]);

  function handleScroll(event: NativeSyntheticEvent<NativeScrollEvent>) {
    if (event.nativeEvent.contentOffset.y < -30) {
      if (!showHeader) {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
      }
      setShowHeader(true);
    }
    if (event.nativeEvent.contentOffset.y > 30) {
      setShowHeader(false);
    }
  }

  return (
    <Container>
      <FlatList
        data={accounts}
        ListEmptyComponent={<EmptyList />}
        contentContainerStyle={{ flexGrow: 1 }}
        ListHeaderComponent={
          showHeader ? (
            <SearchInput
              placeholder={'Search by email or domain'}
              onChangeText={(value: string) => setFilterQuery(value)}
            />
          ) : null
        }
        renderItem={(item) => <Tile account={item.item} />}
        keyExtractor={(item, index) => index.toString()}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      />
    </Container>
  );

  function renderSettingsButton() {
    return (
      <IconButton
        icon={Icon.settings}
        onPress={() => navigation.push('Settings')}
        size={IconSize.large}
      />
    );
  }

  function renderAddButton() {
    return (
      <IconButton icon={Icon.add} onPress={() => navigation.push('Add')} size={IconSize.medium} />
    );
  }
}
