import reducer, { add, TokenState } from '@slices/uri';

// @ts-ignore
const { describe, it, expect } = global;

describe('should return initial state and handle actions', () => {
  it('should return initial state', () => {
    // @ts-ignore
    expect(reducer(undefined, {})).toEqual({
      list: [],
    });
  });

  it('should handle add action', () => {
    let previousState: TokenState = { list: [] };

    expect(reducer(previousState, add('Maria'))).toEqual({
      list: ['Maria'],
    });

    previousState = { list: ['Maria'] };

    expect(reducer(previousState, add('Ioana'))).toEqual({
      list: ['Maria', 'Ioana'],
    });
  });
});
