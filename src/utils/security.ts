import crypto from 'crypto'
import { SECRETKEY } from '../config'

const encrypt = (str: any) => {
    return crypto
        .createHash('sha1')
        .update(`${SECRETKEY}${str.toString()}`)
        .digest('hex')
}
export {
    encrypt
}