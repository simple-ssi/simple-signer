// eventually this will all come from the `simple-credential` package
export const credential = {
  header: {
    alg: 'HS256',
    typ: 'JWT'
  },
  payload: {
    sub: '1234567890',
    name: 'John Doe',
    iat: 1516239022
  }
}
