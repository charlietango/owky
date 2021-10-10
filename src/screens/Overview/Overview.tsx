import { FlatList, SafeAreaView } from 'react-native';
import React, { useLayoutEffect } from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import styled from 'styled-components';

import IconButton from '@components/IconButton/IconButton';
import { Icon, IconSize } from '@components/IconButton/Icons';
import Tile from '@components/Tile/Tile';
import { useSelector } from '@hooks/store';

const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: white;
`;

export default function Overview(): JSX.Element {
  const navigation: NativeStackNavigationProp<ParamListBase> = useNavigation();
  const tokens = useSelector((state) => state.token.tokens);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: renderAddButton,
      headerLeft: renderSettingsButton,
    });
  });

  return (
    <Container>
      <FlatList
        data={tokens}
        renderItem={(item) => <Tile title={item.item} />}
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
