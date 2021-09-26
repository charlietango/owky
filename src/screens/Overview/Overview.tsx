import { FlatList, SafeAreaView } from 'react-native';
import React, { useLayoutEffect } from 'react';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ParamListBase } from '@react-navigation/native';
import styled from 'styled-components';

import IconButton from '@components/IconButton/IconButton';
import { Icon, IconSize } from '@components/IconButton/Icons';
import Tile from '@components/Tile/Tile';

const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: white;
`;

interface IOverviewProps {
  navigation: NativeStackNavigationProp<ParamListBase>;
}

export default function Overview(props: IOverviewProps): JSX.Element {
  useLayoutEffect(() => {
    props.navigation.setOptions({
      headerRight: renderRightHeaderButton,
      headerLeft: renderLeftHeaderButton,
    });
  });

  return (
    <Container>
      <FlatList
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
        renderItem={() => <Tile />}
        keyExtractor={(item, index) => index.toString()}
      />
    </Container>
  );

  function renderLeftHeaderButton() {
    return (
      <IconButton
        icon={Icon.settings}
        onPress={() => props.navigation.push('Settings')}
        size={IconSize.medium}
      />
    );
  }

  function renderRightHeaderButton() {
    return (
      <IconButton
        icon={Icon.add}
        onPress={() => props.navigation.push('Add')}
        size={IconSize.medium}
      />
    );
  }
}
