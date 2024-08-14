import { Key } from './key.js'

export type Base64Url = string
export type Signer<T> = (data: string, key?: string) => Promise<T>
