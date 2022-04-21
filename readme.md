# Automatic Client Side Field Level Encryption

## Introduction

THis is a simple example showing how to use the [Field Level Encryption](https://www.mongodb.com/docs/drivers/security/client-side-field-level-encryption-guide/) feature of MongoDB. Ths main benefit of this feature is that it allows you to encrypt data at the field level, rather than the document level. This means that you can encrypt data that is sensitive, such as a user's phone number or ssn.

## Prerequisites

- Install Node.js
- Install Enterprise Edition of MongoDB

## Setup

- Clone the repository
- Run `npm install`
- Add mongoDb URI to the `.env` file

## Steps

1. Create master key `node config/create-master-key.js`
2. Create data Key `node config/create-data-key.js`
3. Replace `base64KeyId` value `config/db.js` with value generated from step(2)
4. Run app `node server.js`
