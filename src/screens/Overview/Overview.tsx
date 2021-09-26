import { Text, View } from 'react-native';
import React, { useLayoutEffect } from 'react';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ParamListBase } from '@react-navigation/native';

import IconButton from '@components/IconButton/IconButton';
import { Icon, IconSize } from '@components/IconButton/Icons';

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
    <View>
      <Text>Overview Screen</Text>
    </View>
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
