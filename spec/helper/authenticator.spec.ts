import sinon from 'sinon';
import { generateTokenFromSecret, Token } from '@helper/authenticator';
import { Authenticator } from '@otplib/core';

// @ts-ignore
const { describe, it, expect } = global;

describe('token creation', () => {
  afterEach(function () {
    sinon.restore();
  });

  it('should return token', () => {
    const account = {
      secret: 'Q45TFIVGPFX4WORM',
      username: '@charlietango592',
      issuer: 'Twitter',
      color: '#1DA1F2',
    };

    const expectedToken: Token = {
      token: '123456',
      timeRemaining: 21,
    };

    const generate = sinon.stub(Authenticator.prototype, 'generate').returns('123456');
    const timeRemaining = sinon.stub(Authenticator.prototype, 'timeRemaining').returns(21);

    const token = generateTokenFromSecret(account.secret);

    sinon.assert.calledOnce(generate);
    sinon.assert.calledOnce(timeRemaining);
    expect(token).toEqual(expectedToken);
  });

  it('should throw an exception when uri is malformed', () => {
    const uri = 'ana are mere';
    expect(() => {
      const token = generateTokenFromSecret(uri);
      console.log(token);
    }).toThrow();
  });
});
