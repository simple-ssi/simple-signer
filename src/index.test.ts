import npmPackage, { signJwt } from './index.js'

describe('NPM Package', () => {
  it('should be an object', () => {
    expect(npmPackage).toBeInstanceOf(Object)
  })

  it('should have a signJwt property', () => {
    expect(npmPackage).toHaveProperty('signJwt')
  })

  describe('signJwt function', () => {
    it('should be a function', () => {
      expect(signJwt).toBeInstanceOf(Function)
    })

    it('should return string', async () => {
      const actual = await signJwt('header', 'payload', 'secret')
      expect(typeof actual).toEqual('string')
    })
  })
})
