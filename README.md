# fullstackopen 2021
*Deep Dive Into Modern Web Development*

#### The course of full stack open 2021

* part0 Fundamentals of Web apps
* part1 Introduction to React
* part2 Communicating with server
* part3 Programming a server with NodeJS and Express
* part4 Testing Express servers, user administration
* part5 Testing React apps
* part6 State management with Redux
* part7 React router, custom hooks, styling app with CSS and webpack
* part8 GraphQL
* part9 TypeScript
* part10 React Native
* part11 CI/CD

# Create React App

```
npx create-react-app myapp {. | myApp}
cd my-app
npm start
```
# Support example apps

* [Application Courses React App ](https://github.com/FullStack-HY/part2-notes/)

# Useful 

* [Thymeleaf used along with Java Spring](https://www.thymeleaf.org/)
* [ECMAScript6-ES6](http://es6-features.org/#BlockScopedVariables)
* [JS Arrow function expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
* [create-react-app](https://github.com/facebook/create-react-app)
* [the React-library](https://reactjs.org/docs/getting-started.html)
* [React-component](https://reactjs.org/docs/components-and-props.html)
* [Babel](https://babeljs.io/)
* [XML](https://developer.mozilla.org/en-US/docs/Web/XML/XML_introduction)
* [Props It is possible to pass data to components using so called props.](https://reactjs.org/docs/components-and-props.html)
* [JSbin](https://jsbin.com/?js,console)
* [ECMAScript compatibility table](http://kangax.github.io/compat-table/es2016plus/)
* [Install JSON Server](https://github.com/typicode/json-server#getting-started)
* [Using Concurrently with json-server and your React App](https://medium.com/@joelazarz/using-concurrently-with-json-server-and-your-react-app-3d07487acc50)
* [React Filter](https://sebhastian.com/react-filter/)
```
npm install -g json-server
```
* Run JSON Server on your app
```
npx json-server --port 3001 --watch db.json
```
* Install json-server as a development dependency (only used during development) by executing the command:
```
npm install json-server --save-dev
```
and making a small addition to the scripts part of the package.json file:

```
"server": "json-server -p3001 --watch db.json"
```
After install j-son server and backend as dependencies in our project.

```
 npm i -D json-server backend
```
In package.json
```
"dev": "concurrently \"npm run start\" \"npm run json-server\""
```
* [What the heck is the event loop anyway?](https://www.youtube.com/watch?v=8aGhZQkoFbQ)

* [Promise based HTTP client for the browser and node.js](https://www.npmjs.com/package/axios)
Execute command at the root of the project:
```
npm install axios
```
Axios is now included among the other dependencies: in package.json in section dependencies

## Programer's materials

* [single responsibility principle](https://en.wikipedia.org/wiki/Single-responsibility_principle)
* [transitive dependencies ](https://lexi-lambda.github.io/blog/2016/08/24/understanding-the-npm-dependency-model/)
* [semantic versioning](https://docs.npmjs.com/about-semantic-versioning)



# Question everything

Debugging Full Stack applications may seem tricky at first. Soon our application will also have a database in addition to the frontend and backend, and there will be many potential areas for bugs in the application.

When the application "does not work", we have to first figure out where the problem actually occurs. It's very common for the problem to exist in a place where you didn't expect it to, and it can take minutes, hours, or even days before you find the source of the problem.

The key is to be systemic. Since the problem can exist anywhere, you must question everything, and eliminate all possibilities one by one. Logging to the console, Postman, debuggers, and experience will help.

When bugs occur, the worst of all possible strategies is to continue writing code. It will guarantee that your code will soon have even more bugs, and debugging them will be even more difficult. The stop and fix principle from Toyota Production Systems is very effective in this situation as well.


## Jidoka - Build a culture of stopping to fix ….

***Construire une culture d'arrêt pour résoudre le problème, pour obtenir la bonne qualité du premier coup***


![](.resources/jidoka.webp)
La méthode Jidoka consiste à arrêter le travail dès qu'un problème survient pour éviter de produire des éléments défectueux. Il s'agit ainsi de « construire la qualité dans le produit, en détectant les anomalies dans le processus

## JavaScript materials

* In Js Toutes les valeurs sont vraies sauf si elles sont définies comme fausses (c'est-à-dire, à l'exception de faux, 0, -0, 0n, "", null, undefined et NaN). 
```
//Truthy
if (true)
if ({})
if ([])
if (42)
if ("0")
if ("false")
if (new Date())
if (-42)
if (12n)
if (3.14)
if (-3.14)
if (Infinity)
if (-Infinity)
```

* [Mozilla's JavaScript Guide](http://kangax.github.io/compat-table/es2016plus)
* [A re-introduction to JavaScript (JS tutorial) ](http://kangax.github.io/compat-table/es2016plus)
* [You-Dont-Know-JS](https://github.com/getify/You-Dont-Know-JS)
* [javascript.info](https://github.com/getify/You-Dont-Know-JS)
* [Destructuring](https://medium.com/@lcriswell/destructuring-props-in-react-b1c295005ce0)
* [JS Refactor plugin for VS Code that automatically changes short form arrow functions into their longer form, and vice versa.](https://marketplace.visualstudio.com/items?itemName=cmstead.jsrefactor)
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
* [Template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)
* [Spread syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
* [npm script](https://docs.npmjs.com/cli/v7/using-npm/scripts)
# JavaScript Arrays

* [Higher-order functions](https://www.youtube.com/watch?v=BMUiFMZr7vk&list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84)
* [Map](https://www.youtube.com/watch?v=bCqtb-Z5YGQ&list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84&index=3)
* [Reduce basics](https://www.youtube.com/watch?v=Wl98eZpkp-c&t=31s)
* [Index as a key is an anti-pattern](https://robinpokorny.medium.com/index-as-a-key-is-an-anti-pattern-e0349aece318)
* [Simplify your JavaScript – Use .map(), .reduce(), and .filter()](https://medium.com/poka-techblog/simplify-your-javascript-use-map-reduce-and-filter-bd02c593cc2d)


# Web
* [Representational State Transfer (REST)](https://www.ics.uci.edu/~fielding/pubs/dissertation/rest_arch_style.htm)
* [Status Code Definitions](https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.2.5)
* [Same origin policy and CORS](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
* [Same-origin policy](https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy)
* [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)

# Express

***Fast, unopinionated, minimalist web framework for node.***

Express est une infrastructure d'applications Web Node.js minimaliste et flexible qui fournit un ensemble de fonctionnalités robuste pour les applications Web et mobiles. 
route-parameters
```
npm install express
```
On node app
```
const express = require('express')
const app = express()
app.use(express.json());
```
* [A signale Part3 - Receiving data ](https://fullstackopen.com/en/part3/node_js_and_express#receiving-data)

## Error Handling on Express

***Error Handling refers to how Express catches and processes errors that occur both synchronously and asynchronously. Express comes with a default error handler so you don’t need to write your own to get started***

* [Error Handling middleware](https://expressjs.com/en/guide/error-handling.html)

# ExpressJS Async Errors

```
https://github.com/davidbanham/express-async-errors
```
# Morgan

npm install express-async-errors --save

***HTTP request logger middleware for node.js***
* [morgan](morganhttps://github.com/expressjs/morgan)

## Problems on React 

* [Use Hooks with Array and Object](https://dev.to/brettblox/react-hooks-usestate-43en)
* [never mutate state directly in React!](https://reactjs.org/docs/state-and-lifecycle.html#using-state-correctly)
* [lists-and-keys](https://reactjs.org/docs/lists-and-keys.html#keys)

# Cors
* [cors](https://github.com/expressjs/cors)
***CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.***

# Heroku
* [Getting Started on Heroku with Node.js](https://devcenter.heroku.com/articles/getting-started-with-nodejs)
***Heroku is a platform as a service (PaaS) that enables developers to build, run, and operate applications entirely in the cloud.***
```
sudo npm install -g heroku
heroku --version
```
* Add a file called Procfile to the project's root to tell Heroku how to start the application.
```
web: npm start
```

## Step 1 Deploying with Git
* [Deploying with Git](https://devcenter.heroku.com/articles/git#creating-a-heroku-remote)

***Heroku manages app deployments with Git, the popular version control system. You definitely don’t need to be a Git expert to deploy code to Heroku, but it’s helpful to learn the basics.***
```
cd myapp

git init
Initialized empty Git repository in .git/

git add .

git commit -m "My first commit"
Created initial commit 5df2d09: My first commit
 44 files changed, 8393 insertions(+), 0 deletions(-)
 create mode 100644 README
 create mode 100644 Procfile
 create mode 100644 app/controllers/source_file
...
```

```
heroku create
Creating app... done, ⬢ thawing-inlet-61413
https://thawing-inlet-61413.herokuapp.com/ | https://git.heroku.com/thawing-inlet-61413.git
```
 tell you the difference between your branch and the remote one.
```
git remote -v
heroku  https://git.heroku.com/thawing-inlet-61413.git (fetch)
heroku  https://git.heroku.com/thawing-inlet-61413.git (push)
```

```
git remmote add heroku https://git.heroku.com/infinite-sierra-55116.git
git branch -u heroku/master
```

# Working with git remotes on Heroku

Generally, you will add a git remote for your Heroku app during the Heroku app creation process, i.e. `heroku create`. However, if you are working on an existing app and want to add git remotes to enable manual deploys, the following commands may be useful.

## Adding a new remote

### Add a remote for your Staging app and deploy
Note that on Heroku, you must always use `master` as the destination branch on the remote. If you want to deploy a different branch, you can use the syntax `local_branch:destination_branch` seen below (in this example, we push the local `staging` branch to the `master` branch on heroku.
```
$ git remote add staging https://git.heroku.com/staging-app.git
$ git push staging staging:master
```
In some cases, your local branch may be missing some commits that were already deployed to Heroku, resulting in an error. If you are **very sure** you want to proceed, add the `--force` (`-f`) flag.
```
$ git push staging staging:master -f
```

### Add a remote for your Production app and deploy
By convention, the remote name "heroku" is typically used for the production application.
```
$ git remote add heroku https://git.heroku.com/app.git
$ git push heroku master
```

### Add a remote via Heroku CLI
As [@voke](https://gist.github.com/randallreedjr/aa89e069371d07371882eea2df15fb4d#gistcomment-3079752) points out, you can alternatively use a [Heroku CLI command](https://devcenter.heroku.com/articles/git#creating-a-heroku-remote) to add your remote. However, it looks like this will always use the default remote name `heroku` for the remote. If you would like to use a different name for your remote, see the "Rename a remote" section below.
```
$ heroku git:remote -a staging-app
```

**Edit:** Thanks to [@nruth](https://gist.github.com/randallreedjr/aa89e069371d07371882eea2df15fb4d#gistcomment-3141611) for pointing out you can supply a remote name to this command with the `-r` flag.
```
$ heroku git:remote -a staging-app -r staging
```

### Add a remote using the SSH protocol
As [@Saworieza](https://gist.github.com/randallreedjr/aa89e069371d07371882eea2df15fb4d#gistcomment-2784952) points out, all of the examples above use the https protocol for connecting to the remotes, but it is also possible to connect via ssh.
```
$ git remote add staging git@heroku.com:staging-app.git
$ git remote add heroku git@heroku.com:app.git
```

## Other useful commands

### List your git remotes

The `-v` is the flag for "verbose" and includes the remote URL in addition to the remote name.

```
$ git remote -v
```

### Rename a remote
```
$ git remote rename heroku staging
```

### Change a remote URL or protocol
If you have already created https remotes and want to switch them to use ssh, the following command can be used. This command can also be used to change the target URL without changing the protocol
```
$ git remote set-url staging git@heroku.com:staging-app.git
$ git remote set-url heroku https://git.heroku.com/production-app.git
```

# Serving static files in Express
*[Static](http://expressjs.com/en/starter/static-files.html)
***To serve static files such as images, CSS files, and JavaScript files, use the express.static built-in middleware function in Express.***
## Debugging React applications

* On application you can use instruction ```debugger``` 

* [React Developer Tools Firefox](https://addons.mozilla.org/fr/firefox/addon/react-devtools/)
* [React Developer Tools Chrome](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
* [The Beginner's Guide to React](https://egghead.io/courses/the-beginner-s-guide-to-react)

# How Debugging React applications on console

## Use
```
console.log('props value is', props)
```
## Never use
```
console.log('props value is' + props)
```
The most important snippet is the one for the console.log() command, for example clog. This can be created like so: 
```
{
  "console.log": {
    "prefix": "clog",
    "body": [
      "console.log('$1')",
    ],
    "description": "Log output to console"
  }
}
```

# Proxy 

Changes on the frontend have caused it to no longer work in development mode (when started with command ***npm start***), as the connection to the backend does not work. 

![](.resources/Proxy.png)

# Mongoose

* [Mongoose](https://www.npmjs.com/package/mongoose)

***Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment. Mongoose supports both promises and callbacks.***

```
npm install mongoose
```
# MongoDB

* [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)

We will use [MongoDB](https://www.mongodb.com/) which is a so-called [document database](https://en.wikipedia.org/wiki/Document-oriented_database).

Document databases differ from relational databases in how they organize data as well as the query languages they support. Document databases are usually categorized under the NoSQL umbrella term.

Read now the chapters on [collections](https://docs.mongodb.com/manual/core/databases-and-collections/) and [documents](https://docs.mongodb.com/manual/core/document/) from the MongoDB manual to get a basic idea on how a document database stores data.

* Connection
NB: Please note the password is the password created for the database user, not your MongoDB Atlas password. Also, if you created password with special characters, then you'll need to [URL encode that password](https://docs.atlas.mongodb.com/troubleshoot-connection/#special-characters-in-connection-string-password).

* Schema

***After establishing the connection to the database, we define the schema for a note and the matching model:***

``` 

const noteSchema = new mongoose.Schema({
  content: String,
  date: Date,
  important: Boolean,
})

const Note = mongoose.model('Note', noteSchema)
```

* Creating and saving objects

***Next, the application creates a new note object with the help of the Note model:***

```
const note = new Note({
  content: 'HTML is Easy',
  date: new Date(),
  important: false,
})
```
## Validation Mongoose

***One smarter way of validating the format of the data before it is stored in the database, is to use the validation functionality available in Mongoose.We can define specific validation rules for each field in the schema:***

* [Validation Mongoose](https://mongoosejs.com/docs/validation.html)

```
npm install --save mongoose-unique-validator --legacy-peer-deps
```

```
const schema = new Schema({
  name: {
    type: String,
    required: true
  }
});
const Cat = db.model('Cat', schema);

// This cat has no name :(
const cat = new Cat();
cat.save(function(error) {
  assert.equal(error.errors['name'].message,
    'Path `name` is required.');

  error = cat.validateSync();
  assert.equal(error.errors['name'].message,
    'Path `name` is required.');
});

```
Other example 
```
var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
 
// Define your schema as normal.
var userSchema = mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, index: true, unique: true, required: true },
    password: { type: String, required: true }
}
);
```

NB: On update operations, mongoose validators are off by default. Read the documentation to determine how to enable them.
```
function setRunValidators() {
    this.setOptions({ runValidators: true });
  }

mongoose.plugin(schema => {
schema.pre('update', setRunValidators);
});
// Apply the uniqueValidator plugin to userSchema.
userSchema.plugin(uniqueValidator);
```


// Pre hook for `findOneAndUpdate`
personSchema.pre('findOneAndUpdate', function(next) {
    this.options.runValidators = true;
    next();
  });

# Lint

Before we move onto the next part, we will take a look at an important tool called lint. Wikipedia says the following about lint:

    Generically, lint or a linter is any tool that detects and flags errors in programming languages, including stylistic errors. The term lint-like behavior is sometimes applied to the process of flagging suspicious language usage. Lint-like tools generally perform static analysis of source code.

In compiled statically typed languages like Java, IDEs like NetBeans can point out errors in the code, even ones that are more than just compile errors. Additional tools for performing static analysis like checkstyle, can be used for expanding the capabilities of the IDE to also point out problems related to style, like indentation.

In the JavaScript universe, the current leading tool for static analysis aka. "linting" is ESlint.

Let's install ESlint as a development dependency to the backend project with the command:

```
npm install eslint --save-dev
```
After this we can initialize a default ESlint configuration with the command:
```
node_modules/.bin/eslint --init
```
The configuration will be saved in the .eslintrc.js file:
```
module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
    }
};
```
Let's immediately change the rule concerning indentation, so that the indentation level is two spaces.
```
"indent": [
    "error",
    2
],
```
Inspecting and validating a file like index.js can be done with the following command:
```
node_modules/.bin/eslint index.js
```
It is recommended to create a separate npm script for linting:
```
{
  // ...
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js",
    // ...
    "lint": "eslint ."
  },
  // ...
}
```
Now the npm run lint command will check every file in the project.


Also the files in the build directory get checked when the command is run. We do not want this to happen, and we can accomplish this by creating an [.eslintignore](https://eslint.org/docs/user-guide/configuring/#ignoring-files-and-directories) file in the project's root with the following contents:

Let's not fix these issues just yet.

A better alternative to executing the linter from the command line is to configure a eslint-plugin to the editor, that runs the linter continuously. By using the plugin you will see errors in your code immediately. You can find more information about the Visual Studio ESLint plugin [here](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint).


![](.resources/ESlint.png)

This makes errors easy to spot and fix right away.

ESlint has a vast array of rules that are easy to take into use by editing the .eslintrc.js file.

Let's add the eqeqeq rule that warns us, if equality is checked with anything but the triple equals operator. The rule is added under the rules field in the configuration file.

```
{
  // ...
  'rules': {
    // ...
   'eqeqeq': 'error',
  },
}
```

While we're at it, let's make a few other changes to the rules.

Let's prevent unnecessary [trailing spaces](https://eslint.org/docs/rules/no-trailing-spaces) at the ends of lines, let's require that [there is always a space before and after curly braces](https://eslint.org/docs/rules/object-curly-spacing), and let's also demand a consistent use of whitespaces in the function parameters of arrow functions.


```
//On .eslintrc.js
{
  // ...
  'rules': {
    // ...
    'eqeqeq': 'error',
    'no-trailing-spaces': 'error',
    'object-curly-spacing': [
        'error', 'always'
    ],
    'arrow-spacing': [
        'error', { 'before': true, 'after': true }
    ]
  },
}
```

Our default configuration takes a bunch of predetermined rules into use from eslint:recommended:

```
'extends': 'eslint:recommended',
```
This includes a rule that warns about console.log commands. [Disabling](https://eslint.org/docs/user-guide/configuring/#configuring-rules) a rule can be accomplished by defining its "value" as 0 in the configuration file. Let's do this for the no-console rule in the meantime.

```
{
  // ...
  'rules': {
    // ...
    'eqeqeq': 'error',
    'no-trailing-spaces': 'error',
    'object-curly-spacing': [
        'error', 'always'
    ],
    'arrow-spacing': [
        'error', { 'before': true, 'after': true }
    ],
    'no-console': 0  },
}
```
NB when you make changes to the .eslintrc.js file, it is recommended to run the linter from the command line. This will verify that the configuration file is correctly formatted:


![](.resources/ESlint2.png)

If there is something wrong in your configuration file, the lint plugin can behave quite erratically.

Many companies define coding standards that are enforced throughout the organization through the ESlint configuration file. It is not recommended to keep reinventing the wheel over and over again, and it can be a good idea to adopt a ready-made configuration from someone else's project into yours. Recently many projects have adopted the Airbnb [Javascript style guide](https://github.com/airbnb/javascript) by taking Airbnb's [ESlint](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb) configuration into use.

 # Jest 
Jest est un framework de test JavaScript de qualité qui met l'accent sur la simplicité.

Il fonctionne avec les projets utilisant : Babel, TypeScript, Node, React, Angular, Vue et plus encore !
```
npm install --save-dev jest
```

Another way of running a single test (or describe block) is to specify the name of the test to be run with the -t flag:
```
npm test -- -t 'when list has only one blog, equals the likes of that'
```

# Lodash 
A modern JavaScript utility library delivering modularity, performance & extras.

* [Why Lodash?](https://lodash.com/)

# cross-env
cross-env makes it so you can have a single command without worrying about setting or using the environment variable properly for the platform. Just set it like you would if it's running on a POSIX system, and cross-env will take care of setting it properly.


* [cross-env](https://www.npmjs.com/package/cross-env)
```
npm install --save-dev cross-env
```

# supertest

The motivation with this module is to provide a high-level abstraction for testing HTTP, while still allowing you to drop down to the lower-level API provided by superagent.

* [supertest](https://github.com/visionmedia/supertest)

```
npm install supertest --save-dev
```

# Testing Mongoose with Jest

*[Testing Mongoose with Jest](https://mongoosejs.com/docs/jest.html)

To change your ```testEnvironment``` to Node.js, add ```testEnvironment``` to your ```jest.config.js``` file:

```
module.exports = {
  testEnvironment: 'node'
};
```

```
npm test -- tests/note_api.test.js
npm test -- -t "a specific note is within the returned notes"
npm test -- -t 'notes'
```
## Promises chaining

# Useful libraries

# Useful for VScode

## Protip: Visual Studio Code snippets

 [Instructions for creating snippets can be found here.](https://code.visualstudio.com/docs/editor/userdefinedsnippets#_creating-your-own-snippets)

 [Useful, ready-made snippets can also be found as VS Code plugins, in the marketplace.](https://marketplace.visualstudio.com/items?itemName=xabikos.ReactSnippets)


# command-line parameters Node app

***You can get the command-line parameters from the [process.argv](https://nodejs.org/docs/latest-v8.x/api/process.html#process_process_argv) variable.***

# Problems on Code React 

## [Hoock with Array and Object](https://dev.to/brettblox/react-hooks-usestate-43en)
# Problems encountred

## Update npm

```
npm install -g npm
```

## React-scripts not found

You need for node_module

```
npm install react-scripts --save
```

## Problem can't find module

```
npm cache verify && rm -rf node_modules/ && npm i
```
or 
```
npm i --legacy-peer-deps
```
or
```
npm update --force
```


Node applicaiton:  We can update the dependencies of the project with the command:

```
npm update
```

Node applicaiton: Likewise, if we start working on the project on another computer, we can install all up-to-date dependencies of the project defined in package.json with the command:

```
npm install
```
## How to efficiently update your npm dependencies ?

Unfortunately, npm doesn't integrate natively any upgrade tool. So to do it, you need to install a new global dependency. And here is a good one: npm-check. You can use it by running the following: 

```
npm install -g npm-check
```
And then, in your repository :  npm-check -u (-u options activate the interactive update).
```
npm-check -u
```
* [How to efficiently update your npm dependencies ?](https://code-trotter.com/web/how-to-efficiently-update-your-npm-dependencies/)
## How to run multiple commands concurrently
[Concurrently](https://www.npmjs.com/package/concurrently)
***Run multiple commands concurrently. Like npm run watch-js & npm run watch-less but better.***

* The tool is written in Node.js, but you can use it to run any commands.
```
npm install -g concurrently
```
* or if you are using it from npm scripts:
```
npm install concurrently --save
```

## Active Debugging Node applications

### Chrome dev tools

Debugging is also possible with the Chrome developer console by starting your application with the command:

```
node --inspect index.js
```

You can access the debugger by clicking the green icon - the node logo - that appears in the Chrome developer console:

![](.resources/DebuggingChrome.png)

## Node App auto refresh with wsl2 

 * [nodemon](https://github.com/remy/nodemon) 

```
// Install nodemon globally with Node JS
npm install nodemon -g
```

```
npm install --save-dev nodemon
```

```
// On package.json in   "scripts" section add 
"dev": "nodemon -L index.js", -A signaler
```

# define the value of an environment variable when the application is started:

***Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env. Storing configuration in the environment separate from code is based on The Twelve-Factor App methodology.***

* [the dotenv library](https://github.com/motdotla/dotenv#readme)

```
# with npm
npm install dotenv

# or with Yarn
yarn add dotenv
```
As early as possible in your application, require and configure dotenv.
```
require('dotenv').config()
```
Create a .env file in the root directory of your project. Add environment-specific variables on new lines in the form of NAME=VALUE. For example:
```
DB_HOST=localhost
DB_USER=root
DB_PASS=s1mpl3
```

process.env now has the keys and values you defined in your .env file.
```
const db = require('db')
db.connect({
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS
})
```

### Fix warnings in Browser Toolbox.
[hg.mozilla.org](https://hg.mozilla.org/integration/autoland/rev/b800ffcad8496b9124b7d246b15b4443d0be3830)

# Useful libraries && tools

For creating a new React app with all the necessary librairies.

```
npx create-react-app {name of app}
```

## Librairies

### date-fns

Comprehensive date library

https://github.com/date-fns/date-fns

### yup

Dead simple Object schema validation

https://github.com/jquense/yup

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

### Ngrok

Public url for testing

https://ngrok.com/

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

