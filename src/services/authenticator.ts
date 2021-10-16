import url from 'url';
import { Buffer } from 'buffer';
import { Authenticator } from '@otplib/core';
import { createDigest, createRandomBytes } from '@otplib/plugin-crypto-js';
import { keyDecoder, keyEncoder } from '@otplib/plugin-base32-enc-dec';

global.Buffer = global.Buffer || Buffer;

export interface Token {
  token: string;
  account: string;
  issuer: string;
  timeRemaining: number;
}

const authenticator = new Authenticator({
  createDigest,
  createRandomBytes,
  keyDecoder,
  keyEncoder,
});

export function generateTokenFromUri(uri: string): Token {
  const parsed = url.parse(uri, true);
  const account = parsed.pathname?.split(':')[1] || '';

  try {
    return {
      token: authenticator.generate(parsed.query.secret as string),
      account,
      issuer: parsed.query.issuer as string,
      timeRemaining: authenticator.timeRemaining(),
    };
  } catch (exception) {
    throw new Error(exception);
  }
}
