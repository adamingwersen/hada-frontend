export type ErrorCode =
  | "invalid_request"
  | "access_denied"
  | "unauthorized_client"
  | "unsupported_response_type"
  | "invalid_scope"
  | "server_error"
  | "temporarily_unavailable";

export interface TokenResponse {
  /** The access token of a successful token response. */
  access_token: string;
  /** The lifetime in seconds of the access token. */
  expires_in: string;
  /** The hosted domain the signed-in user belongs to. */
  hd?: string;
  /** The prompt value that was used from the possible list of values specified by TokenClientConfig or OverridableTokenClientConfig */
  prompt: string;
  /** The type of the token issued. */
  token_type: string;
  /** A space-delimited list of scopes that are approved by the user. */
  scope: string;
  /** The string value that your application uses to maintain state between your authorization request and the response. */
  state?: string;
  /** A single ASCII error code. */
  error?: ErrorCode;
  /**	Human-readable ASCII text providing additional information, used to assist the client developer in understanding the error that occurred. */
  error_description?: string;
  /** A URI identifying a human-readable web page with information about the error, used to provide the client developer with additional information about the error. */
  error_uri?: string;
}

export interface GoogleJWT {
  iss: string; // The JWT's issuer
  nbf: Date;
  aud: string; // Your server's client ID
  sub: string; // The unique ID of the user's Google Account
  hd: string; // If present, the host domain of the user's GSuite email address
  email: string; // The user's email address
  email_verified: boolean; // true, if Google has verified the email address
  azp: string;
  name: string;
  // If present, a URL to user's profile picture
  picture: string;
  given_name: string;
  family_name: string;
  iat: Date; // Unix timestamp of the assertion's creation time
  exp: Date; // Unix timestamp of the assertion's expiration time
  jti: string;
}
