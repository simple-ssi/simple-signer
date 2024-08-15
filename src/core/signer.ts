export type Base64Url = string
export type Signer<T> = (encodedHeader: string, encodedPayload: string, secret256Bit: string) => T
