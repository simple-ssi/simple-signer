import npmPackage, { sign } from './index.js'

describe('NPM Package', () => {
  it('should be an object', () => {
    expect(npmPackage).toBeInstanceOf(Object)
  })

  it('should have a sign property', () => {
    expect(npmPackage).toHaveProperty('sign')
  })

  describe('Sign Function', () => {
    it('should be a function', () => {
      expect(sign).toBeInstanceOf(Function)
    })

    it('should return signed data', async () => {
      const actual = await sign('data', 'key')
      expect(typeof actual).toEqual('string')
    })
  })
})
