module.exports = function (keyId) {
  return {
    "db1.users": {
      bsonType: "object",
      encryptMetadata: {
        keyId: [keyId],
      },
      properties: {
        name: {
          bsonType: "string",
        },
        email: {
          bsonType: "string",
        },
        ssn: {
          encrypt: {
            bsonType: "string",
            algorithm: "AEAD_AES_256_CBC_HMAC_SHA_512-Deterministic",
          },
        },
      },
    },
  };
};
