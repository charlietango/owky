type HexColor = string;

export type Uuid = string;

export type Account = {
  uuid: Uuid;
  secret: string;
  username: string;
  issuer: string;
  color: HexColor;
};
