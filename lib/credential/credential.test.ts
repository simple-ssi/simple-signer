import { credential } from './credential.js'

describe('credential', () => {
  it('should return a credential object', () => {
    expect(credential).toEqual({
      header: {
        alg: 'HS256',
        typ: 'JWT'
      },
      payload: {
        sub: '1234567890',
        name: 'Alice',
        admin: true
      }
    })
  })
})
