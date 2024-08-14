import { hmacSha256 } from './hmacsha256.js'

describe('hmacSha256', () => {
  it('should return a string', () => {
    expect(typeof hmacSha256('data  ', 'key')).toBe('string')
  })

  it('should return the correct hash', () => {
    const data = 'This is some data to hash'
    const secret = ']2P>ptjRsx_zsv&tcCR6[Z{v1Hhm8~FB'
    expect(hmacSha256(data, secret)).toBe('fb4f5b760bbed67dd3bee24eba05a7dd114f67225155fb133a3951776fdc7cfa')
  })
})
