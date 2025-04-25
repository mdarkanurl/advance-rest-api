export default {
    PORT: 3000,
    MONGO_URL: 'mongodb://localhost:27017/rest-api-testing',
    slatWorkFactor: 10,
    publicKey: `-----BEGIN PUBLIC KEY-----
                MIGTAgEAMBMGByqGSM49AgEGCCqGSM49AwEHBHkwdwIBAQQgASaLt9X9vfWGno8O
                jzkyvifgBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB0DAQehRANCAAQ+MQPpC9wIgSQb
                Cg/Ovrs/NTBo6rzd98xoCk544BfAx3s48dMKPDFFUgogTL/mGSc0v91vZJADeQnh
                VjU1rQu2
                -----END PUBLIC KEY-----`,
    privateKey: `-----BEGIN PRIVATE KEY-----
                MIGTAgEAMBMGByqGSM49AgEGCCqGSM49AwEHBHkwdwIBAQQgASaLt9X9vfWGno8O
                jzkyvifgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA0DAQehRANCAAQ+MQPpC9wIgSQb
                Cg/Ovrs/NTBo6rzd98xoCk544BfAx3s48dMKPDFFUgogTL/mGSc0v91vZJADeQnh
                VjA1kan2
                -----END PRIVATE KEY-----`,
    accessTokenTtL: '15m',
    refreshTokenTtL: '1y'
}