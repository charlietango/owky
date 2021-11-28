type HexColor = string;

export type Account = {
  secret: string;
  username: string;
  issuer: string;
  color: HexColor;
};
