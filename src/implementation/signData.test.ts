import { credential } from '../lib/credential/credential.js'
import { keys } from '../lib/keys/keys.js'
import { stringToBase64Url } from '../lib/convertors/stringToBase64Url.js'
import { signData } from './signData.js'

describe('signData', () => {
  it('should return a signature', () => {
    const encodedHeader =
      stringToBase64Url(
        JSON
          .stringify(credential.header)
      )
    const encodedPayload = stringToBase64Url(
      JSON
        .stringify(credential.payload)
    )

    const secret256Bit = keys[0]

    const expected = 'w-r9qmB7Gr_x4EGRdaHCdwn_NQTPfmC78jo7SgNAE1k' // based on default key
    const actual = signData(encodedHeader, encodedPayload, secret256Bit) // use default key in signData implementation

    console.log(`SIGNATURE: ${actual}`)
    expect(actual).toEqual(expected)
  })
})
