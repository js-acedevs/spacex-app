This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

## Setup

First, clone the repository into your local machine:

```sh
git clone https://github.com/js-acedevs/spacex-app.git
```

or using SSH

```sh
git clone git@github.com:js-acedevs/spacex-app.git
```

After you have a clone of your project into your local machine you are ready to test the project, but first:

cd into the folder

```sh
cd spacex-app
```

Install dependencies via npm or yarn

```sh
npm install or npm i
```

or

```bash
yarn add
```

## Start Application

And finally start the development server using the script below

```bash
npm run dev
```

You can visit <a href="http://localhost:3000">http://localhost:3000</a> to view the running application

## Start the build application

To start the build application run the script below

```bash
npm run build
```

after that do

```bash
npm start
```

You can visit <a href="http://localhost:3000">http://localhost:3000</a> to view the running application

## Tools

1. [Next](https://nextjs.org/)
1. [Typescript](https://www.typescriptlang.org)
1. [ESLint](https://eslint.org)
1. [Prettier](https://prettier.io)
1. [Husky](https://github.com/typicode/husky#readme)
1. [GraphQL](https://graphql.org/)
1. [GraphQL-Codegen](https://www.graphql-code-generator.com/)
1. [Apollo](https://www.apollographql.com/)

## Structure

### This app is structured based on atomic design patterns

[Learn more](https://github.com/danilowoz/react-atomic-design)

- :file_folder: components
  - :file_folder: atoms
  - :file_folder: molecules
  - :file_folder: organisms
  - :file_folder: templates
- :file_folder: config
- :file_folder: enums
- :file_folder: graphql
  - :file_folder: client
  - :file_folder: fragments
  - :file_folder: gen
  - :file_folder: hooks
  - :file_folder: mutation
  - :file_folder: query
  - :file_folder: subscription
- :file_folder: hooks
- :file_folder: interfaces
  - :file_folder: models
  - :file_folder: types
- :file_folder: pages
- :file_folder: styles
- :file_folder: utils

## Available Scripts

### start

Starts development server

### build

Builds production version of the App

### prettier

Runs prettier format

### type:check

Does typescript type checking

### lint

Lints all files in src folder

### codegen

Runs graphQL codegen
