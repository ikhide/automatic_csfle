module.exports = function (keyId) {
  return {
    "db1.user2": {
      bsonType: "object",

      encryptMetadata: {
        keyId: [keyId],
      },
      properties: {
        name: {
          bsonType: "string",
        },
        amount: {
          bsonType: "Number",
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
