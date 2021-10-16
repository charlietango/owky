import sinon from 'sinon';
import { generateTokenFromUri, Token } from '@services/authenticator';
import { Authenticator } from '@otplib/core';

// @ts-ignore
const { describe, it, expect } = global;

describe('token creation', () => {
  afterEach(function () {
    sinon.restore();
  });

  it('should return token', () => {
    const uri = 'otpauth://totp/Twitter:@charlietango592?secret=Q45TFIVGPFX4WORM&issuer=Twitter';
    const expectedToken: Token = {
      token: '123456',
      account: '@charlietango592',
      issuer: 'Twitter',
      timeRemaining: 21,
    };

    const generate = sinon.stub(Authenticator.prototype, 'generate').returns('123456');
    const timeRemaining = sinon.stub(Authenticator.prototype, 'timeRemaining').returns(21);

    const token = generateTokenFromUri(uri);

    sinon.assert.calledOnce(generate);
    sinon.assert.calledOnce(timeRemaining);
    expect(token).toEqual(expectedToken);
  });

  it('should throw an exception when uri is malformed', () => {
    const uri = 'ana are mere';
    expect(() => {
      const token = generateTokenFromUri(uri);
      console.log(token);
    }).toThrow();
  });
});
