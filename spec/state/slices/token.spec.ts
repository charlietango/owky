import reducer, { add, TokenState } from '@slices/token';

// @ts-ignore
const { describe, it, expect } = global;

describe('should return initial state and handle actions', () => {
  it('should return initial state', () => {
    // @ts-ignore
    expect(reducer(undefined, {})).toEqual({
      tokens: [],
    });
  });

  it('should handle add action', () => {
    let previousState: TokenState = { tokens: [] };

    expect(reducer(previousState, add('Maria'))).toEqual({
      tokens: ['Maria'],
    });

    previousState = { tokens: ['Maria'] };

    expect(reducer(previousState, add('Ioana'))).toEqual({
      tokens: ['Maria', 'Ioana'],
    });
  });
});
