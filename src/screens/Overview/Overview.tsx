import { FlatList, SafeAreaView } from 'react-native';
import React, { useLayoutEffect } from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import styled from 'styled-components';

import IconButton from '@components/IconButton/IconButton';
import { Icon, IconSize } from '@components/IconButton/Icons';
import Tile from '@components/Tile/Tile';
import { useSelector } from '@hooks/store';
import { sample } from 'lodash';

const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: white;
`;

const COLORS = ['#F75D94', '#7929FE', '#FF5E06', '#08D2C5', '#E51B09', '#0D0D0D'];

export default function Overview(): JSX.Element {
  const navigation: NativeStackNavigationProp<ParamListBase> = useNavigation();
  const uris = useSelector((state) => state.uri.list);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: renderAddButton,
      headerLeft: renderSettingsButton,
    });
  });

  return (
    <Container>
      <FlatList
        data={uris}
        renderItem={(item) => <Tile uri={item.item} color={sample(COLORS) as string} />}
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
