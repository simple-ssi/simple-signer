import { Buffer } from 'buffer/index.js'
import { bufferToBase64Url } from './bufferToBase64Url.js'

export const stringToBase64Url = (data: string): string => bufferToBase64Url(Buffer.from(data, 'utf-8'))
