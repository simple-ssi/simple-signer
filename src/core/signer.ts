export type Base64Url = string
export type Signer<T> = (data: string, key: string) => T
