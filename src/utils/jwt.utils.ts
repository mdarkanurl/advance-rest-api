import jwt from 'jsonwebtoken';
import config from 'config';

const publicKey = config.get<string>('publicKey');
const privateKey = config.get<string>('privateKey');

export async function signJwt(
    object: Object, { expiresIn }: any
) {
    return await jwt.sign(object, privateKey, {
        expiresIn: expiresIn,
        // algorithm: 'ES256'
    });
}

export async function verifyJwt(token: string) {
    console.log('from jwt.utils.ts => ', publicKey)
    try {
        const decoded = await jwt.verify(token, publicKey);

        return {
            valid: true,
            expired: false,
            decoded
        }
    } catch (error: any) {
        return {
            valid: false,
            expired: error.message === 'jwt expired',
            decoded: null
        }
    }
}