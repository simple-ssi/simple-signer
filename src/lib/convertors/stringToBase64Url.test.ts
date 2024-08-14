import { stringToBase64Url } from './stringToBase64Url.js'

describe('stringToBase64Url', () => {
  it('should return a base64url encoded string', () => {
    const data = 'hello'
    const expected = 'aGVsbG8'
    const result = stringToBase64Url(data)
    expect(result).toEqual(expected)
  })
})
