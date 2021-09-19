import React from 'react';
import renderer from 'react-test-renderer';

const { describe, it, expect } = global;

import App from '../src/App';

describe('Test <App />', () => {
  it('has 1 child', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree.children.length).toBe(1);
  });

  it('renders correctly', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
