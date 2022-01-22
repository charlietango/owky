import { View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { sample } from 'lodash';

import ColorTile from '@component/ColorPicker/ColorTile';

const Container = styled(View)`
  margin: 12px 16px;
`;

const Label = styled(Text)`
  font-size: 12px;
  line-height: 14px;
  color: ${({ theme }) => theme.textColorPrimary};
  font-weight: 600;
  margin-bottom: 12px;
`;

const TilesContainer = styled(View)`
  flex-direction: row;
  flex-wrap: wrap;
`;

type ColorPickerProps = {
  onSelect: (color: string) => void;
};

const colors = [
  '#cccccc',
  '#343A40',
  '#F9C74F',
  '#EF476F',
  '#E7A1FF',
  '#FFAEC6',
  '#8900F2',
  '#56AB91',
  '#FB8500',
  '#023E8A',
  '#0077B6',
  '#00B4D8',
  '#EDB183',
  '#FF5400',
];

export default function ColorPicker({ onSelect }: ColorPickerProps): JSX.Element {
  const sampledColor = sample(colors);
  const [selectedColor, setSelectedColor] = useState(sampledColor);

  useEffect(() => {
    onSelect(selectedColor as string);
  }, [selectedColor]);

  return (
    <Container>
      <Label>Choose a color</Label>
      <TilesContainer>
        {colors.map((color) => (
          <ColorTile
            key={color}
            color={color}
            isSelected={selectedColor === color}
            onPress={() => {
              setSelectedColor(color);
            }}
          />
        ))}
      </TilesContainer>
    </Container>
  );
}
