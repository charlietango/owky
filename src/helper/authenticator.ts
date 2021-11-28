import { Buffer } from 'buffer';
import { Authenticator } from '@otplib/core';
import { createDigest, createRandomBytes } from '@otplib/plugin-crypto-js';
import { keyDecoder, keyEncoder } from '@otplib/plugin-base32-enc-dec';

global.Buffer = global.Buffer || Buffer;

export interface Token {
  token: string;
  timeRemaining: number;
}

const authenticator = new Authenticator({
  createDigest,
  createRandomBytes,
  keyDecoder,
  keyEncoder,
});

export function generateTokenFromSecret(secret: string): Token {
  try {
    return {
      token: authenticator.generate(secret),
      timeRemaining: authenticator.timeRemaining(),
    };
  } catch (exception) {
    throw new Error(exception);
  }
}
