import * as crypto from 'crypto'

export const hmacSha256 = (data: string, secret: string): string => crypto
  .createHmac('sha256', secret)
  .update(data)
  .digest('hex')
