import { sign } from './sign.js'
import { credential } from '../lib/credential/credential.js'

describe('Sign Function', () => {
  it('should return the signed message', () => {
    const header = JSON.stringify(credential.header)
    const payload = JSON.stringify(credential.payload)
    const data = `${header}.${payload}`
    const key = 'some 256-bit key'
    const actual = sign(data, key)
    expect(typeof actual).toEqual('string')
  })
})
