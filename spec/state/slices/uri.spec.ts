import reducer, { add, AccountState } from '@slice/account';

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
    let previousState: AccountState = { list: [] };

    expect(
      reducer(
        previousState,
        add({
          secret: 'Q45TFIVGPFX4WORM',
          username: '@charlietango592',
          issuer: 'Twitter',
          color: '#1DA1F2',
        }),
      ),
    ).toEqual({
      list: [
        {
          secret: 'Q45TFIVGPFX4WORM',
          username: '@charlietango592',
          issuer: 'Twitter',
          color: '#1DA1F2',
        },
      ],
    });

    previousState = {
      list: [
        {
          secret: 'Q45TFIVGPFX4WORM',
          username: '@charlietango592',
          issuer: 'Twitter',
          color: '#1DA1F2',
        },
      ],
    };

    expect(
      reducer(
        previousState,
        add({
          secret: 'A4JBUW7QCBPGQJOA',
          username: 'charlietango',
          issuer: 'Github',
          color: '#333333',
        }),
      ),
    ).toEqual({
      list: [
        {
          secret: 'Q45TFIVGPFX4WORM',
          username: '@charlietango592',
          issuer: 'Twitter',
          color: '#1DA1F2',
        },
        {
          secret: 'A4JBUW7QCBPGQJOA',
          username: 'charlietango',
          issuer: 'Github',
          color: '#333333',
        },
      ],
    });
  });
});
