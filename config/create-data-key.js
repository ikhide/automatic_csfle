const fs = require("fs");
const base64 = require("uuid-base64");
const { ClientEncryption } = require("mongodb-client-encryption");

/* Read the Locally-Managed Master Key from a File */
const path = "./config/master-key.txt";
const localMasterKey = fs.readFileSync(path);

/* Specify KMS Provider Settings. The client uses these settings to discover the master key */
const kmsProviders = {
  local: {
    key: localMasterKey,
  },
};

const keyVaultNamespace = "encryption.__keyVault";
const { client } = require("./db");

async function create() {
  try {
    await client.connect();
    const encryption = new ClientEncryption(client, {
      keyVaultNamespace,
      kmsProviders,
    });
    const key = await encryption.createDataKey("local");
    const base64DataKeyId = key.toString("base64");
    const uuidDataKeyId = base64.decode(base64DataKeyId);
    console.log("DataKeyId [UUID]: ", uuidDataKeyId);
    console.log("DataKeyId [base64]: ", base64DataKeyId);
  } finally {
    await client.close();
  }
}
create();
