import { credential } from '../../lib/credential/credential.js'
import { stringToBase64Url } from '../../lib/convertors/stringToBase64Url.js'
import { Buffer } from 'buffer/index.js'
import { signData } from './signData.js'

describe('signData', () => {
  it('should return a signature', async () => {
    const header = JSON.stringify(credential.header)
    const payload = JSON.stringify(credential.payload)
    const data = `${stringToBase64Url(header)}.${stringToBase64Url(payload)}`
    const expected = 'w-r9qmB7Gr_x4EGRdaHCdwn_NQTPfmC78jo7SgNAE1k' // based on default key
    const actual = await signData(data) // use default key in signData implementation
    console.log(`SIGNATURE: ${actual}`)
    expect(actual).toEqual(expected)
  })
})
