# stackoverflow-LITE

[![Build Status](https://travis-ci.org/ogwurujohnson/stackoverflow-LITE.svg?branch=master)](https://travis-ci.org/ogwurujohnson/stackoverflow-LITE)
[![Coverage Status](https://coveralls.io/repos/github/ogwurujohnson/stackoverflow-LITE/badge.svg?branch=master)](https://coveralls.io/github/ogwurujohnson/stackoverflow-LITE?branch=master)
[![Code Climate](https://codeclimate.com/github/codeclimate/codeclimate/badges/gpa.svg)](https://codeclimate.com/github/ogwurujohnson/stackoverflow-LITE)

## Introduction 
StackOverflow-lite is a (Work In Progress) web app built using Nodejs and Express, that enables users to post and answer questions, comment on questions, upvote/downvote question and answers.

## Features
- Users can view all question on the app.
- Users can sort all questions by popularity(answer/comment count) and rating(score).
- Users can post answers to questions.
- Users can post questions.
- Users can accept an answer to their question as the preferred answer.
- Users can edit their questions and answers.
- Users can post comments to questions and answers.
- Users can upvote/downvote questions and answers

## Technology stack used
- NodeJS
- ExpressJS

## Getting Started
- Ensure you have Node and Node Package Manager installed
- Clone the repo
`$ git clone https://github.com/ogwurujohnson/stackoverflow-LITE.git`

- Checkout to the feature branch
`$ git checkout feature`

- Install the required node packages by running 
`$ npm install`

- start the application by running
`$ npm run dev`

- test endpoints on Postman or another api testing service by running
`$ npm test `

## API endpoints
- to get all questions
	- GET `https://localhost:3000/v1/questions`

- to get one question but its id
	- GET `https://localhost:3000/v1/questions/:questionId`

- to post a question
	- POST `https://localhost:3000/v1/questions`
with a JSON body of the following format:
<pre><code>
 {
 	"title": "<i>question title</i>",
 	"description": "<i>question body</i>",
 	"userId": "<i>user id</i>"}
</code></pre>

- to post an answer to a question of questionId
	- POST `https://localhost:3000/v1/questions/:questionId/answers`

- to update a question of questionId
	- PATCH `https://localhost:3000/v1/questions/:questionId`
with a JSON body of the following format: 
<pre><code>
{
	"question": "<i>attribute to be updated</i>",
	
}
</code></pre>	
	> Where **attribute** can be *score*, *title* or *description*.
	> If **attribute** is *score*, **value** must be *increment* or *decrement*.
	> if **attribute** is *title* or *body*, **value** should be required title or body update respectively.

- to accept an answer to your question as your preferred answer
	- PATCH `https://localhost:3000/v1/questions/:questionId/answers/:answerId`

- to delete a question of questionId
	- DELETE  `https://localhost:3000/v1/questions/:questionId`

## Testing
Uses Mocha, Chai and Chai-http to test, and Nyc for test coverage

- to test, run
`$ npm test`

- to see test coverage, run
`$ npm run coverage`

## Current Limitations

## How to contribute

## Author
`Ogwuru Johnson`

