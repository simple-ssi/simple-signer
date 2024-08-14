import { sign } from './sign.js'

describe('Sign Function', () => {
  it('should be a function', () => {
    expect(sign).toBeInstanceOf(Function)
  })

  it('should return the signed message', () => {
    const expected = 'Signed.'
    const actual = sign()
    expect(actual).toEqual(expected)
  })
})
