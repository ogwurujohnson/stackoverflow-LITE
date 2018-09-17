# stackoverflow-LITE

[![Build Status](https://travis-ci.org/ogwurujohnson/stackoverflow-LITE.svg?branch=master)](https://travis-ci.org/ogwurujohnson/stackoverflow-LITE)
[![Coverage Status](https://coveralls.io/repos/github/ogwurujohnson/stackoverflow-LITE/badge.svg?branch=master)](https://coveralls.io/github/ogwurujohnson/stackoverflow-LITE?branch=master)
[![Code Climate](https://codeclimate.com/github/codeclimate/codeclimate/badges/gpa.svg)](https://codeclimate.com/github/ogwurujohnson/stackoverflow-LITE)


A platform for users to ask questions and give answers to asked questions.

## Implemented Features
* Users can create an account and login.
* Authenticated users can post questions.
* Authenticated users can delete their questions.
* Authenticated Users can post answers to questions.
* Users can view answers to questions.
* Users can mark an answer as the accepted answer to their question.
* Authenticated users can view all the questions they have asked on the platform.

## Extra Features
* Authenticated users can upvote or downvote an answer.
* Users can search for questions on the platform.
* Authenticated users get a notification when an answer is given to their question.


## Project Management
Project is managed [here](https://www.pivotaltracker.com/n/projects/2193169) using the project management tool, [Pivotal Tracker](https://www.pivotaltracker.com).

## Templates
UI templates are yet to be hosted

## Technologies Used
* [NodeJs](https://nodejs.org) - Run time environment.
* [ExpressJs](https://expressjs.com) - Web framework.
* [PostgreSQL](https://www.postgresql.org) - Object relational database.
* [Babel](https://babeljs.io) - Javascript compiler.
* [Eslint](https://eslint.org/) - Javascript linter. [Airbnb](https://www.npmjs.com/package/eslint-config-airbnb) style [guide](https://github.com/airbnb/javascript) was followed.

### Testing tools
* [Mocha](https://mochajs.org/) - A Javascript test framework.
* [Chai](http://chaijs.com) - Assertion library.
* [Istanbul](https://istanbul.js.org) - Javascript code instrumenter.
* [nyc](https://github.com/istanbuljs/nyc) - Istanbul's command line interface.

## Getting Started

### Installation
* Install [NodeJs](https://nodejs.org/en/download/) and [PostgreSQL](https://www.postgresql.org/download/) on your computer.
* Clone this repository using `git clone https://github.com/ogwurujohnson/stackoverflow-LITE.git`.
* Set up your environment variables in a `.env` file. Follow the pattern in the `config/config.js file`.
* You would find a sample.ennv file in your root folder, it contains samples of what you need to add to your .env file.
* Run `npm install` to install all dependencies.
* Run `npm run dev` to start the server.
* Navigate to [localhost:3000/api/v1](localhost:3000/api/v1) in your browser to access the application.

### Testing the application
Requirements
* [Postman](https://www.getpostman.com/) - API development and testing environment.

Testing with Postman
* Install Postman by following the link above.
* Navigate to `localhost:3000` in Postman to access the application.
* Use the API Documentation to access the endpoints available (link will be available soon).

Running unit tests.
* In an open terminal, navigate to the cloned project file.
* Run `npm test`. This runs tests and displays coverage data generated by [Istanbul's](https://istanbul.js.org) nyc.


## Author
[Ogwuru Johnson](https://www.github.com/ogwurujohnson)

