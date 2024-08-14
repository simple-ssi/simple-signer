import { signData } from '../implementation/signData.js'

export const sign = (data: string, key: string): string => signData(data, key)
