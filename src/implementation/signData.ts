import { Buffer } from 'buffer/index.js'
import { hmacSha256 } from '../../lib/hmacSha256.js'
import { bufferToBase64URL } from '../../lib/convertors/bufferToBase64Url.js'
import { Signer } from '../core/signer.js'

export const signData: Signer<string> = async (data: string, key = ']2P>ptjRsx_zsv&tcCR6[Z{v1Hhm8~FB'): Promise<string> =>
  await new Promise(
    (resolve, reject) => {
      resolve(
        bufferToBase64URL(Buffer.from(hmacSha256(data, key), 'hex'))
      )
    }
  )
