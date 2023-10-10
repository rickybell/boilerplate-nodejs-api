# Boilerplate NodeJs simple Api project.

## What is this repository.

Every time we have to create an Api project, mainly using NodeJs as a platform, we have to add several packages and their configuration files.

Trying to minimize the initialisation time of these projects, we created this basic project with a structure of folders to organize and also adding several packages to speed up this initialisation and gain in productivity.

There is a script written in Bash script to generate the framework, add packages and generate the configuration files.

## Dependencies

- @overnightjs/core
- axios
- body-parser
- chalk
- config
- express
- jet-logger
- morgan
- path
- save-dev

## Dev Dependencies
- @types/config
- @types/express
- @types/jasmine
- @types/jest
- @types/mocha
- @types/morgan
- @types/node
- @typescript-eslint/eslint-plugin
- @typescript-eslint/parser
- eslint
- jasmine
- jest
- nodemon
- ts-jest
- ts-node
- ts-node-dev
- typescript

## Run scripts

We can run the project in different ways
Basically development and tests.

### Development
```
"dev": "ts-node-dev --exit-child src/app.ts"
```
or 
```
"start": "nodemon src/ap.ts"
```
*Two ways, if you are using type-script you can use ts-node para rodar ou o bom e velho nodemon.*

### Tests

```
"test": "NODE_ENV=default_test jest --no-cache --verbose",	
```
