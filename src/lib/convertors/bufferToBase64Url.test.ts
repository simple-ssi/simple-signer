import { Buffer } from 'buffer/index.js'
import { bufferToBase64Url } from './bufferToBase64Url.js'

describe('Base64Url encoder', () => {
  it('can encode a buffer', () => {
    // string will allow checking all three problematic characters: +, /, and =
    // regular base64 would encode this string as 'PDw/Pz8+Pg=='
    const buffer = Buffer.from('<<???>>')
    const expected = 'PDw_Pz8-Pg' // but we expect the url-safe version
    const encoded = bufferToBase64Url(buffer)
    expect(encoded).toBe(expected)
  })
})
