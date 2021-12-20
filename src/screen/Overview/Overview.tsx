import { FlatList, SafeAreaView } from 'react-native';
import React, { useLayoutEffect } from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import styled from 'styled-components';

import IconButton from '@component/IconButton/IconButton';
import { Icon, IconSize } from '@component/IconButton/Icons';
import Tile from '@component/Tile/Tile';
import { useSelector } from '@hook/store';
import EmptyList from '@screen/Overview/EmptyList';

const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: white;
`;

export default function Overview(): JSX.Element {
  const navigation: NativeStackNavigationProp<ParamListBase> = useNavigation();
  const accounts = useSelector((state) => state.account.list);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: renderAddButton,
      headerLeft: renderSettingsButton,
    });
  });

  return (
    <Container>
      <FlatList
        data={accounts}
        ListEmptyComponent={<EmptyList />}
        contentContainerStyle={{ flexGrow: 1 }}
        renderItem={(item) => <Tile account={item.item} />}
        keyExtractor={(item, index) => index.toString()}
      />
    </Container>
  );

  function renderSettingsButton() {
    return (
      <IconButton
        icon={Icon.settings}
        onPress={() => navigation.push('Settings')}
        size={IconSize.medium}
      />
    );
  }

  function renderAddButton() {
    return (
      <IconButton icon={Icon.add} onPress={() => navigation.push('Add')} size={IconSize.medium} />
    );
  }
}
