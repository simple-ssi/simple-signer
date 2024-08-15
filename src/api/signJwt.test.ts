import { signJwt } from './signJwt.js'
import { credential } from '../lib/credential/credential.js'

describe('signJwt function', () => {
  it('should take raw header and payload, and a secret and return a string', () => {
    const header = JSON.stringify(credential.header)
    const payload = JSON.stringify(credential.payload)
    // const data = `${header}.${payload}`
    const key = 'some 256-bit key'
    const actual = signJwt(header, payload, key)
    expect(typeof actual).toEqual('string')
  })
  it('should return a well-formed jwt', () => {
    const header = JSON
      .stringify(
        {
          alg: 'HS256',
          typ: 'JWT'
        }
      )
    const payload = JSON
      .stringify(
        {
          sub: '1234567890',
          name: 'John Doe',
          iat: 1516239022
        }
      )
    const secret = ']2P>ptjRsx_zsv&tcCR6[Z{v1Hhm8~FB'
    const expected = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.w-r9qmB7Gr_x4EGRdaHCdwn_NQTPfmC78jo7SgNAE1k'
    const actual = signJwt(header, payload, secret)
    expect(actual).toEqual(expected)
  })
})
