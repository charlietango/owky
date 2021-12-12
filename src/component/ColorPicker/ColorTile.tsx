import { View, Pressable } from 'react-native';
import React from 'react';
import styled from 'styled-components';

const PressableArea = styled(Pressable)`
  width: 48px;
  height: 48px;
  border-radius: 50px;
  padding: 2px;
  margin: 0 1px 1px 0;
`;

const Tile = styled(View)`
  border-radius: 50px;
  width: 100%;
  height: 100%;
`;

type ColorPickerProps = {
  color: string;
  isSelected: boolean;
  onPress: () => void;
};

export default function ColorTile({ color, isSelected, onPress }: ColorPickerProps): JSX.Element {
  return (
    <PressableArea
      style={{
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: isSelected ? '#007aff' : 'transparent',
      }}
      onPress={onPress}
    >
      <Tile
        style={{
          backgroundColor: color,
        }}
      />
    </PressableArea>
  );
}
