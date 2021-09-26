import { Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { icons, Icon, IconSize } from '@components/IconButton/Icons';

export interface IIconButtonProps {
  icon: Icon;
  size: IconSize;
  onPress: () => void;
}

export default function IconButton(props: IIconButtonProps): JSX.Element {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <Image
        source={icons[props.icon].uri}
        fadeDuration={0}
        style={{ width: props.size, height: props.size }}
      />
    </TouchableOpacity>
  );
}
