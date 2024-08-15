import { stringToBase64Url } from '../lib/convertors/stringToBase64Url.js'
import { signData } from '../implementation/signData.js'

export const signJwt =
  (header: string, payload: string, secret256Bit: string): string => {
    const encodedHeader = stringToBase64Url(header)
    const encodedPayload = stringToBase64Url(payload)

    return encodedHeader + '.' +
           encodedPayload + '.' +
           signData(
             encodedHeader,
             encodedPayload,
             secret256Bit
           )
  }
