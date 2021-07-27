# fullstackopen

# Useful libraries && tools

For creating a new React app with all the necessary librairies.

```
npx create-react-app {name of app}
```

## Librairies

### Formik

Forms without tears

https://github.com/formium/formik

### ts-node-dev

like nodemon but for ts

https://github.com/wclr/ts-node-dev

### ts-node 

ts-node is a TypeScript execution engine and REPL for Node.js.

https://github.com/TypeStrong/ts-node

### typescript

javascript with types.

https://github.com/microsoft/TypeScript

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

### DefinetivelyTyped

Website that reference all library that are typescript typed

https://definitelytyped.org/

### Apollo Client Devtools

Tool that permit to see the HTTP Post request made with apollo-client

https://chrome.google.com/webstore/detail/apollo-client-devtools/jdkknkkbebbapilgoeccciglkfbmbnfm/related

### Online code sandboxes

Expo Snack is an online editor for React Native
JSFiddle
CodePen

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

## Can't open Android Emulator with expo (In progress)
Ressources: https://gist.github.com/bergmannjg/461958db03c6ae41a66d264ae6504ade#install-tools-in-windows

### Solution 1
Ressource: https://stackoverflow.com/a/65295027/11631534
Here's the full steps I found worked for LAN development between my mobile and expo running in WSL2 (Ubuntu 20 on Windows 10 20H2):

1. One time at the start: open Expo ports inbound in Windows Firewall
Windows firewall should be on, and it should block inbound attempts by default.
The following will open the Expo ports 19000–19006, inbound, but only on a network that you have configured as "private" (that's the -Profile Private part):
(powershell as Admin)

```
New-NetFireWallRule -Profile Private -DisplayName 'Expo ports for LAN development' `
    -Direction Inbound -LocalPort 19000-19006 -Action Allow -Protocol TCP
(You can check it after with Get-NetFirewallRule |Where-Object {$_.DisplayName -Match "Expo.*"})
```

2. Point portproxy to WSL; Re-run "Each time WSL has a new IP address"
(I'm not sure yet how often the WSL IP address changes, but I suspect only a reboot would)

I saw stuff on the web, including other answers here, saying portproxy to connectaddress=127.0.0.1 but it did not work for me (WSL2, Windows 10 20H2).
I can't say why others found it worked, I can only say that repeated testing confirmed for me that 127.0.0.1 did not work, but the WSL IP address did work.

So here's a reusable command to auto set the connectaddress to the right WSL address:
(powershell — just for the easy inline Trim() — as Admin)
```
netsh interface portproxy add v4tov4 listenport=19000 listenaddress=0.0.0.0 `
    connectport=19000 connectaddress=$($(wsl hostname -I).Trim());

netsh interface portproxy add v4tov4 listenport=19001 listenaddress=0.0.0.0 `
    connectport=19001 connectaddress=$($(wsl hostname -I).Trim());
```
    
3. Point Metro to your dev machine LAN IP Address; Re-run inside WSL "Each time dev host has a new IP address"
This is the one that probably changes most often. Your laptop local network IP certainly changes when you change networks (e.g. home/office) — and can change at other times too.

Fortunately it's also pastable / aliasable:
WSL2 shell

```
export REACT_NATIVE_PACKAGER_HOSTNAME=$(netsh.exe interface ip show address "Wi-Fi" | grep 'Adresse IP' | sed -r "s/[^0-9.]//g")
```

echo Meteor will use dev machine IP address: $REACT_NATIVE_PACKAGER_HOSTNAME
(If your dev box doesn't change LAN often, you might get away with setting REACT_NATIVE_PACKAGER_HOSTNAME in your .bashrc / .zshrc)

I "wish I didn't have to re-run things and it could all be automated",
but that same laziness makes me happy to at least have commands 2 and 3 able to simple "rerun" and consistently get Expo LAN mode working for my WSL2-hosted Expo dev mode.

