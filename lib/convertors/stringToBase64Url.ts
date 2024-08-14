import { Buffer } from 'buffer/index.js'
import { bufferToBase64URL } from './bufferToBase64Url.js'

export const stringToBase64Url = (data: string): string => bufferToBase64URL(Buffer.from(data, 'utf-8'))
