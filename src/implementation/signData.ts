import { Buffer } from 'buffer/index.js'
import { hmacSha256 } from '../lib/hmacsha256.js'
import { bufferToBase64Url } from '../lib/convertors/bufferToBase64Url.js'
import { Signer } from '../core/signer.js'

export const signData: Signer<string> = (data: string, key: string): string => bufferToBase64Url(Buffer.from(hmacSha256(data, key), 'hex'))
