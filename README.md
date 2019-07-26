# basic-node-server

## Boilder Plate | Node Server Working
## A simple Boiler plate node server. ES6 enabled by babel
-- How to create Sub-Route Module (Ex: /api, /chat etc.)
------------
- package.json
```{
  "name": "nodees6test",
  "version": "1.0.0",
  "description": "",
  "main": "server.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "babel-node --presets es2015 server.js"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "babel-cli": "^6.26.0",
    "babel-preset-es2015": "^6.24.1"
  },
  "dependencies": {
    "express": "^4.17.1"
  }
}
```
