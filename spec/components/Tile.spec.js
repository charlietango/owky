import React from 'react';
import renderer from 'react-test-renderer';

const { describe, it, expect } = global;

import Tile from '@components/Tile/Tile';

describe('Test @component <Tile />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Tile title={'title'} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
