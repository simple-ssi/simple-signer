import * as jwt from 'jsonwebtoken'
import { Buffer } from 'buffer/index.js'
import { Key } from '../core/key.js'
import { Base64Url, Signer } from '../core/signer.js'
import { credential } from '../../lib/credential/credential.js'
import { base64UrlToBuffer } from '../../lib/convertors/base64UrlToBuffer.js'
import { bufferToBase64URL } from '../../lib/convertors/bufferToBase64Url.js'

export const signData: Signer<string> = async (data: string, key = ']2P>ptjRsx_zsv&tcCR6[Z{v1Hhm8~FB'): Promise<string> =>
  await new Promise(
    (resolve, reject) => {
      resolve(
        jwt
          .sign(
            data,
            ']2P>ptjRsx_zsv&tcCR6[Z{v1Hhm8~FB'
          )
        // 'w-r9qmB7Gr_x4EGRdaHCdwn_NQTPfmC78jo7SgNAE1k'
      )
    }
  )
