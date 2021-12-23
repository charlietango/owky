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
          uuid: 'abc-123',
          secret: 'Q45TFIVGPFX4WORM',
          username: '@charlietango592',
          issuer: 'Twitter',
          color: '#1DA1F2',
        }),
      ),
    ).toEqual({
      list: [
        {
          uuid: 'abc-123',
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
          uuid: 'abc-123',
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
          uuid: 'abc-124',
          secret: 'A4JBUW7QCBPGQJOA',
          username: 'charlietango',
          issuer: 'Github',
          color: '#333333',
        }),
      ),
    ).toEqual({
      list: [
        {
          uuid: 'abc-123',
          secret: 'Q45TFIVGPFX4WORM',
          username: '@charlietango592',
          issuer: 'Twitter',
          color: '#1DA1F2',
        },
        {
          uuid: 'abc-124',
          secret: 'A4JBUW7QCBPGQJOA',
          username: 'charlietango',
          issuer: 'Github',
          color: '#333333',
        },
      ],
    });
  });
});
