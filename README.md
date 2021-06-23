# fullstackopen

# Useful libraries && tools

For creating a new React app with all the necessary librairies.

```
npx create-react-app {name of app}
```

## Librairies

### graphql

The JavaScript reference implementation for GraphQL, a query language for APIs created by Facebook.

https://github.com/graphql/graphql-js

### apollo-client

Apollo Client is a fully-featured caching GraphQL client with integrations for React

https://github.com/apollographql/apollo-client

### apollo-server

Apollo Server is a community-maintained open-source GraphQL server.

https://github.com/apollographql/apollo-server

### json-server

Allow to create a local database with json extension for simulate a backend rapidly.

https://github.com/typicode/json-server

### axios

Allow to make HTTP request easly.

https://github.com/axios/axios

### express

backend library for simplify http request routing and middleware configuration

https://github.com/expressjs/express

### nodemon

Provide autorefresh when a backend file is modified

https://github.com/remy/nodemon

### cors

Allow cross-origin requests for node backend

https://github.com/expressjs/cors

### mongoose

High level API to communicate with a MongoDB database.

https://github.com/Automattic/mongoose

### dotenv

Facilitate the use of environnement variable in .env files.

https://github.com/motdotla/dotenv

### eslint

Linter that throw errors when the code doesn't respect standards.

https://github.com/eslint/eslint

### jest

Jest is a javascript testing framework.

https://github.com/facebook/jest

### crossenv

Sometimes windows prompt crash when we pass out variable environment. Crossenv car resolve that issue.

https://github.com/kentcdodds/cross-env

### supertest

Supertest is a testing framework for HTTP requests.

https://github.com/visionmedia/supertest

### express-async-errors

This library allow us to get rid of the try/catch block in async/await blocks.

https://github.com/davidbanham/express-async-errors

### bcrypt

Bcrypt is a library for hashing passwords.

https://github.com/kelektiv/node.bcrypt.js

### mongoose-unique-validator

This is an extension of mongoose to add a unique validator on fields before insert.

https://github.com/blakehaswell/mongoose-unique-validator

### jsonwebtoken

Permit to generate jsonwebtoken in order to verify authentification

https://github.com/auth0/node-jsonwebtoken

### prop-types

Prop-types is a tool that allow us to add some rules when receiving props inside a React child component.

https://github.com/facebook/prop-types

### eslint-plugin-jest

Disable the relative eslint errors due to jest non-standard syntax

https://github.com/jest-community/eslint-plugin-jest

### react-testing-library

Suite of tools that encourage the tests in React apps

https://github.com/testing-library/react-testing-library

### Cypress

Cypress is an EndToEnd library in order to test complete application with front-end and back-end.

https://github.com/cypress-io/cypress

### eslint-plugin-cypress

Disable the relative eslint errors due to cypress non-standard syntax

https://github.com/cypress-io/eslint-plugin-cypress

### redux

Redux permit to save states at the root of the application with the concept of stores

https://github.com/reduxjs/redux

### deep-freeze

Deepfreeze make sure that our reducer is an immutable function.

https://github.com/substack/deep-freeze

### react-redux

React-redux simplify the bindings between React and Redux withe the use of Dispatcher and Selector.

https://github.com/reduxjs/react-redux

### redux-devtools-extension

This library coupled with ReduxDevTools, permit to follow every acions made on the application and simplify debugging.

https://github.com/zalmoxisus/redux-devtools-extension

### redux-thunk

This library allow to execute asynchronous dispatch with redux stores.

https://github.com/reduxjs/redux-thunk

### react-router-dom

React-router-dom provides React components for manage the history and navigation on the front end of the application with Router, Link, Switch...

https://github.com/ReactTraining/react-router

### styled-components

Styled-components allow us to create our own custom html components with tagged template literals.

https://github.com/styled-components/styled-components

### Tailwindcss

A utility-first CSS framework for rapidly building custom user interfaces.

https://github.com/tailwindlabs/tailwindcss

### Semantic-UI-React

Love this CSS framework

https://github.com/Semantic-Org/Semantic-UI-React

### uuid

generate unique key

https://github.com/uuidjs/uuid

## Tools

### Heroku

Web application that can host web application for free if it's personnal development.

https://www.heroku.com/

### MongoDB Atlas

Web application that permit to host MongoDB database.

https://www.mongodb.com/fr-fr/cloud/atlas

# Problems encountred

## React auto refresh with wsl2

### Solution n°1

We need to create a .env file at the root of the projet and add this two environnement variable.

```
CHOKIDAR_USEPOLLING=true
FAST_REFRESH=false
```

### Solution n°2

Put the project inside the wsl directory that can be accessible with \\wsl$ variable inside Windows environement.

## Cypress launch with Windows WSL

Cypress doesn't launch and don't give us any errors.
We need to first download an XServer for windows, for example : https://github.com/ArcticaProject/vcxsrv and configure the shortcut target with -ac arguments.

```
C:/{pathtoexecutable}/xlaunch.exe -ac
```

When Xlaunch is launched, we need to tick the "Disable access control" box.

Next we need to export the DISPLAY environement variable with the wsl2 ip thanks to this script.

```
# set DISPLAY variable to the IP automatically assigned to WSL2
export DISPLAY=$(cat /etc/resolv.conf | grep nameserver | awk '{print $2; exit;}'):0.0
```

After that we start the dbus service with this command

```
# Automatically start D-Bus to allow communication with Cypress GUI app
sudo /etc/init.d/dbus start &> /dev/null
```
