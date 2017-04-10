# Node.js boilerplate
[![Build Status](https://travis-ci.org/sanderrouk/Node-Starterkit.svg?branch=master)](https://travis-ci.org/sanderrouk/Node-Starterkit) [![NSP Status](https://nodesecurity.io/orgs/phantomarts/projects/c0314d66-533a-4c04-87e9-ee888239e1d3/badge)](https://nodesecurity.io/orgs/phantomarts/projects/c0314d66-533a-4c04-87e9-ee888239e1d3)

This project is based on the Pluralsight course "Building a JavaScript Development Environment" by Cory House. However it can and most likely will be modified to suit my own practices and needs. 
This project is great for starting JavaScript projects as it provides many necessary tools for proper JS development such as linting, testing, ci, dev server, deployment, package managment and so on.

How it works is that, you write code into the src directory, you provide external js libraries into the vendor.js file and then use
the build function to minify your work for deployment.

The point of the badges is to demonstrate that this project integrates with CI easily and that it has no vulnerabilities.
For CI it has a config for both Travis CI and Appveyor CI.
## Getting started
Using this as a boilerplate for a project is simple. Just fork the project and you should be ready to go. 
However keep in mind that Node 4 or greater is required to run this. After installing node and forking the project
simply run the following command in the root of the project:
```bash
$ npm install
```

## Usage
The package.json file has quite a few scripts which can be viewed and explored. However here are some I find to be more significant.

To start the project as a dev environment:
```bash
$ npm start -s
```

To run unit tests(are also run as part of start):
```bash
$ npm test
```

To open a localtunnel in order to share your local dev environment:
```bash
$ npm run share
```

To build the application for deployment:
```bash
$ npm run build
```

To deploy directly to surge.sh (run build beforehand):
```bash
$ npm run deploy
```

## Notes
There is a demo project included to show off how it works. Don't forget to get rid of it if using it.
