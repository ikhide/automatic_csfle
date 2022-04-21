const { client } = require("./db");
const keyVaultDb = "encryption";
const keyVaultCollection = "__keyVault";
const { Binary } = require("mongodb");

async function encryption(base64KeyId) {
  try {
    await client.connect();
    const keyDB = client.db(keyVaultDb);
    const keyColl = keyDB.collection(keyVaultCollection);
    const query = {
      _id: new Binary(Buffer.from(`${base64KeyId}`, "base64"), 4),
    };
    const dataKey = await keyColl.findOne(query);
    return dataKey;
  } catch (e) {
    console.log("fetch Encryption error: ", e);
  } finally {
    await client.close();
  }
}

module.exports = encryption;
