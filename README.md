# stackoverflow-LITE

# StackOverflow-lite

[![Build Status](https://travis-ci.org/Darthrighteous/StackOverflow-lite.svg?branch=develop)](https://travis-ci.org/Darthrighteous/StackOverflow-lite)  [![Coverage Status](https://coveralls.io/repos/github/Darthrighteous/StackOverflow-lite/badge.svg?branch=develop)](https://coveralls.io/github/Darthrighteous/StackOverflow-lite?branch=develop)

## Introduction 
StackOverflow-lite is a (WorkInProgress) web app built using Nodejs and Express, that enables users to post and answer questions, comment on questions, upvote/downvote question and answers.

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
`$ git clone https://github.com/Darthrighteous/StackOverflow-lite.git`

- Checkout to the feature branch
`$ git checkout feature`

- Install the required node packages by running 
`$ npm install`

- start the application by running
`$ npm run nodemon`

- test endpoints on Postman or another api testing service

## API endpoints
- to get all questions
	- GET `https://localhost:4001/v1/questions`

- to get one question but its id
	- GET `https://localhost:4001/v1/questions/:questionId`

- to post a question
	- POST `https://localhost:4001/v1/questions`
with a JSON body of the following format:
<pre><code>
 {
 	"title": "<i>question title</i>",
 	"body": "<i>question body</i>",
 	"user": "<i>username</i>"}
</code></pre>

- to post an answer to a question of questionId
	- POST `https://localhost:4001/v1/questions/:questionId/answers`

- to update a question of questionId
	- PATCH `https://localhost:4001/v1/questions/:questionId`
with a JSON body of the following format: 
<pre><code>
{
	"attribute": "<i>attribute to be updated</i>",
	"value": "<i>update value</i>"
}
</code></pre>	
	> Where **attribute** can be *score*, *title* or *body*.
	> If **attribute** is *score*, **value** must be *increment* or *decrement*.
	> if **attribute** is *title* or *body*, **value** should be required title or body update respectively.

- to accept an answer to your question as your preferred answer
	- PATCH `https://localhost:4001/v1/questions/:questionId/answers/:answerId`

- to delete a question of questionId
	- DELETE  `https://localhost:4001/v1/questions/:questionId`

## Testing
Uses Jasmine to test, and Nyc for test coverage

- to test, run
`$ npm run test`

- to see test coverage, run
`$ npm run coverage`

## Current Limitations

## How to contribute
