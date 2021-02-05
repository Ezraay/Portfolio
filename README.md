# My Portfolio

This repository stores my personal website. it's built on a [Node.js](https://nodejs.org/en/) and [Express](https://www.npmjs.com/package/express) base, using [EJS](https://www.npmjs.com/package/ejs) to create dynamic pages when necessary.
I also use [Typescript](https://www.npmjs.com/package/typescript) rather than regular Javascript to have less error prone code.

## Setup

If you just cloned the repo, setup is as simple as running two commands and creating a file.

#### Step 1

The first command is used to install any dependencies necessary to run the website.

```
npm install
```

#### Step 2

The second step involves creating a `.env` file in the root of the directory to store important environment variables. It should look something like this:

```
PORT=8000
```

#### Step 3

You're all set to run the server! This command ensures that the server restarts when it detects new changes through the use of [Nodemon](https://www.npmjs.com/package/nodemon).

```
npm run dev
```

To see the website in action, go to the following URL, replacing the port if necessary.  
http://localhost:8000

## Deployment
To compile the Typescript code into regular Javascript, and compile the .scss file, simply run:
```
npm run build
```
The server can then be started without file-change watching through:
```
npm start
```