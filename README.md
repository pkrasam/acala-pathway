# acala-pathway

A place to understand ...how to connect, transact, and build with this language | framework | protocol.

## context

## api

## pathway

### 01. Connect to a Acala node

Our aim, is to connect to a Acala node using and RPC provider.
We will build a set of simple Node applications.
Hopefully this will become clear(er) as we continue on this pathway.
Acala has built a library for us to easily interface, build, and connect.

We will need `Node.js` and based on your OS, install the appropriate distribution.

```
node -v
v14.16.1
```

Create a project folder, change directory, and initialise as such:

```
mkdir acala
cd acala
npm init -y
```

Upon completion of the above commands you'll find a `package.json` with the following entries:

```
{
  "name": "acala",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

Install packages `dotenv, axios, polkadot, acala`

```
npm install --save dotenv axios @polkadot/api @acala-network/api@beta
```

Upon completion of the above commands you'll find a `package.json` with the following entries:

```
{
  "name": "acala",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "@acala-network/api": "^0.7.4-6",
    "@polkadot/api": "^4.9.2",
    "axios": "^0.21.1",
    "dotenv": "^9.0.2"
  }
}
```

### 02. Create a Acala account

### 03. Query a Acala blockchain

### 04. Submit a Acala transaction

### 05. Stake Acala tokens

### 06. Search Acala transactions

## wiki

[wiki](https://wiki.acala.network/)

### learn

[get-started](https://wiki.acala.network/learn/get-started)

[acala-portal](https://wiki.acala.network/general/acala-portal)

### build

[builders-portal](https://wiki.acala.network/build/builders-portal)

[starters-guide](https://wiki.acala.network/build/development-guide)

## maintain

[network-maintainers](https://wiki.acala.network/maintain/network-maintainers)

[oracle-overview](https://wiki.acala.network/learn/basics/oracle)

## resources

[community](https://wiki.acala.network/general/acala-portal/community)

[news](https://wiki.acala.network/general/acala-portal/news)

[contributing](https://wiki.acala.network/misc/contributing)
