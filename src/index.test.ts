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

    it('should not return anything', () => {
      const expected = 'Signed.'
      const actual = sign()
      expect(actual).toEqual(expected)
    })
  })
})
